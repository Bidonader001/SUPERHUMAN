import { NextResponse } from "next/server";
import { formToObject, inboxList, isFormSubmitDelivered } from "@/lib/formsubmit";
import { siteUrl } from "@/lib/url";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin") || siteUrl();
    const referer = req.headers.get("referer") || `${origin}/`;
    const contentType = req.headers.get("content-type") || "";
    let fields: Record<string, string> = {};
    let file: { blob: Blob; name: string } | undefined;

    if (contentType.includes("application/json")) {
      fields = { ...((await req.json()) as Record<string, string>) };
    } else {
      const fd = await req.formData();
      fields = formToObject(fd);
      const attachment = fd.get("attachment");
      if (attachment instanceof File && attachment.size > 0) {
        file = { blob: attachment, name: attachment.name };
      }
      if (typeof fd.get("_subject") === "string") fields._subject = String(fd.get("_subject"));
    }

    if (!fields._subject) fields._subject = "Superhuman website message";
    if (fields.email && !fields._replyto) fields._replyto = fields.email;
    if (fields["Full name"] && !fields.name) fields.name = fields["Full name"];

    const payload = { _template: "table", _captcha: "false", ...fields };
    const results = await Promise.all(
      inboxList().map(async (email) => {
        const url = "https://formsubmit.co/ajax/" + encodeURIComponent(email);
        const headers: Record<string, string> = {
          Accept: "application/json",
          Origin: origin,
          Referer: referer,
        };
        let res: Response;
        if (file) {
          const fd = new FormData();
          Object.entries(payload).forEach(([key, value]) => fd.append(key, value));
          fd.append("attachment", file.blob, file.name);
          res = await fetch(url, { method: "POST", headers, body: fd });
        } else {
          res = await fetch(url, {
            method: "POST",
            headers: { ...headers, "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        }
        const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
        return { email, ok: isFormSubmitDelivered(data), status: res.status, message: data.message || "" };
      }),
    );

    const delivered = results.filter((r) => r.ok);
    if (delivered.length === 0) {
      return NextResponse.json(
        {
          ok: false,
          message: results.map((r) => r.message).filter(Boolean).join(" ") || "FormSubmit did not accept the message.",
          results,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      needsActivation: results.some((r) => String(r.message || "").toLowerCase().includes("activate")),
      inboxes: delivered.map((r) => r.email),
      results,
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, message: err instanceof Error ? err.message : "Send failed." },
      { status: 500 },
    );
  }
}

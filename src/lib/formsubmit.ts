import { site } from "@/lib/site";

export function inboxList() {
  return Array.from(new Set([site.formEmail, ...site.formCopies]));
}

export function formToObject(fd: FormData) {
  const body: Record<string, string> = {};
  fd.forEach((value, key) => {
    if (key.startsWith("_") && key !== "_subject") return;
    if (typeof value === "string") {
      body[key] = value;
      return;
    }
    body[key] = value.name ? `[file: ${value.name}]` : "[file]";
  });
  if (body["Full name"] && !body.name) body.name = body["Full name"];
  if (body.Name && !body.name) body.name = body.Name;
  if (body.email && !body._replyto) body._replyto = body.email;
  return body;
}

export function isFormSubmitDelivered(data: { success?: string | boolean; message?: string }) {
  if (data.success === true || data.success === "true") return true;
  const msg = String(data.message || "").toLowerCase();
  return msg.includes("activate") || msg.includes("confirm your email") || msg.includes("check your email");
}

async function postOneInbox(email: string, fields: Record<string, string>, file?: File) {
  const url = "https://formsubmit.co/ajax/" + encodeURIComponent(email);
  const payload = {
    _template: "table",
    _captcha: "false",
    ...fields,
  };

  let res: Response;
  if (file && file.size > 0) {
    const out = new FormData();
    Object.entries(payload).forEach(([key, value]) => out.append(key, value));
    out.append("attachment", file, file.name);
    res = await fetch(url, { method: "POST", headers: { Accept: "application/json" }, body: out });
  } else {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
  }
  const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  return { email, ok: isFormSubmitDelivered(data), message: data.message || "", data };
}

export async function sendFormSubmit(fd: FormData, subject: string) {
  const file = fd.get("attachment");
  const attachment = file instanceof File && file.size > 0 ? file : undefined;
  const fields = { _subject: subject, ...formToObject(fd) };

  const results = await Promise.all(inboxList().map((email) => postOneInbox(email, fields, attachment)));
  const delivered = results.filter((r) => r.ok);
  if (delivered.length === 0) {
    throw new Error(results.map((r) => r.message).filter(Boolean).join(" ") || "Could not send. Check your connection and try again.");
  }

  return {
    ok: true as const,
    needsActivation: results.some((r) => String(r.message || "").toLowerCase().includes("activate")),
    inboxes: delivered.map((r) => r.email),
  };
}

export async function postFormToFormSubmit(form: HTMLFormElement, subject: string) {
  return sendFormSubmit(new FormData(form), subject);
}

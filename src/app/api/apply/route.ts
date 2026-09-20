import { NextResponse } from "next/server";
import { addApplication } from "@/lib/store";

export async function POST(req: Request) {
  const fd = await req.formData();
  if (String(fd.get("company") || "")) {
    return NextResponse.json({ ok: true });
  }
  const fullName = String(fd.get("fullName") || "").trim();
  const email = String(fd.get("email") || "").trim();
  const whatsapp = String(fd.get("whatsapp") || "").trim();
  if (!fullName || !email || !whatsapp) {
    return NextResponse.json({ error: "Name, email, and WhatsApp are required." }, { status: 400 });
  }
  const row: Record<string, string> = { id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  fd.forEach((v, k) => {
    if (k !== "company" && typeof v === "string") row[k] = v;
  });
  await addApplication(row as never).catch(() => undefined);
  return NextResponse.json({ ok: true });
}

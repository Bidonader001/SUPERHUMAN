import { NextResponse } from "next/server";
import { addPayment } from "@/lib/store";

export async function POST(req: Request) {
  const fd = await req.formData();
  if (String(fd.get("company") || "")) return NextResponse.json({ ok: true });
  try {
    await addPayment({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "pending",
      fullName: String(fd.get("fullName") || ""),
      program: String(fd.get("program") || ""),
      amount: String(fd.get("amount") || ""),
      date: String(fd.get("date") || ""),
      reference: String(fd.get("reference") || ""),
      whatsapp: String(fd.get("whatsapp") || ""),
    });
  } catch {
    /* Vercel has no persistent disk — FormSubmit is the live inbox */
  }
  return NextResponse.json({ ok: true });
}

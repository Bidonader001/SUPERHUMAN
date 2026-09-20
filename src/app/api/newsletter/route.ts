import { NextResponse } from "next/server";
import { addLead } from "@/lib/store";

export async function POST(req: Request) {
  const fd = await req.formData();
  const name = String(fd.get("name") || "").trim();
  const email = String(fd.get("email") || "").trim();
  const goal = String(fd.get("goal") || "").trim();
  if (!name || !email) {
    return NextResponse.redirect(new URL("/knowledge", req.url));
  }
  await addLead({ id: crypto.randomUUID(), createdAt: new Date().toISOString(), name, email, goal }).catch(() => undefined);
  return NextResponse.redirect(new URL("/knowledge?joined=1", req.url));
}

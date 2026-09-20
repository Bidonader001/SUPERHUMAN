import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { setPaymentStatus, type Payment } from "@/lib/store";

export async function POST(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const fd = await req.formData();
  const id = String(fd.get("id") || "");
  const status = String(fd.get("status") || "") as Payment["status"];
  if (!id || !["pending", "confirmed", "rejected"].includes(status)) {
    return NextResponse.json({ error: "Invalid" }, { status: 400 });
  }
  await setPaymentStatus(id, status);
  return NextResponse.redirect(new URL("/admin", req.url));
}

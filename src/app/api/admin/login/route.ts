import { NextResponse } from "next/server";
import { adminPassword, setAdminCookie } from "@/lib/auth";

export async function POST(req: Request) {
  const fd = await req.formData();
  if (String(fd.get("password")) !== adminPassword()) {
    return NextResponse.redirect(new URL("/admin/login?error=1", req.url));
  }
  await setAdminCookie();
  return NextResponse.redirect(new URL("/admin", req.url));
}

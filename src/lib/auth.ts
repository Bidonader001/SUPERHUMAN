import { cookies } from "next/headers";

const COOKIE = "sh_admin";

export function adminPassword() {
  return process.env.ADMIN_PASSWORD || "SuperhumanAdmin2026";
}

export async function isAdmin() {
  const jar = await cookies();
  return jar.get(COOKIE)?.value === adminPassword();
}

export async function setAdminCookie() {
  const jar = await cookies();
  jar.set(COOKIE, adminPassword(), { httpOnly: true, sameSite: "lax", path: "/" });
}

export async function clearAdminCookie() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const root = path.join(process.cwd(), "data");

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(path.join(root, file), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson(file: string, value: unknown) {
  if (process.env.VERCEL) return;
  await mkdir(root, { recursive: true });
  await writeFile(path.join(root, file), JSON.stringify(value, null, 2), "utf8");
}

export type Application = Record<string, string> & { id: string; createdAt: string };
export type Payment = Record<string, string> & {
  id: string;
  createdAt: string;
  status: "pending" | "confirmed" | "rejected";
  fileName?: string;
};
export type Lead = { id: string; createdAt: string; name: string; email: string; goal: string };

export async function addApplication(row: Application) {
  const rows = await readJson<Application[]>("applications.json", []);
  rows.unshift(row);
  await writeJson("applications.json", rows);
}

export async function listApplications() {
  return readJson<Application[]>("applications.json", []);
}

export async function addPayment(row: Payment) {
  const rows = await readJson<Payment[]>("payments.json", []);
  rows.unshift(row);
  await writeJson("payments.json", rows);
}

export async function listPayments() {
  return readJson<Payment[]>("payments.json", []);
}

export async function setPaymentStatus(id: string, status: Payment["status"]) {
  const rows = await listPayments();
  const next = rows.map((p) => (p.id === id ? { ...p, status } : p));
  await writeJson("payments.json", next);
}

export async function addLead(row: Lead) {
  const rows = await readJson<Lead[]>("leads.json", []);
  rows.unshift(row);
  await writeJson("leads.json", rows);
}

export async function listLeads() {
  return readJson<Lead[]>("leads.json", []);
}

export function uploadsDir() {
  return path.join(root, "uploads");
}

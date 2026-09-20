import { site } from "@/lib/site";

export function formToObject(fd: FormData) {
  const body: Record<string, string> = {};
  fd.forEach((value, key) => {
    if (typeof value === "string") {
      body[key] = value;
      return;
    }
    body[key] = value.name ? `[file: ${value.name}]` : "[file]";
  });
  if (body["Full name"] && !body.name) body.name = body["Full name"];
  if (body.Name && !body.name) body.name = body.Name;
  return body;
}

function setHidden(form: HTMLFormElement, name: string, value: string) {
  let input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

export async function sendFormSubmit(fd: FormData, subject: string) {
  const body: Record<string, string> = {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    ...formToObject(fd),
  };

  await fetch("/api/formsubmit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  }).catch(() => undefined);

  const res = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(site.formEmail), {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  if (data.success !== "true" && data.success !== true) {
    throw new Error(data.message || "Send failed");
  }
  return { ok: true as const, data };
}

/** Native POST — the method FormSubmit actually delivers with. */
export async function postFormToFormSubmit(form: HTMLFormElement, subject: string) {
  const fd = new FormData(form);
  await fetch("/api/formsubmit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: subject, ...formToObject(fd) }),
  }).catch(() => undefined);

  const next = new URL(window.location.href);
  next.searchParams.set("sent", "1");
  setHidden(form, "_subject", subject);
  setHidden(form, "_template", "table");
  setHidden(form, "_captcha", "false");
  setHidden(form, "_next", next.toString());
  form.action = "https://formsubmit.co/" + site.formEmail;
  form.method = "POST";
  const hasFile = Boolean(form.querySelector<HTMLInputElement>('input[type="file"]')?.files?.length);
  form.enctype = hasFile ? "multipart/form-data" : "application/x-www-form-urlencoded";
  HTMLFormElement.prototype.submit.call(form);
}

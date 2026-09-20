"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { postFormToFormSubmit } from "@/lib/formsubmit";

function FormInner() {
  const sent = useSearchParams().get("sent") === "1";
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("Sending…");
    try {
      await postFormToFormSubmit(e.currentTarget, "Superhuman — Contact message");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Could not submit.");
      setBusy(false);
    }
  }

  if (sent) return <p className="ok">Message sent to bido.nader@gmail.com.</p>;

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Full name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        WhatsApp
        <input name="WhatsApp" type="tel" inputMode="tel" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        I want help with
        <select name="Topic" required>
          <option value="">Select</option>
          <option>Choosing a program</option>
          <option>Online coaching</option>
          <option>A race or event</option>
          <option>Payment / InstaPay</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" required placeholder="Your goal, timeline, and any questions." />
      </label>
      {status && <p className="error">{status}</p>}
      <button className="btn btn-solid" type="submit" disabled={busy}>
        {busy ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<p>Loading form…</p>}>
      <FormInner />
    </Suspense>
  );
}

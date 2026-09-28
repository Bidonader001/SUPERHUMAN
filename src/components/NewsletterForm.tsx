"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { postFormToFormSubmit } from "@/lib/formsubmit";

function FormInner() {
  const already = useSearchParams().get("sent") === "1";
  const [sent, setSent] = useState(already);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    try {
      await postFormToFormSubmit(e.currentTarget, "Superhuman — Community signup");
      setSent(true);
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Could not submit.");
      setBusy(false);
    }
  }

  if (sent) return <p className="ok">You’re on the list. Updates will go to this email.</p>;

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-grid two">
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
      </div>
      <label>
        Main training goal
        <input name="Main training goal" required />
      </label>
      {status && <p className="error">{status}</p>}
      <button className="btn btn-solid" type="submit" disabled={busy}>
        {busy ? "Sending…" : "Join the Superhuman Community"}
      </button>
    </form>
  );
}

export function NewsletterForm() {
  return (
    <Suspense fallback={<p>Loading form…</p>}>
      <FormInner />
    </Suspense>
  );
}

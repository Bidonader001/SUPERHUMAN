"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { postFormToFormSubmit } from "@/lib/formsubmit";

function FormInner() {
  const sent = useSearchParams().get("sent") === "1";
  const [status, setStatus] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await postFormToFormSubmit(e.currentTarget, "Superhuman — Community signup");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Could not submit.");
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
      <button className="btn btn-solid" type="submit">
        Join the Superhuman Community
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

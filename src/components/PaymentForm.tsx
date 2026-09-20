"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { postFormToFormSubmit } from "@/lib/formsubmit";
import { programs } from "@/lib/programs";

function FormInner() {
  const sent = useSearchParams().get("sent") === "1";
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("Sending…");
    try {
      await postFormToFormSubmit(e.currentTarget, "Superhuman — Payment confirmation");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Could not submit.");
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <p className="ok">
        Payment details were emailed to bido.nader@gmail.com. A screenshot is not automatic proof of funds.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Full name
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Selected program
        <select name="Selected program" required>
          {programs.map((p) => (
            <option key={p.slug} value={p.shortName}>
              {p.shortName}
            </option>
          ))}
          <option>Elite Online Coaching</option>
        </select>
      </label>
      <label>
        Amount transferred
        <input name="Amount transferred" inputMode="decimal" required />
      </label>
      <label>
        Transfer date
        <input name="Transfer date" type="date" required />
      </label>
      <label>
        Transfer reference
        <input name="Transfer reference" required />
      </label>
      <label>
        WhatsApp number
        <input name="WhatsApp" type="tel" inputMode="tel" required />
      </label>
      <label>
        Payment screenshot (optional — also send it on WhatsApp)
        <input name="attachment" type="file" accept="image/*" />
      </label>
      {status && <p className="error">{status}</p>}
      <button className="btn btn-solid" type="submit" disabled={busy}>
        {busy ? "Sending…" : "Submit payment confirmation"}
      </button>
    </form>
  );
}

export function PaymentForm() {
  return (
    <Suspense fallback={<p>Loading form…</p>}>
      <FormInner />
    </Suspense>
  );
}

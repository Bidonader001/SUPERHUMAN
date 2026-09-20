"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useRef, useState } from "react";
import { postFormToFormSubmit } from "@/lib/formsubmit";
import { programs } from "@/lib/programs";
import { whatsappHref } from "@/lib/site";

const steps = ["You", "Goal", "Training", "Health"];

function validateCurrentStep(form: HTMLFormElement, step: number) {
  const root = form.querySelector(`[data-step="${step}"]`);
  if (!root) return "Could not find this step.";
  const fields = root.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
    "input, select, textarea",
  );
  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      field.focus();
      return field.validationMessage || "Please complete the highlighted field.";
    }
  }
  return "";
}

function Success() {
  return (
    <div className="card">
      <p className="ok">Application sent to bido.nader@gmail.com.</p>
      <p>
        The first time only, FormSubmit emails that inbox an activation link. Open it, click confirm, then later
        submissions arrive automatically. Check spam if it is missing.
      </p>
      <div className="btn-row">
        <a className="btn btn-solid" href="/payment">
          Continue to payment
        </a>
        <a
          className="btn"
          href={whatsappHref("Hello Coach Omar, I just submitted my Superhuman application.")}
          target="_blank"
          rel="noreferrer"
        >
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
}

function FormInner() {
  const params = useSearchParams();
  const preset = params.get("program") ?? "";
  const alreadySent = params.get("sent") === "1";
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("");
  const [ok, setOk] = useState(alreadySent);
  const [busy, setBusy] = useState(false);

  function goNext() {
    const form = formRef.current;
    if (!form) return;
    const error = validateCurrentStep(form, step);
    if (error) {
      setStatus(error);
      return;
    }
    setStatus("");
    setStep((n) => n + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const error = validateCurrentStep(form, step);
    if (error) {
      setStatus(error);
      return;
    }
    if (step < steps.length - 1) {
      goNext();
      return;
    }
    setBusy(true);
    setStatus("Sending your application…");
    try {
      await postFormToFormSubmit(form, "Superhuman — New program application");
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Could not send. Check your connection and try again.");
      setBusy(false);
    }
  }

  if (ok) return <Success />;

  return (
    <form className="form apply-form" ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <p className="muted step-count">
        Step {step + 1} of {steps.length} — {steps[step]}
      </p>
      {status && <p className="error">{status}</p>}

      <div data-step="0" hidden={step !== 0}>
        <h2>Who are you?</h2>
        <div className="form-grid two">
          <label>
            Full name
            <input name="Full name" autoComplete="name" required />
          </label>
          <label>
            Age
            <input name="Age" type="number" inputMode="numeric" min={14} max={90} required />
          </label>
          <label>
            Gender
            <select name="Gender" required>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </label>
          <label>
            Country
            <input name="Country" autoComplete="country-name" required />
          </label>
          <label>
            City
            <input name="City" autoComplete="address-level2" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            WhatsApp number (with country code)
            <input name="WhatsApp" type="tel" inputMode="tel" autoComplete="tel" placeholder="2010..." required />
          </label>
          <label>
            Instagram (optional)
            <input name="Instagram" placeholder="@username" />
          </label>
        </div>
      </div>

      <div data-step="1" hidden={step !== 1}>
        <h2>What are we building?</h2>
        <div className="form-grid two">
          <label>
            Primary goal
            <select name="Primary goal" required>
              <option value="">Select</option>
              <option>Fat loss without losing strength</option>
              <option>Build muscle and athletic performance</option>
              <option>Become a complete hybrid athlete</option>
              <option>Prepare for HYROX</option>
              <option>Run faster (5K / 10K / longer)</option>
              <option>Swim or open-water performance</option>
              <option>Ladies BTA — glutes, thighs, abs</option>
              <option>Sport-specific strength and conditioning</option>
              <option>Fully personalized coaching</option>
            </select>
          </label>
          <label>
            Preferred Superhuman program
            <select name="Preferred program" defaultValue={preset} required>
              <option value="">Help me choose</option>
              {programs.map((p) => (
                <option key={p.slug} value={p.shortName}>
                  {p.shortName}
                </option>
              ))}
              <option value="Elite Online Coaching">Elite Online Coaching</option>
            </select>
          </label>
          <label className="span-2">
            What would make the next 12 weeks a success?
            <textarea name="12-week success" required placeholder="Be specific: a race, a look, a lift, a time, a habit." />
          </label>
          <label>
            Are you preparing for a race or event?
            <select name="Preparing for event" required>
              <option value="">Select</option>
              <option>No</option>
              <option>Yes — HYROX</option>
              <option>Yes — running race</option>
              <option>Yes — swim / open water / finswim</option>
              <option>Yes — another sport</option>
            </select>
          </label>
          <label>
            Event name and date (if any)
            <input name="Event name and date" />
          </label>
          <label className="span-2">
            How do you want to work with Omar?
            <select name="Coaching style" required>
              <option value="">Select</option>
              <option>A structured 12-week program</option>
              <option>A custom plan built around my life</option>
              <option>Elite online coaching with weekly check-ins</option>
              <option>Not sure yet</option>
            </select>
          </label>
        </div>
      </div>

      <div data-step="2" hidden={step !== 2}>
        <h2>How do you train now?</h2>
        <div className="form-grid two">
          <label>
            Current training level
            <select name="Training level" required>
              <option value="">Select</option>
              <option>Beginner — new or returning after a long break</option>
              <option>Intermediate — consistent, can follow a plan</option>
              <option>Advanced — trained for years, chasing performance</option>
            </select>
          </label>
          <label>
            How long have you trained consistently?
            <select name="Training history" required>
              <option value="">Select</option>
              <option>Less than 3 months</option>
              <option>3–12 months</option>
              <option>1–3 years</option>
              <option>3+ years</option>
            </select>
          </label>
          <label className="span-2">
            What does a typical week look like right now?
            <textarea name="Current weekly routine" required placeholder="Days, session types, sports, and anything you refuse to drop." />
          </label>
          <label>
            Days you can train each week
            <select name="Available days" required>
              <option value="">Select</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </label>
          <label>
            Minutes per session
            <select name="Session duration" required>
              <option value="">Select</option>
              <option>30–45</option>
              <option>45–60</option>
              <option>75–90</option>
              <option>60–75</option>
            </select>
          </label>
          <label>
            Where do you train?
            <select name="Training location" required>
              <option value="">Select</option>
              <option>Commercial gym</option>
              <option>Home gym</option>
              <option>Calisthenics park / outdoor</option>
              <option>Pool</option>
              <option>Open water</option>
              <option>Mixed locations</option>
            </select>
          </label>
          <label>
            Preferred start date
            <input name="Preferred start date" type="date" required />
          </label>
          <label className="span-2">
            Equipment you actually have
            <textarea name="Equipment" required placeholder="Barbell, dumbbells, pull-up bar, treadmill, sled, pool access, nothing yet…" />
          </label>
        </div>
      </div>

      <div data-step="3" hidden={step !== 3}>
        <h2>Health and start</h2>
        <p className="muted">This stays in Omar’s private inbox. It is never published on the website.</p>
        <div className="form-grid two">
          <label>
            Height
            <input name="Height" required placeholder="e.g. 178 cm" />
          </label>
          <label>
            Weight
            <input name="Weight" required placeholder="e.g. 82 kg" />
          </label>
          <label>
            Job / daily activity
            <input name="Occupation and daily activity" placeholder="Desk, on feet, night shifts…" />
          </label>
          <label>
            Average sleep
            <select name="Average sleep">
              <option>Under 6 hours</option>
              <option>6–7 hours</option>
              <option>7–8 hours</option>
              <option>8+ hours</option>
            </select>
          </label>
          <label className="span-2">
            Injuries, pain, or movement limitations
            <textarea
              name="Injuries or pain"
              required
              placeholder="Write none if nothing current. Include old issues that still change how you train."
            />
          </label>
          <label className="span-2">
            Medical conditions, medications, or physician restrictions
            <textarea name="Medical notes" placeholder="Write none if not applicable." />
          </label>
          <label className="span-2">
            Anything else Omar should know
            <textarea name="Anything else" placeholder="Schedule, travel, past coaching, mindset, nutrition…" />
          </label>
        </div>
        <label className="check">
          <input type="checkbox" name="Accuracy confirmation" value="Yes" required />
          I confirm this information is accurate. I understand training carries risk and I should get medical clearance when appropriate.
        </label>
        <label className="check">
          <input type="checkbox" name="Legal agreement" value="Yes" required />
          I agree to the <a href="/terms">Terms</a>, <a href="/privacy">Privacy Policy</a>, and{" "}
          <a href="/disclaimer">Training Disclaimer</a>.
        </label>
      </div>

      <div className="form-nav">
        {step > 0 && (
          <button className="btn" type="button" onClick={() => setStep((n) => n - 1)}>
            Back
          </button>
        )}
        {step < steps.length - 1 ? (
          <button className="btn btn-solid" type="button" onClick={goNext}>
            Continue
          </button>
        ) : (
          <button className="btn btn-solid" type="submit" disabled={busy}>
            {busy ? "Sending…" : "Submit my application"}
          </button>
        )}
      </div>
    </form>
  );
}

export function StartForm() {
  return (
    <Suspense fallback={<p>Loading form…</p>}>
      <FormInner />
    </Suspense>
  );
}

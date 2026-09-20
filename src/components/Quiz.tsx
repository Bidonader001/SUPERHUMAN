"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { sendFormSubmit } from "@/lib/formsubmit";
import { getProgram } from "@/lib/programs";
import { whatsappHref } from "@/lib/site";

const questions = [
  {
    key: "Goal",
    label: "What is your main goal?",
    options: [
      "Fat loss without getting weak",
      "Muscle and athleticism",
      "HYROX / hybrid race",
      "Swimming / open water",
      "Ladies lower-body development",
      "Sport-specific performance",
      "General complete fitness",
    ],
  },
  {
    key: "Level",
    label: "What is your current training level?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    key: "Days available",
    label: "How many days can you train?",
    options: ["3", "4", "5", "6+"],
  },
  {
    key: "Location",
    label: "Where do you train?",
    options: ["Gym", "Home", "Outdoor / park", "Pool / open water", "Mixed"],
  },
  {
    key: "Activities",
    label: "Which activities do you enjoy?",
    options: ["Lifting + running", "Calisthenics + running", "HYROX stations", "Swimming", "Sport practice", "Lower-body + gym"],
  },
  {
    key: "Competition",
    label: "Are you preparing for a competition?",
    options: ["No", "HYROX", "Swim / open water / finswim", "Other sport"],
  },
  {
    key: "Injuries",
    label: "Do you have injuries or limitations?",
    options: ["No", "Yes — I need modifications"],
  },
  {
    key: "Coaching style",
    label: "Do you prefer a fixed plan or personalized coaching?",
    options: ["Fixed 12-week plan", "Personalized plan", "Elite online coaching"],
  },
  { key: "Start date", label: "What is your preferred start date?", options: [] },
  { key: "email", label: "What is your email?", options: [] },
  { key: "WhatsApp", label: "What is your WhatsApp number?", options: [] },
];

function recommend(a: Record<string, string>) {
  if (a["Coaching style"] === "Elite online coaching") return ["custom"];
  if (a.Injuries?.includes("Yes") || a["Coaching style"] === "Personalized plan") return ["custom", "standard-hybrid"];
  if (a.Competition === "HYROX" || a.Goal?.includes("HYROX") || a.Activities?.includes("HYROX")) return ["hyrox-101"];
  if (a.Goal?.includes("Swimming") || a.Competition?.includes("Swim") || a.Activities === "Swimming") {
    return ["swimming-open-water", "swimmer-strength"];
  }
  if (a.Goal?.includes("Ladies") || a.Activities?.includes("Lower-body")) return ["ladies-bta"];
  if (a.Activities?.includes("Calisthenics")) return ["calisthenics-running"];
  if (a.Goal?.includes("Sport") || a.Competition === "Other sport") return ["sport-specific"];
  if (a.Level === "Beginner") return ["lite-hybrid"];
  return ["standard-hybrid", "lite-hybrid"];
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const q = questions[step];
  const done = step >= questions.length;
  const recs = useMemo(() => (done ? recommend(answers) : []), [done, answers]);

  async function sendToOmar() {
    const fd = new FormData();
    Object.entries(answers).forEach(([k, v]) => fd.set(k, v));
    fd.set("Recommended programs", recs.join(", "));
    fd.set("email", answers.email || "");
    setBusy(true);
    try {
      await sendFormSubmit(fd, "Superhuman — Program quiz");
      setSent(true);
    } catch {
      setSent(false);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card quiz-card">
      {!done && (
        <>
          <p className="muted">
            Question {step + 1} / {questions.length}
          </p>
          <div className="progress" aria-hidden="true">
            <span style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
          </div>
          <h2>{q.label}</h2>
          {q.options.length > 0 ? (
            <div className="quiz-options">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  className="btn"
                  type="button"
                  onClick={() => {
                    setAnswers((s) => ({ ...s, [q.key]: opt }));
                    setStep((n) => n + 1);
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                const v = String(new FormData(e.currentTarget).get("v") || "");
                setAnswers((s) => ({ ...s, [q.key]: v }));
                setStep((n) => n + 1);
              }}
            >
              <input
                name="v"
                required
                type={q.key === "Start date" ? "date" : q.key === "email" ? "email" : "tel"}
                inputMode={q.key === "WhatsApp" ? "tel" : undefined}
                placeholder={
                  q.key === "WhatsApp" ? "WhatsApp with country code" : q.key === "email" ? "you@email.com" : ""
                }
              />
              <button className="btn btn-solid" type="submit">
                Continue
              </button>
            </form>
          )}
        </>
      )}
      {done && (
        <>
          <h2>Your recommendation</h2>
          <p>Based on your answers, start here. Omar can still refine this after your application.</p>
          {recs.map((slug) => {
            const p = getProgram(slug);
            if (!p) return null;
            return (
              <div className="card" key={slug} style={{ marginBottom: "0.75rem" }}>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="btn-row">
                  <Link className="btn" href={`/programs/${p.slug}`}>
                    View program
                  </Link>
                  <Link className="btn btn-solid" href={`/start?program=${p.slug}`}>
                    Start this program
                  </Link>
                </div>
              </div>
            );
          })}
          <div className="btn-row">
            <button className="btn btn-solid" type="button" onClick={sendToOmar} disabled={busy || sent}>
              {sent ? "Sent to Omar" : busy ? "Sending…" : "Email this recommendation to Omar"}
            </button>
            <a
              className="btn"
              href={whatsappHref(
                `Hello Coach Omar, I completed the Superhuman quiz. Goal: ${answers.Goal}. WhatsApp: ${answers.WhatsApp}.`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Coach Omar
            </a>
          </div>
        </>
      )}
    </div>
  );
}

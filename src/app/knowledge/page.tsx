import type { Metadata } from "next";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Superhuman Knowledge",
  description: "Education hub for hybrid training, strength, running, swimming, HYROX, recovery, and athlete mindset.",
};

const cats = [
  "Hybrid Training",
  "Strength",
  "Running",
  "Swimming",
  "HYROX",
  "Speed and Power",
  "Calisthenics",
  "Mobility",
  "Recovery",
  "Nutrition Education",
  "Athlete Mindset",
  "Competition Preparation",
];

const pieces = [
  {
    title: "Why hybrid training is not two sports stacked randomly",
    cat: "Hybrid Training",
    type: "Article",
    text: "Superhuman organizes lifting and endurance so fatigue is managed and both qualities can rise.",
  },
  {
    title: "Open-water skills that change race day",
    cat: "Swimming",
    type: "Training tip",
    text: "Sighting, drafting, and pacing are trained — not hoped for.",
  },
  {
    title: "HYROX stations under running fatigue",
    cat: "HYROX",
    type: "Video",
    text: "The race is decided when the run meets the station. Practice that meeting.",
  },
];

export default function KnowledgePage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Education</p>
        <h1 className="metal">Superhuman Knowledge</h1>
        <p>Articles, reels, videos, exercise demonstrations, training tips, athlete stories, and program updates.</p>
        <div className="chips">
          {cats.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
        <div className="grid-3">
          {pieces.map((p) => (
            <article className="card" key={p.title}>
              <p className="muted">
                {p.type} · {p.cat}
              </p>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <h2>Join the Superhuman Community</h2>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Superhuman Process",
  description: "Assess, build, execute, adapt, evolve — the Superhuman transformation process.",
};

const stages = [
  {
    n: "01",
    title: "Assess",
    text: "Understand the client’s goals, level, schedule, equipment, history, and limitations.",
  },
  {
    n: "02",
    title: "Build",
    text: "Choose or create the appropriate training system.",
  },
  {
    n: "03",
    title: "Execute",
    text: "Follow structured sessions with clear intensity, volume, technique, and progression.",
  },
  {
    n: "04",
    title: "Adapt",
    text: "Review performance, recovery, and consistency.",
  },
  {
    n: "05",
    title: "Evolve",
    text: "Build a stronger, faster, fitter, more capable version of the client.",
  },
];

export default function ProcessPage() {
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <p className="kicker">Transformation</p>
          <h1 className="metal">The Superhuman Process</h1>
          <div className="steps">
            {stages.map((s) => (
              <div className="step" key={s.n}>
                <b>{s.n}</b>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link className="btn btn-solid" href="/start">
            Begin Your Transformation
          </Link>
        </div>
        <div className="grid-2">
          <div className="photo-frame tall"><img className="photo" src="/images/discipline-fire.jpg" alt="Discipline and shared hardship around a fire" /></div>
          <div className="photo-frame tall"><img className="photo" src="/images/underwater.jpg" alt="Underwater dive — execute under pressure" /></div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results and Testimonials",
  description: "Space for genuine Superhuman client results. Placeholders only until approved testimonials are added.",
};

const slots = [
  { name: "Client first name", program: "Program completed", goal: "Starting goal", result: "Main result" },
  { name: "Client first name", program: "Program completed", goal: "Starting goal", result: "Main result" },
  { name: "Client first name", program: "Program completed", goal: "Starting goal", result: "Main result" },
];

export default function ResultsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Proof</p>
        <h1 className="metal">Results and testimonials</h1>
        <p>
          This page is ready for client photos, written testimonials, race results, strength progress, running and
          swimming improvements, HYROX results, and lifestyle transformations.
        </p>
        <p className="notice">
          No fabricated testimonials are shown. The cards below are placeholders for future approved content. Consent
          status must be recorded before any photo or name is published.
        </p>
        <div className="grid-3" style={{ margin: "1.5rem 0" }}>
          {slots.map((s, i) => (
            <article className="card" key={i}>
              <p className="muted">Placeholder · consent pending</p>
              <h3>{s.name}</h3>
              <p>
                <b>{s.program}</b>
                <br />
                {s.goal}
                <br />
                {s.result}
              </p>
              <p>“Quote will appear here after the client approves it.”</p>
              <div className="photo-frame" style={{ minHeight: 160 }}>
                <div style={{ display: "grid", placeItems: "center", height: 160, color: "#747c88" }}>
                  Optional before-and-after
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="grid-2">
          <div className="photo-frame"><img className="photo" src="/images/omar-winners.jpg" alt="Competitive result — Omar after a race" /></div>
          <div className="photo-frame"><img className="photo" src="/images/omar-medal-beach.jpg" alt="Open-water race result at Soma Bay" /></div>
        </div>
        <p className="notice" style={{ marginTop: "1.25rem" }}>
          Individual results vary according to starting level, adherence, nutrition, sleep, recovery, medical status,
          and training consistency.
        </p>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Online Coaching",
  description: "Elite online coaching with Omar Zoromba — personalized training, video feedback, and weekly adjustments.",
};

const includes = [
  "Fully personalized training",
  "Weekly check-ins",
  "Technique review",
  "Video feedback",
  "Program modifications",
  "Accountability",
  "Performance analysis",
  "Progress tracking",
  "Direct messaging support",
  "Nutrition-habit guidance within professional scope",
  "Race preparation",
  "Competition strategy",
  "Recovery guidance",
  "Training on the Superhuman application when included",
];

export default function CoachingPage() {
  return (
    <>
      <section className="hero" style={{ minHeight: "78svh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(/images/coaching-sprint.jpg)" }} />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <p className="kicker">Online Coaching</p>
          <h1 className="metal">
            Your coach.
            <br />
            Your plan.
            <br />
            Your mission.
          </h1>
          <p className="lead">
            High-touch coaching for people who want Omar in their week — not only a document in their inbox.
          </p>
          <div className="btn-row">
            <Link className="btn btn-solid" href="/start?program=online-coaching">
              Apply for Online Coaching
            </Link>
            <a className="btn" href={whatsappHref("Hello Coach Omar, I want to apply for online coaching.")} target="_blank" rel="noreferrer">
              Talk to Coach Omar
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid-2">
          <div>
            <h2>What elite coaching can include</h2>
            <ul>
              {includes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="card">
              <h3>Elite Online Coaching</h3>
              <p className="silver">{site.prices.eliteLabel}</p>
              <p className="muted">{site.prices.eliteNote}</p>
              <p>Direct coaching access, weekly adjustments, technique analysis, and competition preparation.</p>
            </div>
          </div>
          <div className="photo-frame tall">
            <img className="photo" src="/images/omar-coach-outdoor.jpg" alt="Omar coaching at an outdoor performance facility" />
          </div>
        </div>
      </section>
    </>
  );
}

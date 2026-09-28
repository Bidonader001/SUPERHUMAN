import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Superhuman Process",
  description: "Find your program, apply, get approved, pay, and receive Superhuman access.",
};

const stages = [
  {
    n: "01",
    title: "Find My Program",
    text: "Use the quiz or explore the catalog. One price. Choose the Superhuman program that fits your goal.",
  },
  {
    n: "02",
    title: "Program Details",
    text: "Read who it is for, weekly structure, equipment, and the 12-week phases.",
  },
  {
    n: "03",
    title: "Application",
    text: "Submit your Superhuman application so Omar can confirm the match.",
  },
  {
    n: "04",
    title: "Approval",
    text: "Omar reviews your answers and confirms the selected program.",
  },
  {
    n: "05",
    title: "Payment",
    text: `Transfer ${site.prices.label} for 12 weeks through InstaPay using the published account details.`,
  },
  {
    n: "06",
    title: "Verification",
    text: "Send your payment confirmation. Access is granted only after funds are verified.",
  },
  {
    n: "07",
    title: "Onboarding",
    text: "Receive start date, delivery method, and how to train the week.",
  },
  {
    n: "08",
    title: "Program Access",
    text: "Execute the Superhuman system. Assess, build, execute, adapt, evolve.",
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
          <div className="btn-row">
            <Link className="btn btn-solid" href="/quiz">
              Find My Program
            </Link>
            <a className="btn" href={whatsappHref()} target="_blank" rel="noreferrer">
              Talk to Coach Omar
            </a>
          </div>
        </div>
        <div className="grid-2">
          <div className="photo-frame tall"><img className="photo" src="/images/omar-plank-session.jpg" alt="Omar coaching Superhuman athletes" /></div>
          <div className="photo-frame tall"><img className="photo" src="/images/omar-first-place.jpg" alt="Superhuman first-place podium" /></div>
        </div>
      </div>
    </section>
  );
}

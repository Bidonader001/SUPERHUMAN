import type { Metadata } from "next";
import Link from "next/link";
import { instagramHref, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Omar Zoromba",
  description:
    "Meet Omar Zoromba — Egyptian hybrid athlete, finswimming champion, NASM coach, HYROX coach, and creator of the Superhuman Program.",
};

const quals = [
  "NASM Certified Personal Trainer",
  "NASM Performance Enhancement Specialist",
  "HYROX Certified Coach",
  "Competitive finswimming and open-water background",
  "More than six years of coaching experience",
  "More than 300 clients coached",
  "Experience coaching beginners, athletes, swimmers, fighters, water polo, and hybrid competitors",
];

const develops = [
  "Strength",
  "Speed",
  "Power",
  "Endurance",
  "Mobility",
  "Work capacity",
  "Body composition",
  "Athletic confidence",
  "Discipline",
  "Long-term health",
];

export default function AboutPage() {
  return (
    <>
      <section className="hero" style={{ minHeight: "72svh" }}>
        <div className="hero-bg" style={{ backgroundImage: "url(/images/omar-medal-beach.jpg)" }} />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <p className="kicker">Founder and Head Coach</p>
          <h1 className="metal">Meet Omar Zoromba</h1>
          <p className="lead">
            Egyptian hybrid athlete, performance coach, and the creator of the Superhuman Program.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p>
              Omar Zoromba is an Egyptian hybrid athlete, performance coach, and the creator of the Superhuman
              Program. His athletic background combines elite finswimming, open-water competition, running, strength
              training, Olympic lifting, weighted calisthenics, HYROX, functional fitness, and sports-performance
              coaching.
            </p>
            <p>
              Omar competed internationally in finswimming and achieved major results as a youth athlete, including
              becoming a U17 world champion and competing at the World Cup Golden Final.
            </p>
            <p>
              After years of athletic experience and professional coaching, he developed the Superhuman Program to
              help ordinary people and serious athletes build complete physical capability — not just appearance.
            </p>
            <p>
              Omar does not coach people only to look fit. He coaches them to become physically capable, mentally
              disciplined, and prepared for life.
            </p>
            <div className="btn-row">
              <Link className="btn btn-solid" href="/start">
                Train With Omar
              </Link>
              <Link className="btn" href="/programs">
                View Programs
              </Link>
              <a className="btn btn-ghost" href={instagramHref(site.instagramPersonal)} target="_blank" rel="noreferrer">
                Follow on Instagram
              </a>
              <a className="btn btn-ghost" href={whatsappHref()} target="_blank" rel="noreferrer">
                Talk to Coach Omar
              </a>
            </div>
          </div>
          <div className="photo-frame tall">
            <img className="photo" src="/images/omar-coach-smile.jpg" alt="Omar Zoromba smiling in Superhuman Built for War apparel" />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <h2 className="metal">What his coaching develops</h2>
          <div className="grid-4">
            {develops.map((d) => (
              <div className="card" key={d}>
                <h3>{d}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="metal">Professional qualifications</h2>
            <ul>
              {quals.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p className="muted">Based in {site.location}. {site.online}.</p>
          </div>
          <div className="grid-2">
            <div className="photo-frame"><img className="photo" src="/images/omar-winners.jpg" alt="Omar after a race with a winner medal" /></div>
            <div className="photo-frame"><img className="photo" src="/images/omar-cycling.jpg" alt="Omar in cycling kit before a ride" /></div>
            <div className="photo-frame"><img className="photo" src="/images/omar-night-fins.jpg" alt="Omar walking a night pier with swim fins" /></div>
            <div className="photo-frame"><img className="photo" src="/images/discipline-fire.jpg" alt="Outdoor discipline and team camp" /></div>
          </div>
        </div>
      </section>
    </>
  );
}

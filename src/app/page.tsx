import Link from "next/link";
import { Ticker } from "@/components/Chrome";
import { programs } from "@/lib/programs";
import { instagramHref, site, whatsappHref } from "@/lib/site";

const audience = [
  "People who want fat loss without becoming weak",
  "People who want muscle and athletic performance",
  "Runners who need strength",
  "Lifters who need endurance",
  "Swimmers and open-water athletes",
  "HYROX and hybrid competitors",
  "Athletes preparing for sport",
  "Beginners seeking structure",
  "Advanced athletes seeking professional programming",
  "Women seeking lower-body development and complete fitness",
];

const pillars = ["Strength", "Endurance", "Athleticism", "Discipline", "Longevity"];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-plain">
        <div className="wrap hero-content">
          <p className="kicker">Omar Zoromba</p>
          <Ticker />
          <h1>
            Become more than fit.
            <br />
            Become Superhuman.
          </h1>
          <p className="lead">
            A complete performance system built to transform your strength, endurance, athletic ability, health,
            discipline, and confidence.
          </p>
          <div className="chips">
            {["Hybrid", "Running", "Swimming", "HYROX", "Strength", "Sport"].map((x) => (
              <span className="chip" key={x}>
                {x}
              </span>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn-solid" href="/start">
              Start Your Program
            </Link>
            <Link className="btn" href="/programs">
              Explore the Programs
            </Link>
            <a className="btn btn-ghost" href={whatsappHref()} target="_blank" rel="noreferrer">
              Talk to Coach Omar
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">Identity</p>
            <h2>This is not just a workout plan</h2>
            <p>
              Superhuman is a complete performance philosophy created for people who refuse to remain average. Every
              program combines intelligent training, structured progression, coaching support, accountability, and
              real-world athletic development.
            </p>
            <p>
              You are not joining another fitness plan. You are building the strongest, fittest, and most capable
              version of yourself.
            </p>
            <div className="pillars">
              {pillars.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
          <div className="photo-frame tall">
            <img className="photo" src="/images/omar-strength.jpg" alt="Omar Zoromba in a high-performance gym" />
            <span className="badge">Head Coach</span>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <p className="kicker">Audience</p>
          <h2>Built for every level. Never built for mediocrity.</h2>
          <ul className="quiet-list">
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="photo-frame tall">
            <img className="photo" src="/images/omar-coach-outdoor.jpg" alt="Omar Zoromba wearing Superhuman apparel at an outdoor performance gym" />
          </div>
          <div>
            <p className="kicker">Founder</p>
            <h2>Meet Omar Zoromba</h2>
            <p>
              Omar Zoromba is an Egyptian hybrid athlete, performance coach, and the creator of the Superhuman
              Program. His background combines elite finswimming, open-water competition, running, strength, Olympic
              lifting, weighted calisthenics, HYROX, and sports-performance coaching.
            </p>
            <p>
              Omar does not coach people only to look fit. He coaches them to become physically capable, mentally
              disciplined, and prepared for life.
            </p>
            <div className="btn-row">
              <Link className="btn btn-solid" href="/about">
                Train With Omar
              </Link>
              <Link className="btn" href="/programs">
                View Programs
              </Link>
              <a className="btn btn-ghost" href={instagramHref(site.instagramPersonal)} target="_blank" rel="noreferrer">
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <p className="kicker">Programs</p>
          <h2>A system, not a PDF</h2>
          <div className="grid-3">
            {programs.slice(0, 6).map((p) => (
              <article className="card" key={p.slug}>
                <div className="photo-frame" style={{ minHeight: 220, marginBottom: "1.1rem" }}>
                  <img className="photo" src={p.image} alt="" />
                </div>
                <h3>{p.shortName}</h3>
                <p>{p.duration} · {p.level}</p>
                <Link className="btn btn-ghost" href={`/programs/${p.slug}`}>
                  View Program
                </Link>
              </article>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-solid" href="/programs">
              Explore the System
            </Link>
            <Link className="btn" href="/quiz">
              Find Your Program
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">The Superhuman Process</p>
            <h2>Assess. Build. Execute. Adapt. Evolve.</h2>
            <p>
              Joining Superhuman is entering a complete performance system. The process is the same whether you start
              with a 12-week plan or elite online coaching.
            </p>
            <Link className="btn" href="/process">
              See the full process
            </Link>
          </div>
          <div className="grid-2">
            <div className="photo-frame"><img className="photo" src="/images/coaching-sprint.jpg" alt="Omar coaching a resisted sprint on turf" /></div>
            <div className="photo-frame"><img className="photo" src="/images/discipline-fire.jpg" alt="Night training campfire — discipline and camaraderie" /></div>
            <div className="photo-frame"><img className="photo" src="/images/pool-dive.jpg" alt="Competitive dive at dusk" /></div>
            <div className="photo-frame"><img className="photo" src="/images/omar-open-water.jpg" alt="Omar finishing an open-water swim" /></div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <p className="kicker">Start</p>
          <h2>Begin your transformation</h2>
          <p>
            Submit your application, complete InstaPay, and wait for verification before access is granted. Superhuman
            will never ask for your InstaPay password, OTP, card PIN, or banking login.
          </p>
          <div className="btn-row">
            <Link className="btn btn-solid" href="/start">
              Start Your Program
            </Link>
            <Link className="btn" href="/coaching">
              Apply for Coaching
            </Link>
            <Link className="btn btn-ghost" href="/knowledge">
              Join the Superhuman Community
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

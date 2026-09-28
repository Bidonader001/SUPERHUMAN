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

const journey = [
  { n: "01", title: "Find My Program", href: "/quiz" },
  { n: "02", title: "Program Details", href: "/programs" },
  { n: "03", title: "Application", href: "/start" },
  { n: "04", title: "Approval", href: "/start" },
  { n: "05", title: "Payment", href: "/payment" },
  { n: "06", title: "Verification", href: "/payment" },
  { n: "07", title: "Onboarding", href: "/process" },
  { n: "08", title: "Program Access", href: "/programs" },
];

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
          <p className="silver">All Superhuman programs · {site.prices.label} / 12 weeks</p>
          <div className="chips">
            {["Hybrid", "Running", "Swimming", "HYROX", "Strength", "Sport"].map((x) => (
              <span className="chip" key={x}>
                {x}
              </span>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn-solid" href="/quiz">
              Find My Program
            </Link>
            <Link className="btn" href="/programs">
              Explore Programs
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
              real-world athletic development — all under one price.
            </p>
            <p>
              You are not choosing between service tiers. You are choosing which Superhuman program fits you.
            </p>
            <div className="pillars">
              {pillars.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
          <div className="photo-frame tall">
            <img className="photo" src="/images/omar-session-plate.jpg" alt="Omar Zoromba coaching a Superhuman strength session" />
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
            <img className="photo" src="/images/omar-founder-medal.jpg" alt="Omar Zoromba after winning Oceanman as overall winner" />
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
                Explore Programs
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
          <h2>All Superhuman programs · {site.prices.label} / 12 weeks</h2>
          <div className="grid-3">
            {programs.map((p) => (
              <article className="card" key={p.slug}>
                <div className="photo-frame" style={{ minHeight: 220, marginBottom: "1.1rem" }}>
                  <img className="photo" src={p.image} alt="" />
                </div>
                <h3>{p.shortName}</h3>
                <p>{p.duration} · {p.level}</p>
                <p className="muted">{p.price} / 12 weeks</p>
                <Link className="btn btn-ghost" href={`/programs/${p.slug}`}>
                  Select Program
                </Link>
              </article>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-solid" href="/quiz">
              Find My Program
            </Link>
            <Link className="btn" href="/programs">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">How joining works</p>
          <h2>One path in</h2>
          <p>
            Homepage → Find My Program → Program Details → Application → Approval → Payment → Verification →
            Onboarding → Program Access.
          </p>
          <div className="grid-4" style={{ marginTop: "1.4rem" }}>
            {journey.map((s) => (
              <Link className="card" href={s.href} key={s.n}>
                <p className="muted">{s.n}</p>
                <h3>{s.title}</h3>
              </Link>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link className="btn" href="/process">
              See the full process
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap split">
          <div className="grid-2">
            <div className="photo-frame"><img className="photo" src="/images/omar-plank-session.jpg" alt="Omar coaching a Superhuman gym session" /></div>
            <div className="photo-frame"><img className="photo" src="/images/omar-hyrox-run.jpg" alt="Omar racing HYROX" /></div>
            <div className="photo-frame"><img className="photo" src="/images/omar-pullup.jpg" alt="Omar performing a pull-up" /></div>
            <div className="photo-frame"><img className="photo" src="/images/omar-first-place.jpg" alt="Omar on the Superhuman first-place podium" /></div>
          </div>
          <div>
            <p className="kicker">Start</p>
            <h2>Begin your transformation</h2>
            <p>
              Find the program that fits you, submit your application, complete InstaPay after approval, and wait for
              verification before access is granted. Superhuman will never ask for your InstaPay password, OTP, card
              PIN, or banking login.
            </p>
            <div className="btn-row">
              <Link className="btn btn-solid" href="/quiz">
                Find My Program
              </Link>
              <a className="btn" href={whatsappHref()} target="_blank" rel="noreferrer">
                Talk to Coach Omar
              </a>
              <Link className="btn btn-ghost" href="/knowledge">
                Join the Superhuman Community
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

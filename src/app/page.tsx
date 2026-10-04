import Link from "next/link";
import { Ticker } from "@/components/Chrome";
import { HeroReel, PhotoMarquee } from "@/components/Motion";
import { DietPlanBadge } from "@/components/DietPlanBadge";
import { programs } from "@/lib/programs";
import { instagramHref, site, whatsappHref } from "@/lib/site";

const pillars = ["Strength", "Endurance", "Athleticism", "Discipline", "Longevity"];

const journey = [
  { n: "01", title: "Find", href: "/quiz" },
  { n: "02", title: "Apply", href: "/start" },
  { n: "03", title: "Pay", href: "/payment" },
  { n: "04", title: "Train", href: "/process" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroReel />
        <div className="wrap hero-content">
          <p className="kicker">Omar Zoromba</p>
          <Ticker />
          <h1>
            Become more than fit.
            <br />
            Become Superhuman.
          </h1>
          <p className="lead">12-week performance programs. One price. One decision: which program fits you.</p>
          <p className="silver">{site.prices.label} / 12 weeks</p>
          <div className="chips">
            {["Hybrid", "HYROX", "Swim", "Run", "Strength"].map((x) => (
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

      <PhotoMarquee />

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">The system</p>
            <h2>Train complete. Not random.</h2>
            <p>Strength, endurance, and discipline in one Superhuman block. Every program is {site.prices.label} for 12 weeks.</p>
            <div className="pillars">
              {pillars.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
          <div className="photo-frame tall ken">
            <img className="photo" src="/images/omar-head-coach.jpg" alt="Omar Zoromba, Superhuman head coach" />
            <span className="badge">Head Coach</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="photo-frame tall ken">
            <img className="photo" src="/images/omar-founder-medal.jpg" alt="Omar Zoromba after winning Oceanman as overall winner" />
          </div>
          <div>
            <p className="kicker">Founder</p>
            <h2>Omar Zoromba</h2>
            <p>
              Hybrid athlete. HYROX coach. International finswimmer. He builds people who can perform — not just look
              trained.
            </p>
            <div className="btn-row">
              <Link className="btn btn-solid" href="/about">
                The story
              </Link>
              <a className="btn" href={instagramHref(site.instagramPersonal)} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <p className="kicker">Programs</p>
          <h2>{site.prices.label} · 12 weeks</h2>
          <div className="grid-3">
            {programs.slice(0, 6).map((p) => (
              <article className="card program-tile" key={p.slug}>
                <div className="photo-frame" style={{ minHeight: 240, marginBottom: "1rem" }}>
                  <img className="photo" src={p.image} alt="" />
                  <DietPlanBadge onPhoto />
                </div>
                <h3>{p.shortName}</h3>
                <p className="muted">{p.level}</p>
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
              All programs
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Path in</p>
          <h2>Four moves</h2>
          <div className="grid-4" style={{ marginTop: "1.2rem" }}>
            {journey.map((s) => (
              <Link className="card" href={s.href} key={s.n}>
                <p className="muted">{s.n}</p>
                <h3>{s.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap split">
          <div className="film-stack">
            <div className="photo-frame ken"><img className="photo" src="/images/omar-plank-session.jpg" alt="Omar coaching a Superhuman gym session" /></div>
            <div className="photo-frame ken"><img className="photo" src="/images/omar-hyrox-run.jpg" alt="Omar racing HYROX" /></div>
            <div className="photo-frame ken"><img className="photo" src="/images/omar-first-place.jpg" alt="Omar on the Superhuman first-place podium" /></div>
          </div>
          <div>
            <p className="kicker">Start</p>
            <h2>Your 12 weeks begin here.</h2>
            <p>Find the program. Apply. Pay on InstaPay after approval. Train.</p>
            <div className="btn-row">
              <Link className="btn btn-solid" href="/quiz">
                Find My Program
              </Link>
              <a className="btn" href={whatsappHref()} target="_blank" rel="noreferrer">
                Talk to Coach Omar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

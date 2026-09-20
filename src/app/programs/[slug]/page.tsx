import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, programs, receiveItems } from "@/lib/programs";
import { site, whatsappHref } from "@/lib/site";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) return {};
  return { title: p.name, description: p.description };
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) notFound();

  return (
    <>
      <section className="hero" style={{ minHeight: "70svh" }}>
        <div className="hero-bg" style={{ backgroundImage: `url(${p.image})` }} />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <p className="kicker">{p.subtitle ?? "Superhuman Program"}</p>
          <h1 className="metal">{p.name}</h1>
          <p className="lead">{p.goal}</p>
          <div className="btn-row">
            <Link className="btn btn-solid" href={`/start?program=${p.slug}`}>
              {p.cta}
            </Link>
            <a className="btn" href={whatsappHref(`Hello Coach Omar, I want to start ${p.name}.`)} target="_blank" rel="noreferrer">
              Talk to Coach Omar
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Main outcome</h2>
            <p>{p.description}</p>
            <div className="program-meta">
              <div>
                <span>Duration</span>
                <b>{p.duration}</b>
              </div>
              <div>
                <span>Weekly frequency</span>
                <b>{p.days}</b>
              </div>
              <div>
                <span>Locations</span>
                <b>{p.locations}</b>
              </div>
              <div>
                <span>Coaching</span>
                <b>{p.coaching}</b>
              </div>
            </div>
            <div className="card">
              <h3>Price</h3>
              <p className="silver">{p.price}</p>
              <p className="muted">{p.priceNote}</p>
              <p>
                Pay through InstaPay to {site.instapayName} after you submit your application. Payments are verified
                manually before access is granted.
              </p>
              <Link className="btn" href="/payment">
                Payment instructions
              </Link>
            </div>
          </div>
          <div>
            <h3>Who it is for</h3>
            <ul>
              {p.suitable.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <h3>Who it is not for</h3>
            <ul>
              {p.notFor.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <h2 className="metal">What you receive</h2>
          <p className="muted">
            Delivery method (application, PDF, email, or private coaching channel) is confirmed after payment
            verification. Results depend on consistency, effort, recovery, nutrition, starting level, and adherence.
          </p>
          <div className="grid-4">
            {receiveItems.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <h2>Full program features</h2>
            <ul>
              {p.contents.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h2>Required equipment</h2>
            <ul>
              {p.equipment.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Weekly structure</h2>
            <ul>
              {p.weekly.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h2>Phases</h2>
            {p.phases.map((ph) => (
              <div className="card" key={ph.title} style={{ marginBottom: "0.75rem" }}>
                <h3>{ph.title}</h3>
                <p>{ph.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap grid-2">
          <div>
            <h2>Expected adaptations</h2>
            <ul>
              {p.adaptations.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="notice">
              Superhuman does not promise guaranteed outcomes. Individual results vary.
            </p>
            <p>
              Beginner and advanced options, exercise-video support, and coaching-support level are confirmed on the
              program page and during onboarding.
            </p>
          </div>
          <div>
            <h2>Program FAQs</h2>
            {p.faqs.map((f) => (
              <div className="card" key={f.q} style={{ marginBottom: "0.75rem" }}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
            <Link className="btn btn-solid" href={`/start?program=${p.slug}`}>
              Start this program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

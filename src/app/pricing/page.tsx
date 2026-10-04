import type { Metadata } from "next";
import Link from "next/link";
import { DietPlanBadge } from "@/components/DietPlanBadge";
import { programs } from "@/lib/programs";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "All Superhuman programs are EGP 5,000 for 12 weeks. One price. Choose the program that fits your goal.",
};

export default function PricingPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Investment</p>
        <h1 className="metal">One price. Every Superhuman program.</h1>
        <p className="silver" style={{ fontSize: "2rem", margin: "0.4rem 0 0.6rem" }}>
          {site.prices.label} / 12 weeks
        </p>
        <p>{site.prices.note}</p>
        <p>
          Superhuman is not two service tiers. You choose one program that matches your goal. Then you apply, get
          approved, pay, and receive access.
        </p>
        <div className="btn-row" style={{ marginBottom: "2rem" }}>
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

        <h2>Program comparison</h2>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Program</th>
                <th>Best for</th>
                <th>Level</th>
                <th>Days</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {programs.map((p) => (
                <tr key={p.slug}>
                  <td>
                    <b>{p.shortName}</b>
                    <DietPlanBadge />
                  </td>
                  <td>{p.goal}</td>
                  <td>{p.level}</td>
                  <td>{p.days}</td>
                  <td>
                    {p.price} / 12 weeks
                  </td>
                  <td>
                    <Link href={`/programs/${p.slug}`}>Select program</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

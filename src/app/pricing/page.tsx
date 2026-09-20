import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Investment</p>
        <h1 className="metal">Pricing</h1>
        <p>Final prices are placeholders until Omar confirms package inclusions and delivery method.</p>
        <div className="grid-2">
          <article className="card">
            <h2>Standard Program</h2>
            <p className="silver">{site.prices.standardLabel}</p>
            <p className="muted">{site.prices.standardNote}</p>
            <ul>
              <li>Complete 12-week plan</li>
              <li>Exercise demonstration links</li>
              <li>Progression system</li>
              <li>Mobile-friendly PDF</li>
              <li>General support</li>
            </ul>
            <Link className="btn btn-solid" href="/start">
              Choose Standard
            </Link>
          </article>
          <article className="card">
            <h2>Elite Online Coaching</h2>
            <p className="silver">{site.prices.eliteLabel}</p>
            <p className="muted">{site.prices.eliteNote}</p>
            <ul>
              <li>Fully individualized training</li>
              <li>High-level performance programming</li>
              <li>Direct coaching access</li>
              <li>Training on the Superhuman application</li>
              <li>Technique analysis</li>
              <li>Competition preparation</li>
              <li>Weekly adjustments</li>
            </ul>
            <div className="btn-row">
              <Link className="btn" href="/coaching">
                Choose Premium
              </Link>
              <Link className="btn btn-solid" href="/start?program=online-coaching">
                Apply for Elite Coaching
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { ProgramsExplorer } from "@/components/ProgramsExplorer";

export const metadata: Metadata = {
  title: "Training Programs",
  description:
    "Hybrid performance, HYROX, calisthenics × running, Women (butt, thighs, Abs), swimming, body recomposition, sport-specific S&C, and custom Superhuman programs. All EGP 5,000 / 12 weeks.",
};

export default function ProgramsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">The System</p>
        <h1 className="metal">Choose the mission</h1>
        <p>
          Every Superhuman program is a complete 12-week block — not a random workout list. All programs are EGP
          5,000 / 12 weeks. Filter by goal, level, days, location, and sport. The only decision is which program fits
          you.
        </p>
        <ProgramsExplorer />
      </div>
    </section>
  );
}

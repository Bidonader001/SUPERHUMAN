import type { Metadata } from "next";
import { ProgramsExplorer } from "@/components/ProgramsExplorer";

export const metadata: Metadata = {
  title: "Training Programs",
  description:
    "Hybrid performance, HYROX, calisthenics and running, Ladies BTA, swimming, sport-specific S&C, and custom Superhuman programs.",
};

export default function ProgramsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">The System</p>
        <h1 className="metal">Choose the mission</h1>
        <p>
          Every program is a complete Superhuman block — not a random workout list. Filter by goal, level, days,
          location, sport, and coaching. Prices shown are editable placeholders until Omar confirms final fees.
        </p>
        <ProgramsExplorer />
      </div>
    </section>
  );
}

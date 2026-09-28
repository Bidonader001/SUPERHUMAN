import type { Metadata } from "next";
import { Quiz } from "@/components/Quiz";

export const metadata: Metadata = {
  title: "Find Your Program",
  description: "Interactive Superhuman program recommendation quiz.",
};

export default function QuizPage() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <p className="kicker">Matcher</p>
        <h1 className="metal">Find your program</h1>
        <p>
          Answer honestly. You will receive one or two suitable Superhuman recommendations. Every program is EGP 5,000
          / 12 weeks — the only decision is which program fits you.
        </p>
        <Quiz />
      </div>
    </section>
  );
}

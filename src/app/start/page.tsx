import type { Metadata } from "next";
import { StartForm } from "@/components/StartForm";
import { inboxList } from "@/lib/formsubmit";

export const metadata: Metadata = {
  title: "Start Your Program",
  description: "Apply to the Superhuman Program — onboarding, health screening, and program selection.",
};

export default function StartPage() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 920 }}>
        <p className="kicker">Onboarding</p>
        <h1 className="metal">Start your program</h1>
        <p>
          Four short steps. Your answers are emailed to {inboxList().join(" and ")}. After approval, continue to
          InstaPay. Medical details stay private and are never shown on the website.
        </p>
        <StartForm />
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { StartForm } from "@/components/StartForm";

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
          Four short steps. Choose your preferred Superhuman program. You will receive a diet plan from Coach Omar
          Zoromba, customized for your goal, to help you lock in. After approval, continue to InstaPay. Medical details
          stay private and are never shown on the website.
        </p>
        <StartForm />
      </div>
    </section>
  );
}

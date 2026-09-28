import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about Superhuman programs, beginners, equipment, women, payment, and results.",
};

const faqs = [
  {
    q: "Is the program suitable for beginners?",
    a: "Yes. Selected programs include beginner options, regressions, progression guidelines, and appropriate starting volumes.",
  },
  {
    q: "Do I need a fully equipped gym?",
    a: "This depends on the selected program. Equipment requirements are listed on every program page.",
  },
  {
    q: "Can I combine running and strength training?",
    a: "Yes. Hybrid programming is a central part of the Superhuman system, with training organized to manage fatigue and support adaptation.",
  },
  {
    q: "Can women join Superhuman?",
    a: "Yes. Superhuman offers general, hybrid, personalized, and women-focused programs, including the Ladies BTA Program.",
  },
  {
    q: "Do you coach clients outside Egypt?",
    a: "Yes. Superhuman programs are available worldwide.",
  },
  {
    q: "How will I receive my program?",
    a: "After payment verification and onboarding, your selected Superhuman program is delivered through the confirmed digital platform, PDF, email, or private channel.",
  },
  {
    q: "Are programs personalized?",
    a: "Named programs follow a proven Superhuman system. Custom Personalized is still EGP 5,000 / 12 weeks, built around your schedule and equipment after intake.",
  },
  {
    q: "Can I train with an injury?",
    a: "Clients must disclose injuries and medical restrictions. Medical clearance may be required. Training does not replace medical treatment.",
  },
  {
    q: "Is nutrition included?",
    a: "Nutrition education stays within the coach’s professional qualifications and scope. It is not a separate service tier.",
  },
  {
    q: "Are results guaranteed?",
    a: "No ethical coach can guarantee specific results. Progress depends on adherence, effort, recovery, nutrition, sleep, health, and starting level.",
  },
  {
    q: "How much does Superhuman cost?",
    a: "All Superhuman programs are EGP 5,000 for 12 weeks. Choose the program that fits your goal — there is one commercial model.",
  },
  {
    q: "How do I pay?",
    a: "Payments can be made through InstaPay using the details displayed on the official payment page.",
  },
  {
    q: "When will my program begin?",
    a: "The client receives a confirmation and expected start date after payment and onboarding information are verified.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <section className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <p className="kicker">Support</p>
        <h1 className="metal">Frequently asked questions</h1>
        <div className="grid-2">
          {faqs.map((f) => (
            <article className="card" key={f.q}>
              <h2>{f.q}</h2>
              <p>{f.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

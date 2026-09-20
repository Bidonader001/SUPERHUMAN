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
    a: "Yes. Online programs and coaching are available worldwide.",
  },
  {
    q: "How will I receive my program?",
    a: "After payment verification and onboarding, the program will be delivered through the selected digital platform, PDF system, application, email, or private coaching channel.",
  },
  {
    q: "Are programs personalized?",
    a: "Some programs follow a structured system, while personalized and online-coaching options are adjusted to the individual.",
  },
  {
    q: "Can I train with an injury?",
    a: "Clients must disclose injuries and medical restrictions. Medical clearance may be required. Training does not replace medical treatment.",
  },
  {
    q: "Is nutrition included?",
    a: "Nutrition support depends on the selected package and must stay within the coach’s professional qualifications and scope.",
  },
  {
    q: "Are results guaranteed?",
    a: "No ethical coach can guarantee specific results. Progress depends on adherence, effort, recovery, nutrition, sleep, health, and starting level.",
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

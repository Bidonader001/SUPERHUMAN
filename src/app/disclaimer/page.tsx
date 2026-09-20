import type { Metadata } from "next";

export const metadata: Metadata = { title: "Medical and Training Disclaimer" };

export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="wrap legal" style={{ maxWidth: 800 }}>
        <h1 className="metal">Medical and Training Disclaimer</h1>
        <p>
          Superhuman Program provides fitness and performance coaching. It is not medical care, physiotherapy, or
          a substitute for advice from a licensed physician.
        </p>
        <p>
          Training carries inherent risk of injury. Obtain medical clearance before starting if you have a medical
          condition, take medication, are pregnant, are returning from surgery, or feel pain during exercise.
        </p>
        <p>
          Results are not guaranteed. Progress depends on consistency, effort, recovery, nutrition, starting level,
          sleep, medical status, and adherence.
        </p>
        <p>
          Nutrition guidance, when included, stays within the coach’s professional qualifications and does not replace
          a registered dietitian or physician.
        </p>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment",
  description: "InstaPay instructions for Superhuman Program. Send your transfer screenshot on WhatsApp.",
};

const steps = [
  "Select your Superhuman program.",
  "Submit your application form.",
  "Wait for approval.",
  `Transfer ${site.prices.label} for 12 weeks through InstaPay.`,
  "Write your full name and program in the payment reference.",
  "Take a screenshot of the completed transfer.",
  "Send the screenshot to Coach Omar on WhatsApp.",
  "Wait for confirmation and onboarding instructions.",
];

export default function PaymentPage() {
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <p className="kicker">InstaPay</p>
          <h1 className="metal">Payment</h1>
          <div className="card">
            <p>
              Account name: <b>{site.instapayName}</b>
              <br />
              Mobile number: <b>{site.instapayDisplay}</b>
              <br />
              Amount: <b>{site.prices.label} / 12 weeks</b>
              <br />
              Payment reference: Client full name + selected program
            </p>
            <ol>
              {steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="notice">
              Superhuman Program will never ask for your InstaPay password, OTP, card PIN, or banking login
              information. A screenshot is not automatic proof of settled funds. Payments must be manually verified
              before access is granted.
            </p>
            <a
              className="btn btn-solid"
              href={whatsappHref("Hello Coach Omar, I am sending my Superhuman payment confirmation.")}
              target="_blank"
              rel="noreferrer"
            >
              Send payment on WhatsApp
            </a>
          </div>
        </div>
        <div className="photo-frame tall">
          <img className="photo" src="/images/omar-session-plate.jpg" alt="Superhuman training session" />
        </div>
      </div>
    </section>
  );
}

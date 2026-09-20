import type { Metadata } from "next";
import { PaymentForm } from "@/components/PaymentForm";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payment",
  description: "InstaPay instructions and payment confirmation for Superhuman Program.",
};

const steps = [
  "Select your program.",
  "Submit your application form.",
  "Transfer the program fee through InstaPay.",
  "Write your full name in the payment reference.",
  "Take a screenshot of the completed transfer.",
  "Upload the payment screenshot.",
  "Send the screenshot through WhatsApp.",
  "Wait for confirmation and onboarding instructions.",
];

export default function PaymentPage() {
  return (
    <section className="section">
      <div className="wrap grid-2">
        <div>
          <p className="kicker">InstaPay</p>
          <h1 className="metal">Payment</h1>
          <div className="card">
            <p>
              Account name: <b>{site.instapayName}</b>
              <br />
              Mobile number: <b>{site.instapayDisplay}</b>
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
            <a className="btn" href={whatsappHref("Hello Coach Omar, I am sending my Superhuman payment confirmation.")} target="_blank" rel="noreferrer">
              Send payment on WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h2>Submit payment confirmation</h2>
          <PaymentForm />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap legal" style={{ maxWidth: 800 }}>
        <h1 className="metal">Terms and Conditions</h1>
        <p>These terms govern use of the Superhuman Program website and the purchase of training services from {site.founder}.</p>
        <h2>Services</h2>
        <p>
          Superhuman sells structured training programs and coaching. Delivery method is confirmed after payment
          verification. Access is not granted until Omar or an authorized administrator confirms the transfer.
        </p>
        <h2>Client responsibility</h2>
        <p>
          You agree to provide accurate health and training information, to obtain medical clearance when appropriate,
          and to follow the program with honesty about recovery, pain, and adherence.
        </p>
        <h2>Payments</h2>
        <p>
          Payments are made through InstaPay to the account published on the official payment page. A screenshot is a
          confirmation request, not automatic proof of settled funds.
        </p>
        <h2>Refunds</h2>
        <p>
          Digital program access and coaching time are generally non-refundable once delivered, except where required
          by applicable law or where Omar agrees in writing.
        </p>
        <h2>Intellectual property</h2>
        <p>
          The Superhuman name, SUPERHUMAN / BUILT FOR WAR logo, program materials, and site content remain the
          property of the brand. You may not resell or redistribute programs.
        </p>
        <h2>Contact</h2>
        <p>{site.email}</p>
      </div>
    </section>
  );
}

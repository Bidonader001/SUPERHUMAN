import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap legal" style={{ maxWidth: 800 }}>
        <h1 className="metal">Privacy Policy</h1>
        <p>
          Superhuman Program collects the information you submit on application, quiz, newsletter, and payment forms
          in order to coach you and verify payments.
        </p>
        <h2>What we collect</h2>
        <p>
          Identity and contact details, training history, optional body metrics, health disclosures you choose to
          share, payment confirmation files, and basic technical logs needed to run the site.
        </p>
        <h2>How we use it</h2>
        <p>
          To recommend programs, deliver coaching, verify InstaPay transfers, and communicate via WhatsApp, email, or
          Instagram. We do not sell your data. Payment screenshots and medical information are not published.
        </p>
        <h2>Storage</h2>
        <p>
          Submissions are stored in a protected administrator area. Move this storage to a secured database and cloud
          bucket before public launch if you expect real client volume.
        </p>
        <h2>Contact</h2>
        <p>{site.email}</p>
      </div>
    </section>
  );
}

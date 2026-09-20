import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { instagramHref, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Omar Zoromba and Superhuman Program via WhatsApp, Instagram, or email.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <p className="kicker">Contact</p>
          <h1 className="metal">Talk to Coach Omar</h1>
          <p>Message Omar here. The form is emailed through FormSubmit. WhatsApp is still the fastest reply.</p>
          <ContactForm />
          <div className="card" style={{ marginTop: "2rem" }}>
            <p>
              WhatsApp: {site.whatsappDisplay}
              <br />
              InstaPay: {site.instapayDisplay}
              <br />
              Instagram: @{site.instagramPersonal}
              <br />
              Brand Instagram: @{site.instagramBrand}
              <br />
              Email: {site.email}
              <br />
              Location: {site.location}
              <br />
              {site.online}
            </p>
            <div className="btn-row">
              <a className="btn btn-solid" href={whatsappHref()} target="_blank" rel="noreferrer">
                Talk to Coach Omar
              </a>
              <a className="btn" href={instagramHref(site.instagramPersonal)} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="btn" href={`mailto:${site.email}`}>
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="photo-frame tall">
          <img className="photo" src="/images/omar-coach-smile.jpg" alt="Omar Zoromba, Superhuman head coach" />
        </div>
      </div>
    </section>
  );
}

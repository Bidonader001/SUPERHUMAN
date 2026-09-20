"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { instagramHref, nav, site, whatsappHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" aria-label="Superhuman home">
          <strong>SUPERHUMAN</strong>
          <span>BUILT FOR WAR</span>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.label}
            </Link>
          ))}
          <Link href="/start" className="btn">
            Start Your Program
          </Link>
        </nav>
        <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="wrap mobile-menu-inner">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/start" className="btn btn-solid">
          Start Your Program
        </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand">
            <strong>SUPERHUMAN</strong>
            <span>BUILT FOR WAR</span>
          </div>
          <p style={{ marginTop: "1rem" }}>
            Building stronger, faster, fitter, and more capable humans through structured performance training.
          </p>
          <small>Created by Omar Zoromba</small>
          <small>© {site.year} Superhuman Program. All rights reserved.</small>
        </div>
        <div>
          <h3 className="silver">Explore</h3>
          <p>
            <Link href="/programs">Programs</Link>
            <br />
            <Link href="/about">About Omar</Link>
            <br />
            <Link href="/coaching">Online Coaching</Link>
            <br />
            <Link href="/start">Start Your Program</Link>
            <br />
            <Link href="/pricing">Pricing</Link>
            <br />
            <Link href="/payment">Payment</Link>
          </p>
        </div>
        <div>
          <h3 className="silver">Support</h3>
          <p>
            <Link href="/faq">FAQ</Link>
            <br />
            <Link href="/contact">Contact</Link>
            <br />
            <Link href="/terms">Terms</Link>
            <br />
            <Link href="/privacy">Privacy</Link>
            <br />
            <Link href="/disclaimer">Disclaimer</Link>
          </p>
          <p>
            <a href={instagramHref(site.instagramPersonal)} target="_blank" rel="noreferrer">
              Instagram @{site.instagramPersonal}
            </a>
            <br />
            <a href={instagramHref(site.instagramBrand)} target="_blank" rel="noreferrer">
              Brand @{site.instagramBrand}
            </a>
            <br />
            <a href={whatsappHref()} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Floating() {
  return (
    <div className="float" aria-label="Quick actions">
      <a href={whatsappHref()} target="_blank" rel="noreferrer" title="WhatsApp">
        WA
      </a>
      <a href={instagramHref(site.instagramPersonal)} target="_blank" rel="noreferrer" title="Instagram">
        IG
      </a>
      <Link href="/start" title="Start your program">
        GO
      </Link>
    </div>
  );
}

export function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem("sh-cookie")) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="cookie">
      <p>
        Superhuman uses essential cookies to run forms and remember your cookie choice. Optional analytics and Meta
        Pixel can be added later without collecting medical details in public tracking.
      </p>
      <button
        className="btn"
        type="button"
        onClick={() => {
          window.localStorage.setItem("sh-cookie", "1");
          setShow(false);
        }}
      >
        Continue
      </button>
    </div>
  );
}

export function Ticker() {
  const lines = ["Built for performance", "Built for discipline", "Built for life", "Built for war"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % lines.length), 2400);
    return () => window.clearInterval(t);
  }, [lines.length]);
  return <div className="ticker">{lines[i]}</div>;
}

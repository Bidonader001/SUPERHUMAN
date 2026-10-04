export const site = {
  name: "SUPERHUMAN",
  tagline: "BUILT FOR WAR",
  fullName: "Superhuman Program",
  founder: "Omar Zoromba",
  founderLegal: "Omar Kamal Hussein",
  location: "New Cairo, Egypt",
  online: "Programs available worldwide",
  email: "omarkamal98.ok@gmail.com",
  formEmail: "info.superhumaneg@gmail.com",
  formCopies: ["omarkamal98.ok@gmail.com", "bido.nader@gmail.com"],
  whatsappDisplay: "01055307057",
  whatsappIntl: "201055307057",
  instapayName: "Omar Kamal hussein",
  instapayDisplay: "01003974565",
  instagramPersonal: "omarzoromba_",
  instagramBrand: "superhumanprogram",
  year: 2026,
  prices: {
    label: "EGP 5,000",
    note: "per 12 weeks. Every Superhuman program uses this price.",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/quiz", label: "Find Your Program" },
  { href: "/results", label: "Results" },
  { href: "/start", label: "Apply" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About Omar" },
  { href: "/quiz", label: "Find Your Program" },
  { href: "/process", label: "The Process" },
  { href: "/start", label: "Apply" },
  { href: "/pricing", label: "Pricing" },
  { href: "/payment", label: "Payment" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

export function whatsappHref(text?: string) {
  const defaultText =
    "Hello Coach Omar, I am interested in joining the Superhuman Program. My main goal is ________, and I would like help choosing the right program.";
  return `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(text ?? defaultText)}`;
}

export function instagramHref(handle: string) {
  return `https://www.instagram.com/${handle}/`;
}

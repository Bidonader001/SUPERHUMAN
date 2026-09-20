export const site = {
  name: "SUPERHUMAN",
  tagline: "BUILT FOR WAR",
  fullName: "Superhuman Program",
  founder: "Omar Zoromba",
  founderLegal: "Omar Kamal Hussein",
  location: "New Cairo, Egypt",
  online: "Online coaching available worldwide",
  email: "omarkamal98.ok@gmail.com",
  formEmail: "bido.nader@gmail.com",
  whatsappDisplay: "01055307057",
  whatsappIntl: "201055307057",
  instapayName: "Omar Kamal hussein",
  instapayDisplay: "01003974565",
  instagramPersonal: "omarzoromba_",
  instagramBrand: "superhumanprogram",
  year: 2026,
  prices: {
    standardLabel: "EGP 5,000",
    standardNote: "per 12 weeks — placeholder until final package price is confirmed",
    eliteLabel: "EGP 2,200",
    eliteNote: "per month — placeholder until final coaching price is confirmed",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/coaching", label: "Online Coaching" },
  { href: "/results", label: "Results" },
  { href: "/start", label: "Start Now" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About Omar" },
  { href: "/coaching", label: "Online Coaching" },
  { href: "/process", label: "The Process" },
  { href: "/start", label: "Start Your Program" },
  { href: "/quiz", label: "Find Your Program" },
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
    "Hello Coach Omar, I am interested in joining the Superhuman Program. My main goal is ________, and I would like help choosing the right plan.";
  return `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(text ?? defaultText)}`;
}

export function instagramHref(handle: string) {
  return `https://www.instagram.com/${handle}/`;
}

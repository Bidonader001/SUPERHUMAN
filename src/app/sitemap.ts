import type { MetadataRoute } from "next";
import { programs } from "@/lib/programs";
import { siteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const paths = [
    "",
    "/about",
    "/programs",
    "/coaching",
    "/process",
    "/results",
    "/start",
    "/payment",
    "/quiz",
    "/faq",
    "/contact",
    "/knowledge",
    "/pricing",
    "/terms",
    "/privacy",
    "/disclaimer",
    ...programs.map((p) => `/programs/${p.slug}`),
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}

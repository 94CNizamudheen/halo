import "server-only";
import type { HaloContent, HaloImage, HaloPackage, ImageSlot, PortfolioItem } from "./types";
import { IMAGE_SLOTS } from "./types";

const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DB_URL?.replace(/\/$/, "");

/** Seconds between background refreshes of admin-managed content. */
export const REVALIDATE_SECONDS = 60;

export const DEFAULT_PACKAGES: HaloPackage[] = [
  {
    key: "essential",
    name: "Essential",
    tagline: "For couples who have the basics sorted but need professional coordination.",
    priceLabel: "Starting from",
    price: "₹XX,XXX*",
    features: [
      "Wedding coordination",
      "Vendor coordination",
      "Timeline planning",
      "Event-day support",
      "Guest-flow assistance",
    ],
    featured: false,
    cta: "Get a Quote",
    order: 0,
  },
  {
    key: "signature",
    name: "Signature",
    tagline: "For couples who want support from planning through celebration.",
    priceLabel: "Starting from",
    price: "₹XX,XXX*",
    features: [
      "Wedding planning",
      "Vendor sourcing",
      "Budget planning",
      "Décor consultation",
      "Timeline management",
      "Event coordination",
    ],
    featured: true,
    cta: "Explore Signature",
    order: 1,
  },
  {
    key: "bespoke",
    name: "Bespoke",
    tagline: "For larger, multi-event or highly customised celebrations.",
    priceLabel: "",
    price: "Custom Quote",
    features: [
      "Complete wedding planning",
      "Creative direction",
      "Décor & styling",
      "Vendor management",
      "Guest management",
      "Multiple functions",
      "On-site coordination",
    ],
    featured: false,
    cta: "Build My Wedding",
    order: 2,
  },
];

/** Shown (without images) until real celebrations are added in the admin. */
export const DEFAULT_PORTFOLIO: PortfolioItem[] = [
  ["The Bride & Groom", "South Indian Wedding", "Chennai"],
  ["The Couple", "Christian Wedding", "Kochi"],
  ["Pre-Wedding", "Haldi", "Bengaluru"],
  ["The Couple", "Reception", "Hyderabad"],
  ["The Couple", "Muslim Wedding", "Coimbatore"],
  ["Pre-Wedding", "Mehendi", "Madurai"],
  ["The Couple", "Engagement", "Pondicherry"],
  ["The Couple", "Intimate Wedding", "Coorg"],
].map(([label, title, city], i) => ({ id: `default-${i}`, url: "", label, title, city, order: i }));

async function getNode<T>(path: string): Promise<T | null> {
  if (!DB_URL) return null;
  try {
    const res = await fetch(`${DB_URL}/halo/${path}.json`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["halo"] },
    });
    if (!res.ok) return null;
    return (await res.json()) as T | null;
  } catch {
    return null;
  }
}

export async function getHaloContent(): Promise<HaloContent> {
  const [rawImages, rawPortfolio, rawPackages] = await Promise.all([
    getNode<Record<string, HaloImage>>("images"),
    getNode<Record<string, Omit<PortfolioItem, "id">>>("portfolio"),
    getNode<Record<string, Partial<HaloPackage>>>("packages"),
  ]);

  const images: HaloContent["images"] = {};
  for (const slot of IMAGE_SLOTS) {
    const img = rawImages?.[slot];
    if (img?.url) images[slot as ImageSlot] = img;
  }

  const portfolio = rawPortfolio
    ? Object.entries(rawPortfolio)
        .map(([id, item]) => ({ ...item, id }))
        .filter((item) => item.url && !item.hidden)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    : [];

  const packages = DEFAULT_PACKAGES.map((def) => {
    const saved = rawPackages?.[def.key];
    if (!saved) return def;
    return {
      ...def,
      ...saved,
      key: def.key,
      features: Array.isArray(saved.features) && saved.features.length ? saved.features : def.features,
    };
  }).sort((a, b) => a.order - b.order);

  return {
    images,
    portfolio: portfolio.length ? portfolio : DEFAULT_PORTFOLIO,
    packages,
  };
}

/**
 * Shapes of the Halo content stored in the shared Allure Firebase Realtime
 * Database under the `/halo` node. Keep in sync with
 * `allure/src/utils/haloFirebase.ts`.
 */

export const IMAGE_SLOTS = [
  "hero",
  "intro-main",
  "intro-candid",
  "services-decor",
  "why-halo",
  "story-1",
  "story-2",
  "story-3",
  "story-4",
  "story-5",
] as const;

export type ImageSlot = (typeof IMAGE_SLOTS)[number];

export interface HaloImage {
  url: string;
  public_id?: string;
  alt?: string;
  updatedAt?: string;
}

export interface PortfolioItem {
  id: string;
  url: string;
  public_id?: string;
  /** Overlay heading on hover, e.g. "The Couple" / "Pre-Wedding" */
  label: string;
  /** Event type shown under the card, e.g. "South Indian Wedding" */
  title: string;
  city: string;
  order: number;
  hidden?: boolean;
  createdAt?: string;
}

export type PackageKey = "essential" | "signature" | "bespoke";

export interface HaloPackage {
  key: PackageKey;
  name: string;
  tagline: string;
  /** Small caption above the price, e.g. "Starting from". Empty hides it. */
  priceLabel: string;
  price: string;
  features: string[];
  featured: boolean;
  cta: string;
  order: number;
}

export interface Enquiry {
  name: string;
  email: string;
  phone: string;
  date: string;
  package: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface HaloContent {
  images: Partial<Record<ImageSlot, HaloImage>>;
  portfolio: PortfolioItem[];
  packages: HaloPackage[];
}

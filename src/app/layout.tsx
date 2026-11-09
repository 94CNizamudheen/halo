import type { Metadata, Viewport } from "next";
import { Caveat, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const title = "Halo & Halo Events — Beautiful weddings. Thoughtfully planned.";
const description =
  "Halo & Halo Events is a modern wedding and celebration planning studio offering planning, coordination, décor and design. Accessible luxury, transparent pricing and flexible packages designed around you.";
const shortDescription =
  "Thoughtful wedding planning, beautiful celebrations and flexible packages designed around you.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "wedding planning",
    "wedding coordination",
    "event design",
    "destination weddings",
    "intimate weddings",
    "wedding décor",
    "affordable luxury weddings",
  ],
  openGraph: { title, description: shortDescription, type: "website" },
  twitter: { card: "summary", title, description: shortDescription },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { HaloImage as HaloImageData } from "@/lib/types";
import { HaloImage } from "./HaloImage";
import { MaskedLines, Reveal } from "./motion";

const SERVICES = [
  {
    n: "01",
    title: "Wedding Planning",
    body: "From the first idea to the final send-off, we help bring every part of your celebration together.",
  },
  {
    n: "02",
    title: "Wedding Coordination",
    body: "You've planned the wedding. We'll make sure everything happens exactly as intended.",
  },
  { n: "03", title: "Décor & Design", body: "Thoughtful styling, beautiful details and spaces designed around your story." },
  { n: "04", title: "Venue Sourcing", body: "Finding the right setting based on your style, guest count and budget." },
  {
    n: "05",
    title: "Vendor Management",
    body: "Coordinating photographers, makeup artists, caterers, entertainment and other wedding partners.",
  },
  { n: "06", title: "Intimate Weddings", body: "Beautifully planned celebrations designed for smaller guest lists." },
  { n: "07", title: "Destination Weddings", body: "Planning support for celebrations away from home." },
  {
    n: "08",
    title: "Pre-Wedding Events",
    body: "Engagement · Haldi · Mehendi · Sangeet · Reception · Family celebrations.",
  },
];

export function Services({ image }: { image?: HaloImageData }) {
  return (
    <section id="services" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="label-caps text-rose">What We Do</p>
            </Reveal>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.02] text-espresso sm:text-5xl lg:text-6xl">
              <MaskedLines lines={["Everything you need.", "Nothing you don't."]} />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-warmgrey">
              A complete studio of services, offered individually or together — shaped entirely around your
              celebration.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.08}>
              <div className="group border-t border-espresso/15 pt-6">
                <span className="font-serif text-2xl text-champagne">{s.n}</span>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-espresso">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmgrey">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} y={40}>
          <div className="relative mt-20 aspect-[16/8] w-full overflow-hidden">
            <HaloImage
              image={image}
              fallbackAlt="A minimally styled wedding ceremony arch with flowing drapery and soft florals"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

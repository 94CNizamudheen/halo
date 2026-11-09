import type { PortfolioItem } from "@/lib/types";
import { HaloImage } from "./HaloImage";
import { MaskedLines, Reveal } from "./motion";

/**
 * Editorial grid rhythm from the design. Admin-ordered items cycle through
 * these spans/ratios, so any number of celebrations keeps the same layout.
 */
const LAYOUT = [
  { span: "lg:col-span-7", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-4", ratio: "aspect-[3/4]" },
  { span: "lg:col-span-8", ratio: "aspect-[3/4] lg:aspect-[16/10]" },
  { span: "lg:col-span-6", ratio: "aspect-[4/3]" },
  { span: "lg:col-span-6", ratio: "aspect-[4/3]" },
  { span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-7", ratio: "aspect-[4/5] lg:aspect-[16/11]" },
];

export function Work({ items }: { items: PortfolioItem[] }) {
  return (
    <section id="work" className="bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="label-caps text-rose">Real Celebrations</p>
          </Reveal>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.02] text-espresso sm:text-5xl lg:text-6xl">
            <MaskedLines lines={["Weddings with", "their own personality."]} />
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {items.map((item, i) => {
            const { span, ratio } = LAYOUT[i % LAYOUT.length];
            return (
              <Reveal key={item.id} delay={(i % 2) * 0.08} className={span}>
                <a href="#work" className="group block">
                  <div className={`relative w-full overflow-hidden ${ratio}`}>
                    <HaloImage
                      image={item}
                      fallbackAlt={`${item.title} celebration planned by Halo & Halo Events`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="font-serif text-2xl text-ivory">{item.label}</p>
                      <p className="mt-1 label-caps text-ivory/75">{item.city}</p>
                      <span className="mt-3 inline-flex items-center gap-2 label-caps text-champagne">
                        View Wedding →
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="label-caps text-espresso/70">{item.title}</span>
                    <span className="label-caps text-warmgrey">{item.city}</span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { HaloPackage } from "@/lib/types";
import { MaskedLines, Reveal } from "./motion";

export function Packages({ packages }: { packages: HaloPackage[] }) {
  return (
    <section id="packages" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="label-caps text-rose">Packages</p>
          </Reveal>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.02] text-espresso sm:text-5xl lg:text-6xl">
            <MaskedLines lines={["Start with what you need."]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-warmgrey">
              Simple starting packages. Flexible enough to make them yours.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.1} y={40}>
              <div
                className={`flex h-full flex-col p-8 lg:p-10 ${
                  p.featured ? "bg-espresso text-ivory" : "border border-espresso/15 bg-ivory text-espresso"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="label-caps">{p.name}</span>
                  {p.featured && (
                    <span className="rounded-full bg-champagne px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-espresso">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className={`mt-5 text-sm leading-relaxed ${p.featured ? "text-ivory/75" : "text-warmgrey"}`}>
                  {p.tagline}
                </p>
                <div className="mt-8">
                  {p.priceLabel && (
                    <span
                      className={`text-[0.7rem] uppercase tracking-[0.2em] ${
                        p.featured ? "text-ivory/60" : "text-warmgrey"
                      }`}
                    >
                      {p.priceLabel}
                    </span>
                  )}
                  <div className="mt-1 font-serif text-4xl font-light lg:text-5xl">{p.price}</div>
                </div>
                <ul
                  className={`mt-8 space-y-3 border-t pt-6 text-sm ${
                    p.featured ? "border-ivory/20" : "border-espresso/10"
                  }`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={p.featured ? "text-champagne" : "text-rose"}>—</span>
                      <span className={p.featured ? "text-ivory/85" : "text-espresso/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#plan"
                  className={`mt-10 inline-flex justify-center rounded-full px-6 py-4 label-caps transition-colors ${
                    p.featured
                      ? "bg-ivory text-espresso hover:bg-champagne"
                      : "border border-espresso text-espresso hover:bg-espresso hover:text-ivory"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-warmgrey">
            *Final pricing depends on event scale, location, guest count, services and custom requirements. Prices
            shown are placeholders until confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

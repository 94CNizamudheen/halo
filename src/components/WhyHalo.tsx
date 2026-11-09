import type { HaloImage as HaloImageData } from "@/lib/types";
import { HaloImage } from "./HaloImage";
import { MaskedLines, Reveal } from "./motion";

const POINTS = [
  {
    title: "Transparent pricing",
    body: "Clear starting packages and honest quotes, so you always know where your money goes.",
  },
  { title: "Flexible packages", body: "Take what you need and leave what you don't — every plan is shaped around you." },
  {
    title: "Design-led planning",
    body: "An editorial eye for détail that makes celebrations feel considered, not cluttered.",
  },
  {
    title: "Stress-free delivery",
    body: "We hold the timeline and the moving pieces so you can be fully present on the day.",
  },
];

export function WhyHalo({ image }: { image?: HaloImageData }) {
  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative">
          <Reveal y={40}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <HaloImage
                image={image}
                fallbackAlt="An elegantly styled wedding tablescape with candles and soft florals"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="label-caps text-rose">Why Halo &amp; Halo</p>
          </Reveal>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.02] text-espresso sm:text-5xl lg:text-6xl">
            <MaskedLines lines={["Accessible luxury,", "thoughtfully delivered."]} />
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="border-t border-espresso/15 pt-5">
                  <h3 className="font-serif text-xl text-espresso">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warmgrey">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <blockquote className="mt-12 border-l-2 border-rose pl-6">
              <p className="font-serif text-2xl font-light italic leading-snug text-espresso">
                “They made our celebration feel effortless — beautiful, personal and entirely ours.”
              </p>
              <footer className="mt-3 label-caps text-warmgrey">A Halo &amp; Halo couple</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

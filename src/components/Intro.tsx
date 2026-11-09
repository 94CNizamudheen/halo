import type { HaloContent } from "@/lib/types";
import { HaloImage } from "./HaloImage";
import { MaskedLines, Reveal } from "./motion";

export function Intro({ images }: { images: HaloContent["images"] }) {
  return (
    <section id="about" className="bg-ivory py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="label-caps text-rose">Welcome to Halo &amp; Halo</p>
          </Reveal>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.02] text-espresso sm:text-5xl lg:text-6xl">
            <MaskedLines lines={["Big feelings.", "Beautiful details.", "Sensible budgets."]} />
          </h2>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-xl space-y-5 text-pretty text-base leading-relaxed text-warmgrey">
              <p>
                We believe an unforgettable wedding isn&apos;t defined by how much you spend. It&apos;s about the
                people, the atmosphere, the little details and how beautifully everything comes together.
              </p>
              <p>
                Halo &amp; Halo helps you plan celebrations that feel unmistakably yours — thoughtfully designed
                around your style, priorities and budget.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#services"
              className="group mt-10 inline-flex items-center gap-3 border-b border-espresso pb-1 label-caps text-espresso"
            >
              Discover Our Approach
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </div>

        <div className="relative order-1 lg:order-2">
          <Reveal y={40}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <HaloImage
                image={images["intro-main"]}
                fallbackAlt="A couple sharing a quiet, intimate moment in soft natural light"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.25} y={40}>
            <div className="absolute -bottom-10 -left-6 hidden aspect-square w-44 overflow-hidden border-8 border-ivory shadow-xl sm:block lg:w-56">
              <HaloImage
                image={images["intro-candid"]}
                fallbackAlt="Close-up of a bride's hands with delicate henna and gold rings"
                sizes="240px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

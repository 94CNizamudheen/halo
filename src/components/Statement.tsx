import { MaskedLines, Reveal } from "./motion";

export function Statement() {
  return (
    <section id="weddings" className="bg-ivory py-28 lg:py-44">
      <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-10">
        <h2 className="font-serif text-[2.75rem] font-light leading-[1] text-espresso sm:text-6xl lg:text-8xl">
          <MaskedLines lines={["Beautiful doesn't", "have to mean", "expensive."]} stagger={0.14} />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-pretty text-base leading-relaxed text-warmgrey">
            Tell us what matters most. We&apos;ll help you focus your budget where it creates the biggest impact — and
            simplify the things that don&apos;t.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <a
              href="#packages"
              className="group inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 label-caps text-ivory transition-colors hover:bg-rose"
            >
              See Our Packages
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <p className="font-script text-2xl text-rose lg:text-3xl">“Spend smart. Celebrate beautifully.”</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

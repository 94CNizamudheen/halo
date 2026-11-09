import { MaskedLines, Reveal } from "./motion";

const STEPS = [
  { n: "01", title: "Let's Talk", body: "Tell us about your wedding, your ideas and what matters to you." },
  { n: "02", title: "Build the Plan", body: "We create a plan around your priorities, budget and timeline." },
  { n: "03", title: "Bring It Together", body: "Venues, vendors, décor and details start coming together." },
  { n: "04", title: "Celebrate", body: "We manage the moving pieces while you enjoy your day." },
];

export function Process() {
  return (
    <section id="journal" className="bg-ivory py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="label-caps text-rose">Our Process</p>
          </Reveal>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.02] text-espresso sm:text-5xl lg:text-6xl">
            <MaskedLines lines={["From “we're engaged”", "to “we did it.”"]} />
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-espresso/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative h-full bg-ivory p-8 lg:p-10">
                <span className="font-serif text-5xl font-light text-champagne">{s.n}</span>
                <h3 className="mt-6 font-serif text-2xl text-espresso">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmgrey">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <span className="absolute right-6 top-10 hidden text-warmgrey/50 lg:block">→</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

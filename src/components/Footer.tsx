const EXPLORE = [
  { label: "Weddings", href: "#weddings" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Packages", href: "#packages" },
];

export function Footer() {
  return (
    <footer className="bg-ivory pb-10 pt-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="border-t border-espresso/15 pt-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <p className="font-serif text-3xl text-espresso">
                HALO <span className="text-champagne">&amp;</span> HALO
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-warmgrey">
                Beautiful weddings, thoughtfully planned. Accessible luxury and flexible packages designed around you.
              </p>
            </div>
            <div>
              <p className="label-caps text-warmgrey">Explore</p>
              <ul className="mt-5 space-y-3 text-sm text-espresso/80">
                {EXPLORE.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-rose">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-caps text-warmgrey">Get in touch</p>
              <ul className="mt-5 space-y-3 text-sm text-espresso/80">
                <li>hello@haloandhalo.events</li>
                <li>+91 00000 00000</li>
                <li>Chennai · Worldwide</li>
                <li>
                  <a href="#plan" className="text-rose hover:text-espresso">
                    Plan your wedding →
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-espresso/10 pt-6 sm:flex-row sm:items-center">
            <p className="label-caps text-warmgrey">© {new Date().getFullYear()} Halo &amp; Halo Events</p>
            <p className="label-caps text-warmgrey">Beautiful weddings. Thoughtfully planned.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

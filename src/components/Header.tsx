"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "./motion";

export const NAV_LINKS = [
  { label: "Weddings", href: "#weddings" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-border/70 bg-ivory/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#top"
            className={`font-serif text-xl leading-none tracking-tight transition-colors duration-500 lg:text-2xl ${
              scrolled ? "text-espresso" : "text-ivory"
            }`}
          >
            HALO <span className="text-champagne">&amp;</span> HALO
          </a>
          <ul
            className={`hidden items-center gap-8 lg:flex label-caps transition-colors duration-500 ${
              scrolled ? "text-espresso/70" : "text-ivory/80"
            }`}
          >
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-rose">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#plan"
              className={`hidden rounded-full border px-6 py-3 label-caps transition-all duration-500 md:inline-flex ${
                scrolled
                  ? "border-espresso text-espresso hover:bg-espresso hover:text-ivory"
                  : "border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso"
              }`}
            >
              Plan Your Wedding
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden transition-colors duration-500 ${scrolled ? "text-espresso" : "text-ivory"}`}
            >
              <Menu className="h-6 w-6" strokeWidth={1.4} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col bg-ivory px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl text-espresso">
                HALO <span className="text-champagne">&amp;</span> HALO
              </span>
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="text-espresso">
                <X className="h-6 w-6" strokeWidth={1.4} />
              </button>
            </div>
            <ul className="mt-16 flex flex-col gap-6">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 0.06 * i, duration: 0.5 }}
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="font-serif text-4xl text-espresso">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#plan"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex justify-center rounded-full bg-espresso px-6 py-4 label-caps text-ivory"
            >
              Plan Your Wedding
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { HaloImage as HaloImageData } from "@/lib/types";
import { HaloImage } from "./HaloImage";
import { EASE, MaskedLines } from "./motion";

export function Hero({ image }: { image?: HaloImageData }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.42, 0.7]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-espresso">
      <motion.div
        style={{ y }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: EASE }}
        className="absolute inset-0 h-[118%]"
      >
        <HaloImage
          image={image}
          fallbackAlt="A bride and groom walking together after their wedding ceremony in warm evening light"
          sizes="100vw"
          priority
          tone="dark"
          className="object-cover object-center"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/70"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 lg:px-10 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: EASE }}
          className="label-caps text-ivory/80"
        >
          Halo &amp; Halo Events
        </motion.p>
        <h1 className="mt-6 font-serif text-[3.25rem] font-light leading-[0.95] text-ivory sm:text-7xl lg:text-[6.5rem]">
          <MaskedLines lines={["Your day.", "Your story.", "Beautifully yours."]} delay={0.6} stagger={0.18} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: EASE }}
          className="mt-8 max-w-md text-pretty font-sans text-base leading-relaxed text-ivory/85"
        >
          Thoughtful wedding planning, beautiful celebrations and flexible packages designed around you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.75, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="#plan"
            className="inline-flex rounded-full bg-ivory px-8 py-4 label-caps text-espresso transition-colors hover:bg-champagne"
          >
            Plan My Wedding
          </a>
          <a href="#work" className="group inline-flex items-center gap-2 label-caps text-ivory">
            Explore Our Weddings
            <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-ivory/20"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-4 lg:px-10">
          <p className="label-caps text-ivory/70">Weddings • Events • Design • Coordination</p>
        </div>
      </motion.div>
    </section>
  );
}

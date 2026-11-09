"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { HaloContent, ImageSlot } from "@/lib/types";
import { HaloImage } from "./HaloImage";

const FRAMES: { text: string; slot: ImageSlot }[] = [
  { text: "Not just events.", slot: "story-1" },
  { text: "Moments.", slot: "story-2" },
  { text: "People.", slot: "story-3" },
  { text: "Memories.", slot: "story-4" },
  { text: "That's what we plan for.", slot: "story-5" },
];

/** Vertical scroll drives a horizontal strip of full-height story frames. */
export function StoryGallery({ images }: { images: HaloContent["images"] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-espresso" aria-label="A cinematic story of celebrations we plan">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-full items-center gap-6 pl-6 lg:gap-10 lg:pl-10">
          {FRAMES.map((f, i) => (
            <div
              key={f.slot}
              className="relative flex h-[70svh] w-[82vw] shrink-0 items-end overflow-hidden sm:w-[62vw] lg:w-[46vw]"
            >
              <HaloImage image={images[f.slot]} fallbackAlt="" sizes="80vw" tone="dark" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/20" />
              <h3 className="relative z-10 p-8 font-serif text-4xl font-light leading-tight text-ivory sm:text-5xl lg:p-12 lg:text-6xl">
                {f.text}
              </h3>
              <span className="absolute right-8 top-8 z-10 font-serif text-lg text-ivory/50">0{i + 1}</span>
            </div>
          ))}
          <div className="flex w-[40vw] shrink-0 items-center pr-10 lg:w-[24vw]">
            <p className="label-caps text-ivory/50">Halo &amp; Halo Events</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

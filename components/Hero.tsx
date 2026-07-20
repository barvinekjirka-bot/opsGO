"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-tied text disappearance: slide down + fade out as user scrolls
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 140]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex h-[100svh] min-h-[720px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background video layer */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 z-0"
      >
        {/* Replace src with the real looping operations reel (warehouse floor / conveyor / scanning) */}
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/videos/operations-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
        <div className="grid-lines absolute inset-0 opacity-30" />
      </motion.div>

      {/* Text layer — merges/fades over the video */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest2 text-white/60"
        >
          <span className="h-1.5 w-1.5 animate-pulseSignal rounded-full bg-signal" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-[12vw] font-semibold leading-[0.98] tracking-tight text-white sm:text-[8.5vw] md:text-[6vw] lg:text-[76px]"
        >
          {t.hero.titleLine1}
          <br />
          <span className="font-serif italic text-signal">
            {t.hero.titleAccent}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-7 max-w-xl text-balance font-body text-base text-white/60 sm:text-lg"
        >
          {t.hero.sub1}
          <br className="hidden sm:block" />
          {t.hero.sub2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-body text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04]"
          >
            {t.hero.ctaPrimary}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#how-we-work"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-body text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
          >
            <PlayCircle className="h-4 w-4" />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>

      {/* Signature element — live ops readout ticker */}
      <div className="absolute bottom-0 left-0 z-10 w-full border-t border-line bg-black/60 backdrop-blur-sm">
        <div className="relative flex overflow-hidden py-3">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...t.hero.readout, ...t.hero.readout].map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[11px] tracking-widest2 text-white/45"
              >
                <span className="h-1 w-1 rounded-full bg-signal" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

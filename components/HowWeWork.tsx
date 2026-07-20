"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/i18n";
import SectionLabel from "./SectionLabel";

export default function HowWeWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-we-work" className="relative w-full overflow-hidden bg-ink py-28 md:py-36">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 text-balance text-center md:mb-20"
        >
          <SectionLabel n="04" center>{t.howWeWork.label}</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.howWeWork.title}
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Rail */}
          <div className="absolute left-[15px] top-0 h-full w-px bg-white/10 md:left-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-px bg-signal shadow-[0_0_8px_1px_rgba(255,122,26,0.6)] md:left-0"
            />
          </div>

          <div className="flex flex-col gap-14">
            {t.howWeWork.steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-start gap-6 pl-10 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-14 md:text-right"
                    : "md:ml-auto md:pl-14"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-signal/50 bg-ink font-mono text-[11px] text-signal md:top-0 ${
                    i % 2 === 0 ? "md:-right-4 md:left-auto" : "md:-left-4"
                  }`}
                >
                  {step.n}
                </span>
                <div className="liquid-glass w-full rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/50">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

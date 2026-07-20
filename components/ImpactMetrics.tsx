"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function ImpactMetrics() {
  const { t } = useLang();

  return (
    <section className="relative w-full border-y border-line bg-ink py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            {t.impact.label}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t.impact.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {t.impact.metrics.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="bg-ink p-5 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <span className="font-body text-[13px] leading-snug text-white/65">
                {m}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

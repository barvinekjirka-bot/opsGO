"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function BusinessModel() {
  const { t } = useLang();

  return (
    <section className="relative w-full bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            {t.businessModel.label}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.businessModel.title}
          </h2>
          <p className="mt-5 font-body text-white/55">{t.businessModel.sub}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.businessModel.tiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="liquid-glass flex flex-col rounded-3xl p-7"
            >
              <span className="font-mono text-[11px] text-white/30">{tier.label}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {tier.title}
              </h3>
              <span className="mt-1 font-mono text-[12px] uppercase tracking-wide text-signal">
                {tier.price}
              </span>
              <p className="mt-4 font-body text-sm leading-relaxed text-white/50">
                {tier.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

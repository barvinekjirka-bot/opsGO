"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="why-us" className="relative w-full bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            {t.whyUs.label}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.whyUs.title}
          </h2>
          <p className="mt-5 font-body text-white/55">{t.whyUs.sub}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-8"
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-widest2 text-white/35">
              {t.whyUs.consultantsLabel}
            </p>
            <ul className="space-y-4">
              {t.whyUs.consultants.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/40">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-white/25" />
                  <span className="font-body text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="liquid-glass rounded-3xl p-8 shadow-[0_0_60px_-20px_rgba(255,122,26,0.15)]"
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-widest2 text-signal">
              {t.whyUs.operatorsLabel}
            </p>
            <ul className="space-y-4">
              {t.whyUs.operators.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                  <span className="font-body text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useLang } from "@/lib/i18n";
import SectionLabel from "./SectionLabel";

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
          <SectionLabel n="06">{t.businessModel.label}</SectionLabel>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.businessModel.title}
          </h2>
          <p className="mt-5 font-body text-white/55">{t.businessModel.sub}</p>
        </motion.div>

        {/* Tiers on the signal rail — same motif as How We Work */}
        <div className="relative">
          <span className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {t.businessModel.tiers.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex flex-col"
              >
                <span className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center self-start rounded-full border border-signal/50 bg-ink font-mono text-[11px] text-signal shadow-[0_0_10px_0_rgba(255,122,26,0.25)] md:self-center">
                  {tier.label}
                </span>
                <div className="liquid-glass flex flex-1 flex-col rounded-3xl p-7">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {tier.title}
                  </h3>
                  <span className="mt-1 font-mono text-[12px] uppercase tracking-wide text-signal">
                    {tier.price}
                  </span>
                  <p className="mt-4 font-body text-sm leading-relaxed text-white/50">
                    {tier.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audit guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-3xl border border-gold/20 bg-gold/[0.035] p-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/[0.08]">
              <ShieldCheck className="h-5 w-5 text-gold" strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-gold">
                {t.businessModel.guarantee.label}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {t.businessModel.guarantee.title}
              </h3>
              <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-white/70">
                {t.businessModel.guarantee.text}
              </p>
              <p className="mt-4 max-w-2xl border-t border-line pt-4 font-body text-[12px] leading-relaxed text-white/40">
                {t.businessModel.guarantee.note}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

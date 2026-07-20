"use client";

import { motion } from "framer-motion";
import { Award, TrendingDown, TrendingUp, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";

const STAT_ICONS = [TrendingDown, TrendingUp, Users];

export default function Founders() {
  const { t } = useLang();
  const f = t.founders;

  return (
    <section id="who-we-are" className="relative w-full bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            {f.label}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {f.title}
          </h2>
          <p className="mt-5 font-body text-white/55">{f.sub}</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Jiří Barvínek */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="liquid-glass rounded-3xl p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {f.jiri.name}
                </h3>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-wide text-signal">
                  {f.jiri.role}
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.02] font-display text-lg text-white/40">
                JB
              </div>
            </div>

            <p className="mt-5 font-body text-sm leading-relaxed text-white/60">
              {f.jiri.bio}
            </p>

            <div className="mt-7 space-y-5 border-t border-line pt-6">
              {f.jiri.experience.map((exp) => (
                <div key={exp.role} className="grid grid-cols-[92px_1fr] gap-4">
                  <span className="font-mono text-[11px] leading-relaxed text-white/35">
                    {exp.period}
                  </span>
                  <div>
                    <p className="font-body text-sm font-semibold text-white/90">
                      {exp.role}
                    </p>
                    <p className="font-mono text-[11px] text-white/40">
                      {exp.company}
                    </p>
                    <p className="mt-1.5 font-body text-[13px] leading-relaxed text-white/50">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
              {f.jiri.stats.map((stat, i) => {
                const Icon = STAT_ICONS[i];
                return (
                  <div key={stat.label}>
                    <Icon className="mb-2 h-4 w-4 text-signal" strokeWidth={1.5} />
                    <p className="font-mono text-lg font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-body text-[11px] leading-snug text-white/45">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Juraj Komár - placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="liquid-glass flex flex-col rounded-3xl p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {f.juraj.name}
                </h3>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-wide text-signal">
                  {f.juraj.role}
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.02] font-display text-lg text-white/40">
                JK
              </div>
            </div>

            <div className="mt-8 flex flex-1 flex-col items-start justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.015] p-8">
              <Award className="mb-4 h-5 w-5 text-white/30" strokeWidth={1.5} />
              <p className="font-body text-sm leading-relaxed text-white/45">
                {f.juraj.placeholder}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team achievement highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-5 rounded-3xl border border-signal/20 bg-signal/[0.04] p-8"
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
                {f.award.label}
              </span>
              <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-white/70">
                {f.award.text}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="whitespace-nowrap font-mono text-3xl font-semibold text-white">
                {f.award.value}
              </p>
              <p className="font-body text-[12px] text-white/45">
                {f.award.valueSub}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Boxes, LineChart, Warehouse, GitBranch, Cpu, BarChart3 } from "lucide-react";
import { useLang } from "@/lib/i18n";

const CASE_ICONS = [Boxes, LineChart, Warehouse, GitBranch, Cpu, BarChart3];
const CASE_SIZES = ["lg", "sm", "sm", "sm", "sm", "lg"];

export default function CaseStudies() {
  const { t } = useLang();

  return (
    <section id="case-studies" className="relative w-full bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            {t.caseStudies.label}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.caseStudies.title}
          </h2>
          <p className="mt-5 font-body text-white/55">{t.caseStudies.sub}</p>
        </motion.div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.caseStudies.cases.map((c, i) => {
            const Icon = CASE_ICONS[i];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={`liquid-glass group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-colors duration-300 hover:bg-white/[0.04] ${
                  CASE_SIZES[i] === "lg" ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-signal" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-white/30">
                    {c.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-white/50">
                    {c.desc}
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-signal/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

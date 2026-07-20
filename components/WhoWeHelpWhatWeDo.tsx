"use client";

import { motion } from "framer-motion";
import {
  Warehouse,
  Factory,
  ShoppingCart,
  ClipboardCheck,
  BarChart3,
  Boxes,
  TrendingUp,
  Cpu,
  LineChart,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const SEGMENT_ICONS = [Warehouse, Factory, ShoppingCart];
const SERVICE_ICONS = [ClipboardCheck, Boxes, LineChart, Cpu, BarChart3, TrendingUp];

export default function WhoWeHelpWhatWeDo() {
  const { t } = useLang();

  return (
    <section id="who-we-help" className="relative w-full bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            {t.whoWeHelp.label}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.whoWeHelp.title}
          </h2>
        </motion.div>

        <div className="mb-24 grid gap-5 md:grid-cols-3">
          {t.whoWeHelp.segments.map((seg, i) => {
            const Icon = SEGMENT_ICONS[i];
            return (
              <motion.div
                key={seg.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="liquid-glass group rounded-3xl p-7 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <Icon className="mb-5 h-6 w-6 text-signal" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-white">
                  {seg.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/50">
                  {seg.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-signal">
            {t.whatWeDo.label}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.whatWeDo.title}
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whatWeDo.services.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="liquid-glass rounded-3xl p-7 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <Icon className="mb-5 h-5 w-5 text-white/70" strokeWidth={1.5} />
                <h3 className="font-display text-base font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-white/50">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

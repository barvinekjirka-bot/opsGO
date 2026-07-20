"use client";

import { motion } from "framer-motion";
import {
  TrendingDown,
  TrendingUp,
  Users,
  Rocket,
  Warehouse,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { Copy } from "@/lib/copy";
import SectionLabel from "./SectionLabel";

const JIRI_STAT_ICONS: LucideIcon[] = [Briefcase, TrendingDown, TrendingUp];
const JURAJ_STAT_ICONS: LucideIcon[] = [Rocket, Users, Warehouse];

type Founder =
  | Copy["founders"]["jiri"]
  | Copy["founders"]["juraj"];

function FounderCard({
  founder,
  initials,
  statIcons,
  delay = 0,
}: {
  founder: Founder;
  initials: string;
  statIcons: LucideIcon[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      className="liquid-glass flex flex-col rounded-3xl p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">
            {founder.name}
          </h3>
          <p className="mt-1 font-mono text-[12px] uppercase tracking-wide text-signal">
            {founder.role}
          </p>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.02] font-display text-lg text-white/40">
          {initials}
        </div>
      </div>

      <p className="mt-5 font-body text-sm leading-relaxed text-white/60">
        {founder.bio}
      </p>

      {/* Experience highlights on the signal rail */}
      <div className="relative mt-7 flex-1 border-t border-line pt-6">
        <div className="absolute bottom-0 left-[3px] top-6 w-px bg-gradient-to-b from-signal/60 via-signal/25 to-transparent" />
        <div className="space-y-5">
          {founder.highlights.map((h) => (
            <div key={h.title} className="relative pl-6">
              <span className="absolute left-0 top-[7px] h-[7px] w-[7px] rounded-full border border-signal/70 bg-ink" />
              <p className="font-body text-sm font-semibold text-white/90">
                {h.title}
              </p>
              <p className="mt-1 font-body text-[13px] leading-relaxed text-white/50">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
        {founder.stats.map((stat, i) => {
          const Icon = statIcons[i];
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
  );
}

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
          <SectionLabel n="08">{f.label}</SectionLabel>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {f.title}
          </h2>
          <p className="mt-5 font-body text-white/55">{f.sub}</p>
        </motion.div>

        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          <FounderCard founder={f.jiri} initials="JB" statIcons={JIRI_STAT_ICONS} />
          <FounderCard
            founder={f.juraj}
            initials="JK"
            statIcons={JURAJ_STAT_ICONS}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}

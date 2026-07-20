"use client";

import { motion } from "framer-motion";
import { Layers, Route, ClipboardList } from "lucide-react";
import { useLang } from "@/lib/i18n";
import SectionLabel from "./SectionLabel";

const CATEGORY_ICONS = [Layers, Route, ClipboardList];

export default function Methods() {
  const { t } = useLang();
  const m = t.methods;

  return (
    <section id="methods" className="relative w-full bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <SectionLabel n="05">{m.label}</SectionLabel>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {m.title}
          </h2>
          <p className="mt-5 font-body text-white/55">{m.sub}</p>
        </motion.div>

        <div className="flex flex-col gap-14">
          {m.categories.map((cat, ci) => {
            const Icon = CATEGORY_ICONS[ci];
            return (
              <div key={cat.title}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 flex items-center gap-2.5"
                >
                  <Icon className="h-4 w-4 text-signal" strokeWidth={1.5} />
                  <h3 className="font-mono text-[12px] uppercase tracking-widest2 text-white/50">
                    {cat.title}
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                      className="bg-ink p-6 transition-colors duration-300 hover:bg-white/[0.03]"
                    >
                      <p className="font-display text-[15px] font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="mt-1.5 font-body text-[13px] leading-relaxed text-white/50">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

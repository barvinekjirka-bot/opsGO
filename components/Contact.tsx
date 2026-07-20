"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const { t } = useLang();
  const c = t.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to your form handler / CRM endpoint here.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel n="10">{c.label}</SectionLabel>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              {c.title}
            </h2>
            <p className="mt-5 max-w-md font-body text-white/55">{c.sub}</p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="#"
                className="liquid-glass flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/[0.04]"
              >
                <span className="flex items-center gap-3 font-body text-sm text-white/80">
                  <Calendar className="h-4 w-4 text-signal" />
                  {c.bookCall}
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </a>
              <a
                href={`mailto:${c.email}`}
                className="liquid-glass flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/[0.04]"
              >
                <span className="flex items-center gap-3 font-body text-sm text-white/80">
                  <Mail className="h-4 w-4 text-signal" />
                  {c.email}
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </a>
              <a
                href="#"
                className="liquid-glass flex items-center justify-between rounded-2xl p-5 transition-colors hover:bg-white/[0.04]"
              >
                <span className="flex items-center gap-3 font-body text-sm text-white/80">
                  <Linkedin className="h-4 w-4 text-signal" />
                  {c.linkedin}
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="liquid-glass rounded-3xl p-8"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="h-2 w-2 animate-pulseSignal rounded-full bg-signal" />
                <p className="mt-5 font-display text-lg font-semibold text-white">
                  {c.form.sentTitle}
                </p>
                <p className="mt-2 font-body text-sm text-white/50">
                  {c.form.sentSub}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest2 text-white/40">
                      {c.form.name}
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 font-body text-sm text-white placeholder:text-white/25 focus:border-signal/50"
                      placeholder={c.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest2 text-white/40">
                      {c.form.company}
                    </label>
                    <input
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 font-body text-sm text-white placeholder:text-white/25 focus:border-signal/50"
                      placeholder={c.form.companyPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest2 text-white/40">
                    {c.form.email}
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 font-body text-sm text-white placeholder:text-white/25 focus:border-signal/50"
                    placeholder={c.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest2 text-white/40">
                    {c.form.message}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-line bg-white/[0.02] px-4 py-3 font-body text-sm text-white placeholder:text-white/25 focus:border-signal/50"
                    placeholder={c.form.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-white py-3.5 font-body text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.02]"
                >
                  {c.form.submit}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

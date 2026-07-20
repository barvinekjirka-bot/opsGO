"use client";

import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLang();
  const nf = t.notFound;

  return (
    <main className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-ink px-6">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.05] blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-signal/50 bg-ink font-mono text-lg text-signal shadow-[0_0_16px_0_rgba(255,122,26,0.3)]">
            {nf.label}
          </span>
        </div>

        <h1 className="mt-8 max-w-lg text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {nf.title}
        </h1>
        <p className="mt-4 max-w-md text-balance font-body text-sm leading-relaxed text-white/55">
          {nf.text}
        </p>

        <a
          href="/"
          className="mt-9 flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-body text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.04]"
        >
          {nf.cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </main>
  );
}

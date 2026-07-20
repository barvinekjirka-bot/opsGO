"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { Lang } from "@/lib/copy";

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const options: Lang[] = ["cs", "en"];

  return (
    <div
      className={`flex items-center overflow-hidden rounded-full border border-line font-mono text-[11px] uppercase tracking-wide ${className}`}
    >
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={`px-2.5 py-1.5 transition-colors duration-300 ${
            lang === opt
              ? "bg-white/[0.08] text-signal"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          {opt === "cs" ? "CZ" : "EN"}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[94%] max-w-6xl -translate-x-1/2 md:top-6">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`liquid-glass flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <a href="#top" className="flex items-baseline gap-0.5">
            <span className="font-display text-[16px] font-semibold tracking-tight text-white">
              ZlepsimeTo
            </span>
            <span className="h-[5px] w-[5px] rounded-full bg-signal shadow-[0_0_10px_2px_rgba(255,122,26,0.55)]" />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-body text-[13px] font-medium text-white/60 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LangToggle />
            <a
              href="#contact"
              className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-body text-[13px] font-semibold text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              {t.nav.cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LangToggle />
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="liquid-glass mt-2 overflow-hidden rounded-2xl md:hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                {t.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 font-body text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-white px-4 py-2.5 text-center font-body text-sm font-semibold text-ink"
                >
                  {t.nav.cta}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

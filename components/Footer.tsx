"use client";

import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="w-full border-t border-line bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-baseline gap-0.5">
          <span className="font-display text-sm font-semibold text-white">
            OpsGo
          </span>
          <span className="h-[4px] w-[4px] rounded-full bg-signal" />
        </div>
        <p className="font-mono text-[11px] text-white/30">
          © {new Date().getFullYear()} OpsGo. {t.footer.tagline}
        </p>
        <div className="flex gap-6 font-body text-[13px] text-white/40">
          <a href="#" className="transition-colors hover:text-white">{t.footer.privacy}</a>
          <a href="#" className="transition-colors hover:text-white">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}

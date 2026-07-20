"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { copy, type Copy, type Lang } from "./copy";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("cs");

  useEffect(() => {
    const stored = window.localStorage.getItem("zlepsimeto-lang");
    if (stored === "cs" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("zlepsimeto-lang", next);
    document.documentElement.lang = next;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: copy[lang] as Copy }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

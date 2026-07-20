import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  IBM_Plex_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpsGo — Výsledky, ne prezentace.",
  description:
    "OpsGo je butikové provozní poradenství pro supply chain, sklady a plánování. Provozy jsme sami vedli — proto je umíme opravit. Měřitelné výsledky, ne prezentace.",
  keywords: [
    "provozní poradenství",
    "supply chain consulting",
    "optimalizace skladu",
    "provozní audit",
    "ERP stabilizace",
    "plánování výroby",
  ],
  openGraph: {
    title: "OpsGo — Výsledky, ne prezentace.",
    description: "Najdeme, kde váš provoz ztrácí peníze.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-ink text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

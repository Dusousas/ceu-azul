"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLocaleFromPathname,
  switchLocaleInPathname,
} from "@/lib/i18n";

const localeLabels = {
  "pt-BR": "Selecionar idioma",
  "es-ES": "Seleccionar idioma",
  "en-US": "Select language",
} as const;

const flags = [
  { locale: "pt-BR", src: "/br.png", alt: "Brasil" },
  { locale: "es-ES", src: "/es.png", alt: "España" },
  { locale: "en-US", src: "/usa.png", alt: "USA" },
] as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <div className="flex items-center gap-2" aria-label={localeLabels[currentLocale]}>
      {flags.map((flag) => {
        const isActive = flag.locale === currentLocale;

        return (
          <Link
            key={flag.locale}
            href={switchLocaleInPathname(pathname, flag.locale)}
            className={`overflow-hidden border transition ${
              isActive
                ? "border-white shadow-[0_0_0_2px_rgba(255,255,255,0.3)]"
                : "border-white/40 hover:border-white/80"
            }`}
            aria-label={flag.alt}
          >
            <img src={flag.src} alt={flag.alt} className="h-4 w-7 object-cover" />
          </Link>
        );
      })}
    </div>
  );
}

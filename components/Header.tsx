"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname, localizedPath } from "@/lib/i18n";
import Navbar from "./subc/Navbar";
import LanguageSwitcher from "./subc/LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <header className="z-30 absolute w-full">
      {/* Backdrop blur isolado em uma pseudo-layer para nao criar stacking context nos filhos fixed. */}
      <div className="absolute inset-0 backdrop-blur-[6px] border-b border-white pointer-events-none" />

      <div className="relative flex justify-between py-2 w-full items-center px-4 lg:px-20">
        <a href={localizedPath(locale)}>
          <img
            className="w-[80px]"
            src="/logo.png"
            alt="Logo da Serraria Céu Azul"
          />
        </a>

        <div className="flex items-center gap-4">
          <Navbar />

          <div className="absolute top-2 right-6">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

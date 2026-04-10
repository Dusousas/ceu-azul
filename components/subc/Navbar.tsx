"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLocaleFromPathname, localizedPath } from "@/lib/i18n";

const messages = {
  "pt-BR": {
    home: "Início",
    about: "Sobre Nós",
    numbers: "Nossos Números",
    testimonials: "Depoimentos",
    contact: "Contato",
    menu: "Menu",
    close: "Fechar",
  },
  "es-ES": {
    home: "Inicio",
    about: "Sobre Nosotros",
    numbers: "Nuestros Números",
    testimonials: "Testimonios",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
  },
  "en-US": {
    home: "Home",
    about: "About",
    numbers: "Our Numbers",
    testimonials: "Testimonials",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
  },
} as const;

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = messages[locale];
  const homePath = localizedPath(locale);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setMounted(true));
    } else {
      setMounted(false);
    }
  }, [isOpen]);

  const goTo = (id: string) => {
    setIsOpen(false);
    if (pathname === homePath) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    sessionStorage.setItem("scrollTo", id);
    router.push(homePath);
  };

  const navItems = [
    { label: content.home, href: homePath },
    { label: content.about, id: "sobre-nos" },
    { label: content.numbers, id: "numeros" },
    { label: content.testimonials, id: "depoimentos" },
    { label: content.contact, id: "contato" },
  ];

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="font-Jost font-medium text-white flex gap-4 uppercase tracking-wider">
          <li>
            <a href={homePath}>{content.home}</a>
          </li>
          <li>
            <button type="button" onClick={() => goTo("sobre-nos")} className="hover:opacity-90 uppercase cursor-pointer">
              {content.about}
            </button>
          </li>
          <li>
            <button type="button" onClick={() => goTo("numeros")} className="hover:opacity-90 uppercase cursor-pointer">
              {content.numbers}
            </button>
          </li>
          <li>
            <button type="button" onClick={() => goTo("depoimentos")} className="hover:opacity-90 uppercase cursor-pointer">
              {content.testimonials}
            </button>
          </li>
          <li>
            <button type="button" onClick={() => goTo("contato")} className="hover:opacity-90 uppercase cursor-pointer">
              {content.contact}
            </button>
          </li>
        </ul>
      </nav>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/15"
          aria-label={content.menu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
          </span>
        </button>

        {isOpen && (
          <>
            <div
              className={`fixed inset-0 z-[998] bg-black/40 transition-opacity duration-300 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={content.menu}
              style={{ backgroundColor: "#0E2A47" }}
              className={`fixed inset-y-0 right-0 z-[999] w-full max-w-[320px] text-white shadow-2xl opacity-100
                transition-transform duration-300 ease-out
                ${mounted ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="flex h-full flex-col px-6 py-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <p className="font-Barlow uppercase tracking-[0.18em] text-sm text-white/70">
                    {content.menu}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full border border-white/15 px-3 py-1 text-sm font-Jost text-white/80 transition hover:bg-white/10"
                  >
                    {content.close}
                  </button>
                </div>

                <nav className="flex flex-col gap-2 pt-8">
                  {navItems.map((item) =>
                    item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 font-Jost text-lg uppercase tracking-wider text-white/95 transition hover:bg-white/10 active:scale-[0.98]"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => goTo(item.id!)}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left font-Jost text-lg uppercase tracking-wider text-white/95 transition hover:bg-white/10 active:scale-[0.98]"
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const goTo = (id: string) => {
    // se já estiver na home, só rola
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // se estiver em outra página, salva o destino e volta pra home
    sessionStorage.setItem("scrollTo", id);
    router.push("/");
  };

  return (
    <nav className="hidden lg:block">
      <ul className="font-Jost font-medium text-white flex gap-4 uppercase tracking-wider">
        <li>
          <a href="/">Inicio</a>
        </li>

        <li>
          <button
            type="button"
            onClick={() => goTo("sobre-nos")}
            className="hover:opacity-90 uppercase cursor-pointer"
          >
            Sobre Nós
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => goTo("numeros")}
            className="hover:opacity-90 uppercase cursor-pointer"
          >
            Nossos Números
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => goTo("depoimentos")}
            className="hover:opacity-90 uppercase cursor-pointer"
          >
            Depoimentos
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => goTo("contato")}
            className="hover:opacity-90 uppercase cursor-pointer"
          >
            Contato
          </button>
        </li>
      </ul>
    </nav>
  );
}

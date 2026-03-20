"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n";

export default function Footer() {
  const locale = getLocaleFromPathname(usePathname());
  const text =
    locale === "pt-BR" ? "Todos os direitos reservados" : "All rights reserved";

  return (
    <footer className="bg-AzulS py-6">
      <div className="maxW">
        <p className="text-center text-white">{text}</p>
      </div>
    </footer>
  );
}

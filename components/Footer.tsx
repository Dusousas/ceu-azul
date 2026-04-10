"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n";

export default function Footer() {
  const locale = getLocaleFromPathname(usePathname());
  const content =
    locale === "pt-BR"
      ? {
          brandTitle: "Céu Azul",
          brandDescription:
            "Madeira com consistência, confiança operacional e responsabilidade ambiental.",
          rights: "Todos os direitos reservados.",
          contactTitle: "Contato rápido",
          structureTitle: "Estrutura",
          contactItems: [
            "WhatsApp: +55 47 99731-6610",
            "Email: jonatan.souza@elopack.ind.br",
            "Telefone: (14) 3656-3014",
          ],
          structureItems: [
            "Escritório em São Paulo, SP",
            "Escritório em Torrinha, SP",
            "Centro de Distribuição em Limeira, SP",
            "1 Fábrica de processamento de madeira no estado do Paraná",
            "1 Fábrica Pet food em Limeira, SP",
            "4 Fábricas Elopack localizadas em Itararé (BA), Salto (SP), Torrinha (SP) e (SP)",
            "Florestas privadas no estado de São Paulo",
          ],
        }
      : {
          brandTitle: "Ceu Azul",
          brandDescription:
            "Timber with consistency, operational reliability, and environmental responsibility.",
          rights: "All rights reserved.",
          contactTitle: "Quick contact",
          structureTitle: "Structure",
          contactItems: [
            "WhatsApp: +55 47 99731-6610",
            "Email: jonatan.souza@elopack.ind.br",
            "Phone: (14) 3656-3014",
          ],
          structureItems: [
            "Office in São Paulo, SP",
            "Office in Torrinha, SP",
            "Distribution Center in Limeira, SP",
            "1 wood processing plant in the state of Paraná",
            "1 pet food plant in Limeira, SP",
            "4 Elopack plants located in Itararé (BA), Salto (SP), Torrinha (SP), and (SP)",
            "Private forests in the state of São Paulo",
          ],
        };

  return (
    <footer className="bg-AzulS py-8">
      <div className="maxW">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-6">
          <div>
            <p className="font-Barlow uppercase text-white font-bold text-xl">
              {content.brandTitle}
            </p>
            <p className="font-Jost text-white/75 mt-3 leading-relaxed">
              {content.brandDescription}
            </p>
          </div>

          <div>
            <p className="font-Barlow uppercase text-white font-semibold">
              {content.contactTitle}
            </p>
            <ul className="mt-3 space-y-2">
              {content.contactItems.map((item) => (
                <li
                  key={item}
                  className="font-Jost text-white/80 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-Barlow uppercase text-white font-semibold">
              {content.structureTitle}
            </p>
            <ul className="mt-3 space-y-1">
              {content.structureItems.map((item) => (
                <li
                  key={item}
                  className="font-Jost text-white/80 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-white/70 text-sm mt-5">{content.rights}</p>
      </div>
    </footer>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { type Locale } from "@/lib/i18n";

type ProgressItem = {
  label: string;
  value: number;
  text: string;
};

const messages = {
  "pt-BR": {
    kicker: "Nossos numeros",
    title: "Capacidade e controle de processo para entregar com confianca",
    description:
      "Nossa operacao e integrada e focada em padronizacao, controle de umidade e rastreabilidade. Atuamos no mercado interno e tambem exportamos, mantendo consistencia e qualidade em cada lote.",
    supportText:
      "Estrutura, pessoas e processo - para sustentar crescimento com responsabilidade.",
    cta: "Entrar em contato",
    note: "*Valores podem variar conforme disponibilidade e demanda.",
    progress: [
      { label: "Mercado interno", value: 70, text: "70%" },
      { label: "Exportacao", value: 30, text: "30%" },
      { label: "Alta capacidade", value: 100, text: "5.000 m3/mes" },
      { label: "Controle de umidade", value: 100, text: "12% (+/- 2%)" },
      { label: "Paises atendidos", value: 100, text: "10+ paises" },
      { label: "Colaboradores", value: 100, text: "350+ pessoas" },
      { label: "Meta 2025", value: 100, text: "300 m3/dia" },
    ] as ProgressItem[],
  },
  "en-US": {
    kicker: "Our numbers",
    title: "Capacity and process control for reliable delivery",
    description:
      "Our operation is integrated and focused on standardization, moisture control, and traceability. We serve the domestic market and also export, maintaining consistency and quality in every batch.",
    supportText: "Structure, people, and process - sustaining growth responsibly.",
    cta: "Get in touch",
    note: "*Values may vary according to availability and demand.",
    progress: [
      { label: "Domestic market", value: 70, text: "70%" },
      { label: "Exports", value: 30, text: "30%" },
      { label: "High capacity", value: 100, text: "5,000 m3/month" },
      { label: "Moisture control", value: 100, text: "12% (+/- 2%)" },
      { label: "Countries served", value: 100, text: "10+ countries" },
      { label: "Employees", value: 100, text: "350+ people" },
      { label: "2025 target", value: 100, text: "300 m3/day" },
    ] as ProgressItem[],
  },
} as const;

function ProgressBar({ label, value, text }: ProgressItem) {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFill(value), 120);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div>
      <p className="font-Jost text-white mb-1">{label}</p>
      <div className="w-full bg-GrayP/60 h-5 overflow-hidden">
        <div
          className="flex items-center h-5 bg-AzulC transition-[width] duration-1000 ease-out"
          style={{ width: `${fill}%` }}
        >
          <p className="pl-4 text-sm text-Orange font-semibold whitespace-nowrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Production({ locale }: { locale: Locale }) {
  const content = messages[locale];

  return (
    <section id="numeros" className="py-30 bgProduction relative">
      <div className="absolute inset-0 bg-AzulP/95 pointer-events-none" />

      <div className="maxW relative flex flex-col items-center z-10 text-white gap-16 lg:flex-row">
        <article className="lg:w-1/2">
          <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
            {content.kicker}
          </p>

          <h2 className="font-Barlow mt-4 uppercase font-bold text-white lg:max-w-[680px] lg:text-5xl">
            {content.title}
          </h2>

          <p className="mt-4 font-Jost text-white/90 leading-relaxed">
            {content.description}
          </p>

          <p className="mt-4 font-Jost text-white/80 leading-relaxed">
            {content.supportText}
          </p>

          <div className="border border-AzulC w-[200px] mt-8" />

          <div className="mt-9 flex">
            <a
              className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
              href="#contato"
            >
              {content.cta}
            </a>
          </div>

          <p className="mt-4 font-Jost text-white/70 text-sm">{content.note}</p>
        </article>

        <article className="w-full lg:w-1/2 space-y-5">
          {content.progress.map((item) => (
            <ProgressBar key={item.label} {...item} />
          ))}
        </article>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { type Locale } from "@/lib/i18n";

type ProgressItem = {
  label: string;
  value: number;
  text: string;
  fillClassName?: string;
  textClassName?: string;
};

const messages = {
  "pt-BR": {
    kicker: "Nossos números",
    title: "Capacidade e controle de processo para entregar com confiança",
    description:
      "Nossa operação é integrada e focada em padronização, controle de umidade e rastreabilidade. Atuamos no mercado interno e também exportamos, mantendo consistência e qualidade em cada lote.",
    supportText:
      "Estrutura, pessoas e processo, para sustentar o crescimento com responsabilidade.",
    forestCardTitle: "Floresta privada e gerenciada de maneira sustentável - Eloforest.",
    forestBenefitsTitle: "Benefícios aos clientes:",
    forestBenefits: [
      "Melhor estabilidade de preços",
      "Menor risco de falta e ruptura de abastecimento",
      "Flexibilidade nas negociações",
      "Melhor segurança na rastreabilidade",
    ],
    cta: "Entrar em contato",
    note: "*Valores podem variar conforme disponibilidade e demanda.",
    progress: [
      {
        label: "Floresta própria",
        value: 50,
        text: "50%",
        fillClassName: "bg-emerald-400",
        textClassName: "text-emerald-950",
      },
      { label: "Mercado interno", value: 70, text: "70%" },
      { label: "Exportação", value: 30, text: "30%" },
      { label: "Alta capacidade", value: 100, text: "5.000 m3/mês" },
      { label: "Controle de umidade", value: 100, text: "12% (+/- 2%)" },
      { label: "Países atendidos", value: 100, text: "10+ países" },
      { label: "Colaboradores", value: 100, text: "350+ pessoas" },
      { label: "Meta 2025", value: 100, text: "300 m3/dia" },
    ] as ProgressItem[],
  },
  "es-ES": {
    kicker: "Nuestros números",
    title: "Capacidad y control de proceso para entregar con confianza",
    description:
      "Nuestra operación es integrada y está enfocada en estandarización, control de humedad y trazabilidad. Actuamos en el mercado interno y también exportamos, manteniendo consistencia y calidad en cada lote.",
    supportText:
      "Estructura, personas y proceso, para sostener el crecimiento con responsabilidad.",
    forestCardTitle: "Bosque privado y gestionado de manera sostenible - Eloforest.",
    forestBenefitsTitle: "Beneficios para los clientes:",
    forestBenefits: [
      "Mejor estabilidad de precios",
      "Menor riesgo de falta y ruptura de abastecimiento",
      "Flexibilidad en las negociaciones",
      "Mayor seguridad en la trazabilidad",
    ],
    cta: "Ponerse en contacto",
    note: "*Los valores pueden variar según disponibilidad y demanda.",
    progress: [
      {
        label: "Bosque propio",
        value: 50,
        text: "50%",
        fillClassName: "bg-emerald-400",
        textClassName: "text-emerald-950",
      },
      { label: "Mercado interno", value: 70, text: "70%" },
      { label: "Exportación", value: 30, text: "30%" },
      { label: "Alta capacidad", value: 100, text: "5.000 m3/mes" },
      { label: "Control de humedad", value: 100, text: "12% (+/- 2%)" },
      { label: "Países atendidos", value: 100, text: "10+ países" },
      { label: "Colaboradores", value: 100, text: "350+ personas" },
      { label: "Meta 2025", value: 100, text: "300 m3/día" },
    ] as ProgressItem[],
  },
  "en-US": {
    kicker: "Our numbers",
    title: "Capacity and process control for reliable delivery",
    description:
      "Our operation is integrated and focused on standardization, moisture control, and traceability. We serve the domestic market and also export, maintaining consistency and quality in every batch.",
    supportText: "Structure, people, and process, sustaining growth responsibly.",
    forestCardTitle: "Private forest managed sustainably - Eloforest.",
    forestBenefitsTitle: "Client benefits:",
    forestBenefits: [
      "Better price stability",
      "Lower risk of shortage and supply disruption",
      "More flexibility in negotiations",
      "Greater security in traceability",
    ],
    cta: "Get in touch",
    note: "*Values may vary according to availability and demand.",
    progress: [
      {
        label: "Owned forest",
        value: 50,
        text: "50%",
        fillClassName: "bg-emerald-400",
        textClassName: "text-emerald-950",
      },
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

function ProgressBar({
  label,
  value,
  text,
  fillClassName,
  textClassName,
}: ProgressItem) {
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
          className={`flex items-center h-5 transition-[width] duration-1000 ease-out ${
            fillClassName ?? "bg-AzulC"
          }`}
          style={{ width: `${fill}%` }}
        >
          <p
            className={`pl-4 text-sm font-bold uppercase whitespace-nowrap ${
              textClassName ?? "text-Orange"
            }`}
          >
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

          <div className="mt-6 rounded-3xl border border-emerald-300/25 bg-white/8 backdrop-blur-sm p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <p className="font-Barlow uppercase text-lg text-emerald-300 font-bold leading-snug">
              {content.forestCardTitle}
            </p>
            <p className="mt-4 font-Jost font-semibold text-white">
              {content.forestBenefitsTitle}
            </p>
            <ul className="mt-3 space-y-2">
              {content.forestBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 font-Jost text-white/90 leading-relaxed"
                >
                  <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

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

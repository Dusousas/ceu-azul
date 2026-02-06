"use client";

import React, { useEffect, useMemo, useState } from "react";

type ProgressItem = {
  label: string;
  value: number;
  text: string;
};

const progressData: ProgressItem[] = [
  { label: "Mercado interno", value: 70, text: "70%" },
  { label: "Exportação", value: 30, text: "30%" },
  { label: "Alta capacidade", value: 100, text: "5.000 m³/mês" },
  { label: "Controle de umidade", value: 100, text: "12% (+/- 2%)" },
  { label: "Países atendidos", value: 100, text: "10+ países" },
  { label: "Colaboradores", value: 100, text: "350+ pessoas" },
  // Se quiser manter metas:
  { label: "Meta 2025", value: 100, text: "300 m³/dia" },
];

function splitNumberAndSuffix(raw: string) {
  const match = raw.match(/(\d[\d.,+]*)/);
  if (!match) return { num: null as number | null, suffix: raw };

  const numPart = match[1].replace("+", "");
  const suffix = raw.replace(match[1], "").trim();

  const cleaned = numPart.replace(/\./g, "").replace(",", ".");
  const parsed = Number(cleaned);

  if (Number.isNaN(parsed)) return { num: null as number | null, suffix: raw };
  return { num: parsed, suffix };
}

function formatNumberPTBR(n: number) {
  return new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 }).format(n);
}

function ProgressBar({ label, value, text }: ProgressItem) {
  const [fill, setFill] = useState(0);
  const [displayText, setDisplayText] = useState(text);

  const parsed = useMemo(() => splitNumberAndSuffix(text), [text]);

  useEffect(() => {
    const t = setTimeout(() => setFill(value), 120);
    return () => clearTimeout(t);
  }, [value]);

  useEffect(() => {
    if (parsed.num === null) {
      setDisplayText(text);
      return;
    }

    const duration = 900;
    const start = performance.now();
    const target = parsed.num;

    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = Math.round(target * eased);

      const isPercent = /%/.test(text);
      const hasPlus = /\+/.test(text);

      const numberStr = isPercent ? String(current) : formatNumberPTBR(current);
      const suffixStr = parsed.suffix ? ` ${parsed.suffix}` : "";

      if (isPercent) setDisplayText(`${numberStr}%`);
      else setDisplayText(`${numberStr}${hasPlus ? "+" : ""}${suffixStr}`);

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    setDisplayText(
      /%/.test(text) ? "0%" : `0${parsed.suffix ? ` ${parsed.suffix}` : ""}`
    );

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, parsed.num, parsed.suffix]);

  return (
    <div>
      <p className="font-Jost text-white mb-1">{label}</p>

      <div className="w-full bg-GrayP/60 h-5 overflow-hidden">
        <div
          className="flex items-center h-5 bg-AzulC transition-[width] duration-1000 ease-out"
          style={{ width: `${fill}%` }}
        >
          <p className="pl-4 text-sm text-Orange font-semibold whitespace-nowrap">
            {displayText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Production() {
  return (
    <>
      <section id="numeros" className="py-30 bgProduction relative">
        <div className="absolute inset-0 bg-AzulP/95 pointer-events-none" />

        <div className="maxW relative flex flex-col items-center z-10 text-white gap-16 lg:flex-row">
          {/* LEFT TEXT */}
          <article className="lg:w-1/2">
            <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
              Nossos números
            </p>

            <h2 className="font-Barlow mt-4 uppercase font-bold text-white lg:max-w-[680px] lg:text-5xl">
              Capacidade e controle de processo para entregar com confiança
            </h2>

            <p className="mt-4 font-Jost text-white/90 leading-relaxed">
              Nossa operação é integrada e focada em padronização, controle de
              umidade e rastreabilidade. Atuamos no mercado interno e também
              exportamos, mantendo consistência e qualidade em cada lote.
            </p>

            <p className="mt-4 font-Jost text-white/80 leading-relaxed">
              Estrutura, pessoas e processo — para sustentar crescimento com
              responsabilidade.
            </p>

            <div className="border border-AzulC w-[200px] mt-8" />

            <div className="mt-9 flex">
              <a
                className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                href="#contato"
              >
                Entrar em contato
              </a>
            </div>

            <p className="mt-4 font-Jost text-white/70 text-sm">
              *Valores podem variar conforme disponibilidade e demanda.
            </p>
          </article>

          {/* PROGRESSOS */}
          <article className="w-full lg:w-1/2 space-y-5">
            {progressData.map((item) => (
              <ProgressBar
                key={item.label}
                label={item.label}
                value={item.value}
                text={item.text}
              />
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

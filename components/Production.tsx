"use client";

import React, { useEffect, useMemo, useState } from "react";

type ProgressItem = {
  label: string;
  value: number; // porcentagem (0–100)
  text: string; // ex: "70%", "7.000 m³/mês", "100 m³/dia"
};

const progressData: ProgressItem[] = [
  { label: "Mercado interno", value: 70, text: "70%" },
  { label: "Exportação", value: 30, text: "30%" },
  { label: "Produção atual", value: 35, text: "100 m³/dia" },
  { label: "Meta 2025", value: 100, text: "300 m³/dia" },
  { label: "Meta mensal (2025)", value: 100, text: "7.000 m³/mês" },
  { label: "Produção anual", value: 100, text: "84.000 m³/ano" },
  { label: "Colaboradores", value: 100, text: "XX pessoas" },
];

function splitNumberAndSuffix(raw: string) {
  // pega o primeiro bloco numérico (com . ou ,) e o resto como sufixo
  const match = raw.match(/(\d[\d.,]*)/);
  if (!match) return { num: null as number | null, suffix: raw };

  const numPart = match[1];
  const suffix = raw.replace(numPart, "").trim();

  // "7.000" -> 7000 / "84.000" -> 84000 / "70" -> 70
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
    // anima a barra (0 -> value)
    const t = setTimeout(() => setFill(value), 120);
    return () => clearTimeout(t);
  }, [value]);

  useEffect(() => {
    // anima o número (0 -> alvo) se conseguir extrair número do "text"
    if (parsed.num === null) {
      setDisplayText(text);
      return;
    }

    const duration = 900; // ms
    const start = performance.now();
    const target = parsed.num;

    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easing suave
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = Math.round(target * eased);

      // se for porcentagem, mantém como "70%"
      const isPercent = /%/.test(text);

      const numberStr = isPercent ? String(current) : formatNumberPTBR(current);
      const suffixStr = parsed.suffix ? ` ${parsed.suffix}` : "";

      setDisplayText(isPercent ? `${numberStr}%` : `${numberStr}${suffixStr}`);

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    // inicia zerado visualmente
    setDisplayText(/%/.test(text) ? "0%" : `0${parsed.suffix ? ` ${parsed.suffix}` : ""}`);

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
      <section className="py-30 bgProduction relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-AzulP/95 pointer-events-none" />

        <div className="maxW relative flex flex-col items-center z-10 text-white gap-20 lg:flex-row">
          {/* LEFT TEXT */}
          <article className="lg:w-1/2">
            <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
              Nossos números
            </p>

            <h2 className="font-Barlow mt-4 uppercase font-bold text-white lg:max-w-[600px] lg:text-5xl">
              Capacidade, crescimento e performance em produção
            </h2>

            <p className="mt-4 font-Jost">
              A Serraria Céu Azul atua no setor madeireiro em Itararé/SP e integra o
              Grupo Elopack. Nossa operação é focada em eficiência, rastreabilidade
              e evolução constante, com metas claras para 2025.
            </p>

            <p className="mt-4 font-Jost text-white/85">
              Hoje, 70% da atuação é no mercado interno e 30% para exportação. A produção
              parte de 100 m³/dia e tem como objetivo chegar a 300 m³/dia, com 7.000 m³
              mensais ao final de 2025.
            </p>

            <div className="border border-AzulC w-[200px] mt-8" />

            <div className="mt-9 flex">
              <a
                className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                href=""
              >
                Entrar em contato
              </a>
            </div>

            <p className="mt-4 font-Jost text-white/70 text-sm">
              *Produção anual estimada com base na meta mensal (7.000 m³/mês).
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

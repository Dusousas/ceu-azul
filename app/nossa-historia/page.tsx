"use client";

import React, { useMemo, useState } from "react";

export default function Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = useMemo(
    () => [
      { label: "Início das operações", value: "2023" },
      { label: "Experiência do grupo", value: "30+ anos" },
      { label: "Compromisso", value: "Qualidade • Ética • Sustentabilidade" },
    ],
    [],
  );

  return (
    <div className="">
      {/* HERO */}
      <section className="bg-AzulP flex items-center">
        <div className="bgMain1 w-full py-20 mt-[120px]">
          <div className="maxW z-10 text-white top-[56px] py-16 lg:py-24">
            <div className="max-w-[980px]">
              <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
                Extraída com cuidado. Entregue com confiança.
              </p>

              <h1 className="font-Barlow uppercase font-bold text-white mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Tradição, tecnologia e responsabilidade no processamento de
                madeira
              </h1>

              <p className="font-Jost mt-6 text-base sm:text-lg lg:w-[80%] text-white/90 leading-relaxed">
                A Serraria Céu Azul nasceu com um propósito claro: transformar
                madeira em soluções confiáveis, mantendo o respeito à floresta,
                às pessoas e ao futuro. Unimos a força da tradição familiar à
                eficiência industrial moderna para entregar produtos
                consistentes, rastreados e de alta qualidade ao mercado nacional
                e internacional.
              </p>

              {/* CTA + micro interactions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/90 text-AzulP px-5 py-3 font-Jost font-medium shadow-sm hover:bg-white transition active:scale-[0.98]"
                >
                  Assistir história
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-AzulP/10">
                    ▶
                  </span>
                </button>

                <a
                  href="#missao"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-Jost font-medium text-white hover:bg-white/15 transition active:scale-[0.98]"
                >
                  Ver missão, visão e valores
                </a>
              </div>

              {/* stats pills */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-5 py-4 hover:bg-white/15 transition"
                  >
                    <p className="font-Jost text-white/70 text-sm">{s.label}</p>
                    <p className="font-Barlow uppercase font-bold text-white text-lg mt-1">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="pt-16 lg:pt-20">
        <div className="maxW">
          {/* Intro text */}
          <div className="lg:w-[82%]">
            <p className="font-Jost text-base sm:text-lg text-GrayP leading-relaxed">
              Atuamos com compromisso com a excelência em todas as etapas do
              nosso processo produtivo — da extração responsável ao produto
              final entregue. Cada decisão é guiada pela ética, pela
              transparência e pela busca contínua por inovação no setor
              madeireiro.
            </p>

            <p className="font-Jost mt-4 text-base sm:text-lg text-GrayP leading-relaxed">
              Nosso modelo de operação é totalmente integrado, garantindo
              controle de qualidade, padronização e confiabilidade. Trabalhamos
              para construir relações sólidas e de longo prazo, oferecendo
              soluções que atendem com precisão às necessidades de cada cliente.
            </p>

            <p className="font-Jost mt-4 text-base sm:text-lg text-GrayP leading-relaxed">
              Mais do que fornecer madeira, entregamos segurança, consistência e
              responsabilidade. É assim que ajudamos a fortalecer projetos,
              negócios e um futuro mais sustentável para toda a cadeia
              produtiva.
            </p>
          </div>

          {/* VIDEO + CARD */}
          <article className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Video card (CAPA = PRÓPRIO VÍDEO) */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white group">
              {/* Vídeo como capa (loop/mudo/sem controles) */}
              <div className="relative w-full h-[280px] sm:h-[360px] overflow-hidden">
                <iframe
                  className="w-full h-full pointer-events-none"
                  src="https://www.youtube.com/embed/hOsLsAphsH8?controls=0&mute=1&loop=1&playlist=hOsLsAphsH8"
                  title="Vídeo institucional Céu Azul"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* overlay para leitura */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* clique abre o modal */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Abrir vídeo"
              >
                <div className="bg-white/85 text-AzulP p-4 rounded-full cursor-pointer shadow-sm hover:bg-white transition active:scale-[0.98]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                  </svg>
                </div>
              </button>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3">
                  <p className="font-Jost text-white/80 text-sm">
                    Clique para assistir
                  </p>
                  <p className="font-Barlow uppercase text-white font-bold">
                    Nossa história & propósito
                  </p>
                </div>
              </div>
            </div>

            {/* Text card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition">
              <h3 className="font-Barlow uppercase text-AzulS font-semibold text-xl">
                Nossa história & propósito
              </h3>

              <p className="font-Jost text-GrayP mt-4 leading-relaxed">
                Um relato que conecta gerações, mostrando como a experiência
                acumulada ao longo de décadas deu origem à Serraria Céu Azul.
                Aqui, tradição familiar, inovação industrial e respeito à
                floresta caminham juntos para sustentar um crescimento sólido e
                responsável.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="rounded-xl cursor-pointer bg-AzulP text-white px-5 py-3 font-Jost font-medium hover:opacity-90 transition active:scale-[0.98]"
                >
                  Abrir vídeo
                </button>
              </div>
            </div>
          </article>

          {/* Missão Visão Valores */}
          <section
            id="missao"
            className="mt-20 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="font-Barlow uppercase text-GrayP font-bold text-2xl sm:text-3xl">
                Missão, Visão e Valores da Céu Azul
              </h2>

              <div className="flex gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-Jost text-GrayP">
                  Ética
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-Jost text-GrayP">
                  Sustentabilidade
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-Jost text-GrayP">
                  Qualidade
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-Jost text-GrayP">
                  Transparência
                </span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Missão */}
              <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition">
                <h4 className="font-Barlow text-AzulS uppercase font-semibold">
                  Missão
                </h4>
                <p className="font-Jost text-GrayP mt-4 leading-relaxed">
                  Fornecer produtos madeireiros de alta qualidade com
                  consistência, rastreabilidade e responsabilidade ambiental,
                  atuando com eficiência operacional, ética e compromisso com
                  prazos e resultados.
                </p>
              </div>

              {/* Visão */}
              <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition">
                <h4 className="font-Barlow text-AzulS uppercase font-semibold">
                  Visão
                </h4>
                <p className="font-Jost text-GrayP mt-4 leading-relaxed">
                  Ser reconhecida como uma referência nacional e internacional
                  no fornecimento de madeira, construindo relações de confiança,
                  fortalecendo o setor madeireiro e promovendo práticas
                  sustentáveis de longo prazo.
                </p>
              </div>

              {/* Valores */}
              <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition">
                <h4 className="font-Barlow text-AzulS uppercase font-semibold">
                  Valores
                </h4>
                <ul className="font-Jost text-GrayP mt-4 space-y-3">
                  {[
                    [
                      "Integridade e confiança",
                      "Agimos com transparência, responsabilidade e respeito em todas as relações.",
                    ],
                    [
                      "Inovação com responsabilidade",
                      "Buscamos soluções eficientes sem abrir mão do compromisso ambiental.",
                    ],
                    [
                      "Profissionalismo e ética",
                      "Excelência operacional, padronização e respeito aos nossos clientes e parceiros.",
                    ],
                    [
                      "Compromisso com as pessoas e a sociedade",
                      "Valorizamos nossos colaboradores, a comunidade e o futuro do setor florestal.",
                    ],
                  ].map(([t, d]) => (
                    <li
                      key={t}
                      className="flex gap-3 items-start rounded-xl border border-gray-100 p-3 hover:bg-gray-50 transition"
                    >
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-AzulP" />
                      <div>
                        <p className="font-Jost font-semibold text-GrayP">
                          {t}:<span className="font-normal"> {d}</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* POR QUE NÓS? */}
          <section className="mt-10 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="lg:w-[52%]">
                <h2 className="font-Barlow uppercase text-GrayP font-bold text-2xl sm:text-3xl">
                  Por que a Serraria Céu Azul?
                </h2>

                <p className="font-Jost text-GrayP mt-4 leading-relaxed">
                  Somos uma empresa brasileira, de origem familiar, localizada
                  em Itararé – São Paulo, com mais de{" "}
                  <strong>350 colaboradores</strong>. Atuamos com foco em
                  produtos e serviços confiáveis, combinando escala industrial,
                  tecnologia e controle rigoroso de qualidade para atender
                  mercados exigentes no Brasil e no exterior.
                </p>

                <p className="font-Jost text-GrayP mt-4 leading-relaxed">
                  <strong>Exportamos para mais de 10 países</strong> em todo o
                  mundo, mantendo consistência, credibilidade e responsabilidade
                  ambiental em cada entrega.
                </p>
              </div>

              <div className="lg:w-[44%] grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Expertise na indústria",
                    desc: "Décadas de experiência e parte de um grupo com mais de 30 anos de referência no setor madeireiro.",
                  },
                  {
                    title: "Alta capacidade produtiva",
                    desc: "Mais de 5.000 m³ mensais, com equipamentos de alta tecnologia e processos eficientes.",
                  },
                  {
                    title: "Soluções customizadas",
                    desc: "Atendimento personalizado para diferentes aplicações e mercados.",
                  },
                  {
                    title: "Madeira rastreada",
                    desc: "Compromisso real com origem controlada e responsabilidade ambiental.",
                  },
                ].map((i) => (
                  <div
                    key={i.title}
                    className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition bg-white"
                  >
                    <p className="font-Barlow uppercase font-semibold text-AzulS">
                      {i.title}
                    </p>
                    <p className="font-Jost text-GrayP mt-2 leading-relaxed text-sm">
                      {i.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl overflow-hidden bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="font-Barlow uppercase font-bold text-GrayP">
                Vídeo • Nossa história & propósito
              </p>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="rounded-lg px-3 cursor-pointer py-2 font-Jost text-GrayP hover:bg-gray-50 transition"
              >
                Fechar
              </button>
            </div>

            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hOsLsAphsH8?autoplay=1"
                title="História da Serraria Céu Azul"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

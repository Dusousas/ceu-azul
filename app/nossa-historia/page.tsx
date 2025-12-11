"use client";

import React, { useMemo, useState } from "react";

export default function Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = useMemo(
    () => [
      { label: "Início das atividades", value: "Set/2023" },
      { label: "Experiência do grupo", value: "20+ anos" },
      { label: "Foco", value: "Qualidade & Sustentabilidade" },
    ],
    []
  );

  return (
    <div className="">
      {/* HERO */}
      <section className="bg-AzulP flex items-center">
        <div className="bgMain1 w-full py-20 mt-[120px]">
          <div className="maxW z-10 text-white top-[56px] py-16 lg:py-24">
            <div className="max-w-[980px]">
              <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
                Nossa história vem de família
              </p>

              <h1 className="font-Barlow uppercase font-bold text-white mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Tradição e Inovação no Mercado Madeireiro
              </h1>

              <p className="font-Jost mt-6 text-base sm:text-lg lg:w-[75%] text-white/90 leading-relaxed">
                Bem-vindo à nossa serraria Céu Azul, uma empresa que iniciou
                suas atividades em setembro de 2023 com o objetivo de trazer
                qualidade e inovação ao setor madeireiro. Apesar de sermos novos
                no mercado, nossa história está enraizada na tradição e na
                experiência de um grupo investidor com mais de 20 anos de
                conhecimento e atuação no mercado madeireiro.
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
          {/* Intro text with better rhythm */}
          <div className="lg:w-[82%]">
            <p className="font-Jost text-base sm:text-lg text-GrayP leading-relaxed">
              Combinando a expertise acumulada ao longo de décadas com uma
              abordagem moderna e sustentável, nossa serraria é dedicada a
              fornecer produtos de alta qualidade, atendendo às necessidades e
              expectativas dos nossos clientes. Acreditamos na importância de
              preservar o meio ambiente, e por isso, adotamos práticas
              responsáveis e sustentáveis em todo o nosso processo produtivo.
            </p>

            <p className="font-Jost mt-4 text-base sm:text-lg text-GrayP leading-relaxed">
              Nossa missão é continuar a tradição de excelência no mercado
              madeireiro, oferecendo soluções inovadoras e personalizadas que
              agreguem valor aos projetos. Estamos comprometidos com a
              qualidade, a sustentabilidade e a satisfação dos nossos clientes,
              mantendo sempre os princípios que guiam nosso grupo.
            </p>

            <p className="font-Jost mt-4 text-base sm:text-lg text-GrayP leading-relaxed">
              Descubra como podemos colaborar para o sucesso do seu próximo
              projeto madeireiro. Juntos, vamos construir um futuro mais
              sustentável e próspero no setor da madeira.
            </p>
          </div>

          {/* VIDEO + CARD */}
          <article className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Video card */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white group">
              <img
                src="/pexels-fabian-wiktor-3466355.jpg"
                alt="Caetano contando a história"
                className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-[1.02] transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

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
                    História da Céu Azul
                  </p>
                </div>
              </div>
            </div>

            {/* Text card */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition">
              <h3 className="font-Barlow uppercase text-AzulS font-semibold text-xl">
                Sugestão de vídeo
              </h3>

              <p className="font-Jost text-GrayP mt-4 leading-relaxed">
                Uma ótima opção é um vídeo do Caetano contando a história do
                início do trabalho com madeiras e explicando a importância da
                Céu Azul na continuidade dessa empreitada.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="rounded-xl bg-AzulP text-white px-5 py-3 font-Jost font-medium hover:opacity-90 transition active:scale-[0.98]"
                >
                  Abrir vídeo
                </button>

                <button
                  onClick={() =>
                    alert("Envie a URL/arquivo que eu integro aqui 😉")
                  }
                  className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-Jost font-medium text-GrayP hover:bg-gray-50 transition active:scale-[0.98]"
                >
                  Integrar vídeo (URL/arquivo)
                </button>
              </div>

              <p className="font-Jost text-GrayP mt-4 text-sm">
                (Quando você tiver o link do YouTube/Vimeo ou um arquivo MP4, dá
                pra colocar um player bonito com poster e controles.)
              </p>
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

              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-Jost text-GrayP">
                  Ética
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-Jost text-GrayP">
                  Sustentabilidade
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-Jost text-GrayP">
                  Qualidade
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
                  Nossa missão é fornecer produtos madeireiros de alta
                  qualidade, promovendo práticas sustentáveis e responsáveis que
                  respeitem o meio ambiente. Comprometemo-nos a atender às
                  necessidades dos nossos clientes com ética, transparência e
                  inovação, contribuindo para um futuro mais verde e próspero.
                </p>
              </div>

              {/* Visão */}
              <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition">
                <h4 className="font-Barlow text-AzulS uppercase font-semibold">
                  Visão
                </h4>
                <p className="font-Jost text-GrayP mt-4 leading-relaxed">
                  Ser reconhecida como a referência em qualidade,
                  sustentabilidade e inovação no mercado madeireiro,
                  transformando a indústria através de práticas éticas e
                  transparentes, e estabelecendo parcerias duradouras baseadas
                  na confiança e no respeito mútuo.
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
                      "Ética",
                      "Agimos com integridade, honestidade e respeito.",
                    ],
                    [
                      "Sustentabilidade",
                      "Minimizamos impactos e promovemos uso responsável.",
                    ],
                    [
                      "Transparência",
                      "Relacionamento claro e aberto com todos.",
                    ],
                    ["Qualidade", "Excelência em produtos e serviços."],
                    [
                      "Respeito ao Meio Ambiente",
                      "Conservação e compromisso com o futuro.",
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
                Vídeo • História da Céu Azul
              </p>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="rounded-lg px-3 cursor-pointer py-2 font-Jost text-GrayP hover:bg-gray-50 transition"
              >
                Fechar
              </button>
            </div>

            {/* Troque esse iframe por sua URL real ou por <video controls /> */}
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo"
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

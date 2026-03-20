"use client";

import React, { useState } from "react";
import { type Locale } from "@/lib/i18n";

const messages = {
  "pt-BR": {
    heroKicker: "Extraida com cuidado. Entregue com confianca.",
    heroTitle: "Tradicao, tecnologia e responsabilidade no processamento de madeira",
    heroDescription:
      "A Serraria Ceu Azul nasceu com um proposito claro: transformar madeira em solucoes confiaveis, mantendo o respeito a floresta, as pessoas e ao futuro.",
    watchStory: "Assistir historia",
    seeMission: "Ver missao, visao e valores",
    stats: [
      { label: "Inicio das operacoes", value: "2023" },
      { label: "Experiencia do grupo", value: "30+ anos" },
      { label: "Compromisso", value: "Qualidade • Etica • Sustentabilidade" },
    ],
    intro: [
      "Atuamos com compromisso com a excelencia em todas as etapas do nosso processo produtivo - da extracao responsavel ao produto final entregue.",
      "Nosso modelo de operacao e totalmente integrado, garantindo controle de qualidade, padronizacao e confiabilidade.",
      "Mais do que fornecer madeira, entregamos seguranca, consistencia e responsabilidade.",
    ],
    videoTitle: "Video institucional Ceu Azul",
    clickToWatch: "Clique para assistir",
    storyCardTitle: "Nossa historia e proposito",
    storyCardDescription:
      "Um relato que conecta geracoes, mostrando como a experiencia acumulada ao longo de decadas deu origem a Serraria Ceu Azul.",
    openVideo: "Abrir video",
    sectionTitle: "Missao, Visao e Valores da Ceu Azul",
    tags: ["Etica", "Sustentabilidade", "Qualidade", "Transparencia"],
    missionTitle: "Missao",
    missionText:
      "Fornecer produtos madeireiros de alta qualidade com consistencia, rastreabilidade e responsabilidade ambiental.",
    visionTitle: "Visao",
    visionText:
      "Ser reconhecida como uma referencia nacional e internacional no fornecimento de madeira.",
    valuesTitle: "Valores",
    values: [
      ["Integridade e confianca", "Agimos com transparencia e respeito."],
      ["Inovacao com responsabilidade", "Buscamos solucoes eficientes."],
      ["Profissionalismo e etica", "Excelencia operacional e padronizacao."],
      ["Compromisso com as pessoas", "Valorizamos colaboradores e comunidade."],
    ] as Array<[string, string]>,
    whyTitle: "Por que a Serraria Ceu Azul?",
    whyTextOne:
      "Somos uma empresa brasileira, de origem familiar, localizada em Itarare - Sao Paulo, com mais de 350 colaboradores.",
    whyTextTwo:
      "Exportamos para mais de 10 paises em todo o mundo, mantendo consistencia e responsabilidade ambiental.",
    whyCards: [
      {
        title: "Expertise na industria",
        desc: "Decadas de experiencia e mais de 30 anos de referencia no setor.",
      },
      {
        title: "Alta capacidade produtiva",
        desc: "Mais de 5.000 m3 mensais com equipamentos de alta tecnologia.",
      },
      {
        title: "Solucoes customizadas",
        desc: "Atendimento personalizado para diferentes aplicacoes e mercados.",
      },
      {
        title: "Madeira rastreada",
        desc: "Compromisso real com origem controlada e responsabilidade ambiental.",
      },
    ],
    modalTitle: "Video • Nossa historia e proposito",
    close: "Fechar",
    modalVideoTitle: "Historia da Serraria Ceu Azul",
  },
  "en-US": {
    heroKicker: "Carefully sourced. Reliably delivered.",
    heroTitle: "Tradition, technology, and responsibility in wood processing",
    heroDescription:
      "Ceu Azul Sawmill was born with a clear purpose: transforming timber into reliable solutions while respecting the forest, people, and the future.",
    watchStory: "Watch story",
    seeMission: "See mission, vision, and values",
    stats: [
      { label: "Operations started", value: "2023" },
      { label: "Group experience", value: "30+ years" },
      { label: "Commitment", value: "Quality • Ethics • Sustainability" },
    ],
    intro: [
      "We are committed to excellence at every stage of our production process - from responsible harvesting to the final delivered product.",
      "Our operating model is fully integrated, ensuring quality control, standardization, and reliability.",
      "More than supplying wood, we deliver security, consistency, and responsibility.",
    ],
    videoTitle: "Ceu Azul institutional video",
    clickToWatch: "Click to watch",
    storyCardTitle: "Our story and purpose",
    storyCardDescription:
      "A narrative that connects generations, showing how decades of accumulated experience gave rise to Ceu Azul Sawmill.",
    openVideo: "Open video",
    sectionTitle: "Ceu Azul Mission, Vision, and Values",
    tags: ["Ethics", "Sustainability", "Quality", "Transparency"],
    missionTitle: "Mission",
    missionText:
      "To provide high-quality timber products with consistency, traceability, and environmental responsibility.",
    visionTitle: "Vision",
    visionText:
      "To be recognized as a national and international reference in timber supply.",
    valuesTitle: "Values",
    values: [
      ["Integrity and trust", "We act with transparency and respect."],
      ["Innovation with responsibility", "We pursue efficient solutions."],
      ["Professionalism and ethics", "Operational excellence and standardization."],
      ["Commitment to people", "We value employees and the community."],
    ] as Array<[string, string]>,
    whyTitle: "Why Ceu Azul Sawmill?",
    whyTextOne:
      "We are a Brazilian family-origin company located in Itarare, Sao Paulo, with more than 350 employees.",
    whyTextTwo:
      "We export to more than 10 countries worldwide, maintaining consistency and environmental responsibility.",
    whyCards: [
      {
        title: "Industry expertise",
        desc: "Decades of experience and over 30 years of reference in the sector.",
      },
      {
        title: "High production capacity",
        desc: "More than 5,000 m3 per month with advanced equipment.",
      },
      {
        title: "Customized solutions",
        desc: "Personalized service for different applications and markets.",
      },
      {
        title: "Traceable wood",
        desc: "A real commitment to controlled origin and environmental responsibility.",
      },
    ],
    modalTitle: "Video • Our story and purpose",
    close: "Close",
    modalVideoTitle: "Ceu Azul Sawmill story",
  },
} as const;

export default function HistoryPage({ locale }: { locale: Locale }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const content = messages[locale];

  return (
    <div>
      <section className="bg-AzulP flex items-center">
        <div className="bgMain1 w-full py-20 mt-[120px]">
          <div className="maxW z-10 text-white top-[56px] py-16 lg:py-24">
            <div className="max-w-[980px]">
              <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">{content.heroKicker}</p>
              <h1 className="font-Barlow uppercase font-bold text-white mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight">{content.heroTitle}</h1>
              <p className="font-Jost mt-6 text-base sm:text-lg lg:w-[80%] text-white/90 leading-relaxed">{content.heroDescription}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button onClick={() => setIsVideoOpen(true)} className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/90 text-AzulP px-5 py-3 font-Jost font-medium shadow-sm hover:bg-white transition active:scale-[0.98]">
                  {content.watchStory}
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-AzulP/10">▶</span>
                </button>
                <a href="#missao" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-Jost font-medium text-white hover:bg-white/15 transition active:scale-[0.98]">
                  {content.seeMission}
                </a>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {content.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-5 py-4 hover:bg-white/15 transition">
                    <p className="font-Jost text-white/70 text-sm">{stat.label}</p>
                    <p className="font-Barlow uppercase font-bold text-white text-lg mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 lg:pt-20">
        <div className="maxW">
          <div className="lg:w-[82%]">
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="font-Jost mt-4 first:mt-0 text-base sm:text-lg text-GrayP leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <article className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white group">
              <div className="relative w-full h-[280px] sm:h-[360px] overflow-hidden">
                <iframe className="w-full h-full pointer-events-none" src="https://www.youtube.com/embed/hOsLsAphsH8?controls=0&mute=1&loop=1&playlist=hOsLsAphsH8" title={content.videoTitle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <button onClick={() => setIsVideoOpen(true)} className="absolute inset-0 flex items-center justify-center" aria-label={content.openVideo}>
                <div className="bg-white/85 text-AzulP p-4 rounded-full cursor-pointer shadow-sm hover:bg-white transition active:scale-[0.98]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                  </svg>
                </div>
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3">
                  <p className="font-Jost text-white/80 text-sm">{content.clickToWatch}</p>
                  <p className="font-Barlow uppercase text-white font-bold">{content.storyCardTitle}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition">
              <h3 className="font-Barlow uppercase text-AzulS font-semibold text-xl">{content.storyCardTitle}</h3>
              <p className="font-Jost text-GrayP mt-4 leading-relaxed">{content.storyCardDescription}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button onClick={() => setIsVideoOpen(true)} className="rounded-xl cursor-pointer bg-AzulP text-white px-5 py-3 font-Jost font-medium hover:opacity-90 transition active:scale-[0.98]">
                  {content.openVideo}
                </button>
              </div>
            </div>
          </article>

          <section id="missao" className="mt-20 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h2 className="font-Barlow uppercase text-GrayP font-bold text-2xl sm:text-3xl">{content.sectionTitle}</h2>
              <div className="flex gap-2 flex-wrap">
                {content.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-Jost text-GrayP">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition">
                <h4 className="font-Barlow text-AzulS uppercase font-semibold">{content.missionTitle}</h4>
                <p className="font-Jost text-GrayP mt-4 leading-relaxed">{content.missionText}</p>
              </div>
              <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition">
                <h4 className="font-Barlow text-AzulS uppercase font-semibold">{content.visionTitle}</h4>
                <p className="font-Jost text-GrayP mt-4 leading-relaxed">{content.visionText}</p>
              </div>
              <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition">
                <h4 className="font-Barlow text-AzulS uppercase font-semibold">{content.valuesTitle}</h4>
                <ul className="font-Jost text-GrayP mt-4 space-y-3">
                  {content.values.map(([title, description]) => (
                    <li key={title} className="flex gap-3 items-start rounded-xl border border-gray-100 p-3 hover:bg-gray-50 transition">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-AzulP" />
                      <div>
                        <p className="font-Jost font-semibold text-GrayP">
                          {title}:<span className="font-normal"> {description}</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-10 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="lg:w-[52%]">
                <h2 className="font-Barlow uppercase text-GrayP font-bold text-2xl sm:text-3xl">{content.whyTitle}</h2>
                <p className="font-Jost text-GrayP mt-4 leading-relaxed">{content.whyTextOne}</p>
                <p className="font-Jost text-GrayP mt-4 leading-relaxed">{content.whyTextTwo}</p>
              </div>
              <div className="lg:w-[44%] grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.whyCards.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition bg-white">
                    <p className="font-Barlow uppercase font-semibold text-AzulS">{item.title}</p>
                    <p className="font-Jost text-GrayP mt-2 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsVideoOpen(false)}>
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden bg-white shadow-xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="font-Barlow uppercase font-bold text-GrayP">{content.modalTitle}</p>
              <button onClick={() => setIsVideoOpen(false)} className="rounded-lg px-3 cursor-pointer py-2 font-Jost text-GrayP hover:bg-gray-50 transition">
                {content.close}
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/hOsLsAphsH8?autoplay=1" title={content.modalVideoTitle} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

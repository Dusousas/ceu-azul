"use client";

import React, { useState } from "react";
import { type Locale } from "@/lib/i18n";

const messages = {
  "pt-BR": {
    heroKicker: "Extraída com cuidado. Entregue com confiança.",
    heroTitle: "Tradição, tecnologia e responsabilidade no processamento de madeira",
    heroDescription:
      "A Serraria Céu Azul nasceu com um propósito claro: transformar madeira em soluções confiáveis, mantendo o respeito à floresta, às pessoas e ao futuro.",
    watchStory: "Assistir história",
    seeMission: "Ver missão, visão e valores",
    stats: [
      { label: "Início das operações", value: "2023" },
      { label: "Experiência do grupo", value: "30+ anos" },
      { label: "Compromisso", value: "Qualidade • Ética • Sustentabilidade" },
    ],
    videoTitle: "Vídeo institucional Céu Azul",
    clickToWatch: "Clique para assistir",
    storyCardTitle: "Nossa história e propósito",
    storyCardDescription: [
      "A Serraria Céu Azul é uma empresa de processamento de madeira dedicada ao fornecimento de produtos serrados de alta qualidade. Todo o nosso processo produtivo é totalmente integrado e realizado internamente, desde o corte e secagem até o produto final.",
      "Atuamos com compromisso com a excelência, integrando responsabilidade ambiental, ética e inovação em todas as etapas de nossas operações. Construímos relações transparentes e de longo prazo, contribuindo para o fortalecimento do setor madeireiro e para um futuro mais responsável e sustentável.",
    ],
    openVideo: "Abrir vídeo",
    sectionTitle: "Missão, Visão e Valores da Céu Azul",
    tags: ["Ética", "Sustentabilidade", "Qualidade", "Transparência"],
    missionTitle: "Missão",
    missionTopics: [
      "Consolidar-se como referência de confiança no fornecimento de madeira de alta qualidade.",
      "Desenvolver soluções inovadoras que gerem valor real para nossos clientes.",
      "Atuar com eficiência operacional, confiabilidade e profissionalismo.",
      "Garantir a consistência e a qualidade dos produtos fornecidos.",
      "Honrar os compromissos de entrega com pontualidade.",
      "Conduzir nossas operações com responsabilidade ambiental e respeito aos recursos naturais.",
    ],
    visionTitle: "Visão",
    visionText:
      "Ser reconhecida pelos clientes como uma parceira estratégica, contribuindo para o crescimento econômico de seus negócios e para o desenvolvimento sustentável.",
    valuesTitle: "Valores",
    values: [
      ["Integridade e confiança", "Agimos com transparência e respeito."],
      ["Inovação com responsabilidade", "Buscamos soluções eficientes."],
      ["Profissionalismo e ética", "Excelência operacional e padronização."],
      ["Compromisso com as pessoas", "Valorizamos colaboradores e comunidade."],
    ] as Array<[string, string]>,
    whyTitle: "Por que a Serraria Céu Azul?",
    whyTextOne:
      "Somos uma empresa brasileira, de origem familiar, localizada em Itararé - São Paulo, com mais de 350 colaboradores.",
    whyTextTwo:
      "Exportamos para mais de 10 países em todo o mundo, mantendo consistência e responsabilidade ambiental.",
    whyCards: [
      {
        title: "Expertise na indústria",
        desc: "Décadas de experiência e mais de 30 anos de referência no setor.",
      },
      {
        title: "Alta capacidade produtiva",
        desc: "Mais de 5.000 m3 mensais com equipamentos de alta tecnologia.",
      },
      {
        title: "Soluções customizadas",
        desc: "Atendimento personalizado para diferentes aplicações e mercados.",
      },
      {
        title: "Madeira rastreada",
        desc: "Compromisso real com origem controlada e responsabilidade ambiental.",
      },
    ],
    modalTitle: "Vídeo • Nossa história e propósito",
    close: "Fechar",
    modalVideoTitle: "História da Serraria Céu Azul",
  },
  "es-ES": {
    heroKicker: "Extraída con cuidado. Entregada con confianza.",
    heroTitle: "Tradición, tecnología y responsabilidad en el procesamiento de madera",
    heroDescription:
      "Serraria Céu Azul nació con un propósito claro: transformar madera en soluciones confiables, manteniendo el respeto por el bosque, las personas y el futuro.",
    watchStory: "Ver historia",
    seeMission: "Ver misión, visión y valores",
    stats: [
      { label: "Inicio de las operaciones", value: "2023" },
      { label: "Experiencia del grupo", value: "30+ años" },
      { label: "Compromiso", value: "Calidad • Ética • Sostenibilidad" },
    ],
    videoTitle: "Video institucional Céu Azul",
    clickToWatch: "Haga clic para ver",
    storyCardTitle: "Nuestra historia y propósito",
    storyCardDescription: [
      "Serraria Céu Azul es una empresa de procesamiento de madera dedicada al suministro de productos aserrados de alta calidad. Todo nuestro proceso productivo es totalmente integrado y realizado internamente, desde el corte y secado hasta el producto final.",
      "Actuamos con compromiso con la excelencia, integrando responsabilidad ambiental, ética e innovación en todas las etapas de nuestras operaciones. Construimos relaciones transparentes y de largo plazo, contribuyendo al fortalecimiento del sector maderero y a un futuro más responsable y sostenible.",
    ],
    openVideo: "Abrir video",
    sectionTitle: "Misión, Visión y Valores de Céu Azul",
    tags: ["Ética", "Sostenibilidad", "Calidad", "Transparencia"],
    missionTitle: "Misión",
    missionTopics: [
      "Consolidarse como referencia de confianza en el suministro de madera de alta calidad.",
      "Desarrollar soluciones innovadoras que generen valor real para nuestros clientes.",
      "Actuar con eficiencia operativa, confiabilidad y profesionalismo.",
      "Garantizar la consistencia y la calidad de los productos suministrados.",
      "Honrar los compromisos de entrega con puntualidad.",
      "Conducir nuestras operaciones con responsabilidad ambiental y respeto por los recursos naturales.",
    ],
    visionTitle: "Visión",
    visionText:
      "Ser reconocida por los clientes como una socia estratégica, contribuyendo al crecimiento económico de sus negocios y al desarrollo sostenible.",
    valuesTitle: "Valores",
    values: [
      ["Integridad y confianza", "Actuamos con transparencia y respeto."],
      ["Innovación con responsabilidad", "Buscamos soluciones eficientes."],
      ["Profesionalismo y ética", "Excelencia operativa y estandarización."],
      ["Compromiso con las personas", "Valoramos a los colaboradores y a la comunidad."],
    ] as Array<[string, string]>,
    whyTitle: "¿Por qué Serraria Céu Azul?",
    whyTextOne:
      "Somos una empresa brasileña, de origen familiar, ubicada en Itararé - São Paulo, con más de 350 colaboradores.",
    whyTextTwo:
      "Exportamos a más de 10 países en todo el mundo, manteniendo consistencia y responsabilidad ambiental.",
    whyCards: [
      {
        title: "Experiencia en la industria",
        desc: "Décadas de experiencia y más de 30 años de referencia en el sector.",
      },
      {
        title: "Alta capacidad productiva",
        desc: "Más de 5.000 m3 mensuales con equipos de alta tecnología.",
      },
      {
        title: "Soluciones personalizadas",
        desc: "Atención personalizada para diferentes aplicaciones y mercados.",
      },
      {
        title: "Madera trazable",
        desc: "Compromiso real con origen controlado y responsabilidad ambiental.",
      },
    ],
    modalTitle: "Video • Nuestra historia y propósito",
    close: "Cerrar",
    modalVideoTitle: "Historia de Serraria Céu Azul",
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
    videoTitle: "Ceu Azul institutional video",
    clickToWatch: "Click to watch",
    storyCardTitle: "Our story and purpose",
    storyCardDescription: [
      "Ceu Azul Sawmill is a wood processing company dedicated to supplying high-quality sawn timber products. Our entire production process is fully integrated and carried out internally, from cutting and drying to the final product.",
      "We operate with a commitment to excellence, integrating environmental responsibility, ethics, and innovation at every stage of our operations. We build transparent, long-term relationships, contributing to the strengthening of the timber sector and to a more responsible and sustainable future.",
    ],
    openVideo: "Open video",
    sectionTitle: "Ceu Azul Mission, Vision, and Values",
    tags: ["Ethics", "Sustainability", "Quality", "Transparency"],
    missionTitle: "Mission",
    missionTopics: [
      "To establish ourselves as a trusted reference in supplying high-quality timber.",
      "To develop innovative solutions that generate real value for our customers.",
      "To operate with efficiency, reliability, and professionalism.",
      "To ensure consistency and quality in the products we supply.",
      "To honor delivery commitments with punctuality.",
      "To conduct our operations with environmental responsibility and respect for natural resources.",
    ],
    visionTitle: "Vision",
    visionText:
      "To be recognized by customers as a strategic partner, contributing to the economic growth of their businesses and to sustainable development.",
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

      <section>
        <div className="maxW">
          <section id="missao" className="mt-14 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
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
                <ul className="font-Jost text-GrayP mt-4 space-y-3">
                  {content.missionTopics.map((topic) => (
                    <li key={topic} className="flex gap-3 items-start rounded-xl border border-gray-100 p-3 hover:bg-gray-50 transition">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-AzulP" />
                      <p className="leading-relaxed">{topic}</p>
                    </li>
                  ))}
                </ul>
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
              <div className="mt-4 space-y-4">
                {content.storyCardDescription.map((paragraph) => (
                  <p key={paragraph} className="font-Jost text-GrayP leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button onClick={() => setIsVideoOpen(true)} className="rounded-xl cursor-pointer bg-AzulP text-white px-5 py-3 font-Jost font-medium hover:opacity-90 transition active:scale-[0.98]">
                  {content.openVideo}
                </button>
              </div>
            </div>
          </article>

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

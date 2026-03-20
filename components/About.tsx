"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { type Locale, localizedPath } from "@/lib/i18n";

import "swiper/css";
import "swiper/css/pagination";

type Card = {
  icon: string;
  title: string;
  text: string;
  topics: string[];
};

const messages = {
  "pt-BR": {
    kicker: "Extraida com cuidado. Entregue com confianca.",
    title: "Tradicao, tecnologia e responsabilidade no processamento de madeira",
    description:
      "A Serraria Ceu Azul une a forca da tradicao familiar a eficiencia de uma operacao moderna e integrada, entregando madeira com consistencia, rastreabilidade e responsabilidade ambiental para atender mercados exigentes no Brasil e no exterior.",
    historyCta: "Conheca nossa historia",
    missionKicker: "Missao, Visao e Valores",
    missionTitle: "Compromisso com qualidade, etica e sustentabilidade",
    missionDescription:
      "Nossa atuacao e guiada por integridade, transparencia e eficiencia operacional. Trabalhamos com origem controlada, padronizacao e controle de qualidade para entregar produtos consistentes - com responsabilidade ambiental em cada etapa.",
    missionCta: "Nossa missao",
    missionAlt: "Sustentabilidade e producao responsavel",
    stats: [
      { value: "30+", label: "Anos de experiencia do grupo" },
      { value: "350+", label: "Colaboradores" },
      { value: "10+", label: "Paises atendidos" },
    ],
    cards: [
      {
        icon: "/icons/005-logs.png",
        title: "Madeira para Pallets",
        text: "Solucoes em madeira para pallets com padrao tecnico e producao sob demanda.",
        topics: [
          "Tipos e dimensoes (padrao e sob medida)",
          "Especificacoes tecnicas conforme aplicacao",
          "Padronizacao para logistica e industria",
        ],
      },
      {
        icon: "/icons/005-logs.png",
        title: "Madeiras Brutas e Beneficiadas",
        text: "Variedade de especies e opcoes de acabamento para diferentes usos.",
        topics: [
          "Pinus, eucalipto e outras opcoes",
          "Bruta, beneficiada, aparelhada ou tratada",
          "Aplicacoes e acabamentos conforme necessidade",
        ],
      },
      {
        icon: "/icons/005-logs.png",
        title: "Madeira Serrada para Construcao",
        text: "Linha destinada a construcao civil para mercado interno e externo.",
        topics: [
          "Cortes e bitolas para construcao",
          "Padroes para mercado interno e exportacao",
          "Selecao e controle de qualidade",
        ],
      },
      {
        icon: "/icons/005-logs.png",
        title: "Outros Produtos",
        text: "Aproveitamento de residuos com aplicacoes industriais e energeticas.",
        topics: ["Cavacos", "Serragem", "Biomassa (quando disponivel)"],
      },
    ] as Card[],
  },
  "en-US": {
    kicker: "Carefully sourced. Reliably delivered.",
    title: "Tradition, technology, and responsibility in wood processing",
    description:
      "Ceu Azul Sawmill combines the strength of family tradition with the efficiency of a modern integrated operation, delivering timber with consistency, traceability, and environmental responsibility for demanding markets in Brazil and abroad.",
    historyCta: "Learn our story",
    missionKicker: "Mission, Vision, and Values",
    missionTitle: "A commitment to quality, ethics, and sustainability",
    missionDescription:
      "Our work is guided by integrity, transparency, and operational efficiency. We operate with controlled origin, standardization, and quality control to deliver consistent products - with environmental responsibility at every stage.",
    missionCta: "Our mission",
    missionAlt: "Sustainability and responsible production",
    stats: [
      { value: "30+", label: "Years of group experience" },
      { value: "350+", label: "Employees" },
      { value: "10+", label: "Countries served" },
    ],
    cards: [
      {
        icon: "/icons/005-logs.png",
        title: "Wood for pallets",
        text: "Wood solutions for pallets with technical standards and on-demand production.",
        topics: [
          "Types and dimensions (standard and custom)",
          "Technical specifications by application",
          "Standardization for logistics and industry",
        ],
      },
      {
        icon: "/icons/005-logs.png",
        title: "Rough and processed timber",
        text: "A variety of species and finishing options for different uses.",
        topics: [
          "Pine, eucalyptus, and other options",
          "Rough, processed, planed, or treated",
          "Applications and finishes as needed",
        ],
      },
      {
        icon: "/icons/005-logs.png",
        title: "Sawn timber for construction",
        text: "A product line designed for construction in domestic and international markets.",
        topics: [
          "Cuts and dimensions for construction",
          "Standards for domestic and export markets",
          "Selection and quality control",
        ],
      },
      {
        icon: "/icons/005-logs.png",
        title: "Other products",
        text: "By-product reuse with industrial and energy applications.",
        topics: ["Wood chips", "Sawdust", "Biomass (when available)"],
      },
    ] as Card[],
  },
} as const;

export default function About({ locale }: { locale: Locale }) {
  const content = messages[locale];
  const hasSlider = content.cards.length > 3;

  const CardItem = ({ card }: { card: Card }) => (
    <div className="border border-gray-100 py-10 px-8 bg-white h-full">
      <img className="w-[70px]" src={card.icon} alt={card.title} />
      <h2 className="font-Jost text-GrayP font-medium text-lg mt-4">
        {card.title}
      </h2>
      <p className="font-Jost mt-2 text-GrayP">{card.text}</p>

      <ul className="mt-4 space-y-2">
        {card.topics.map((topic) => (
          <li key={topic} className="font-Jost text-GrayP text-sm flex gap-2">
            <span className="text-AzulS mt-[1px]">•</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="sobre-nos" className="pt-20 bg-[#FCFCFC]">
      <div className="maxW">
        <p className="font-Jost uppercase tracking-wider font-medium text-AzulS">
          {content.kicker}
        </p>

        <h2 className="font-Barlow uppercase font-bold text-GrayP mt-2 lg:max-w-[720px] lg:text-5xl">
          {content.title}
        </h2>

        <p className="font-Jost mt-2 text-base sm:text-lg lg:w-[80%] text-GrayP">
          {content.description}
        </p>

        <div className="mt-4 flex">
          <a
            className="uppercase tracking-wider text-white font-Jost bg-AzulS hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
            href={localizedPath(locale, "/nossa-historia")}
          >
            {content.historyCta}
          </a>
        </div>

        <article className="mt-14">
          {!hasSlider ? (
            <div className="flex flex-col lg:flex-row">
              {content.cards.map((card, index) => (
                <div key={index} className="border border-gray-100 lg:w-1/4">
                  <CardItem card={card} />
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {content.cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <CardItem card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </article>

        <article className="mt-14 flex flex-col lg:flex-row">
          <div className="lg:w-[40%]">
            <img src="/about.jpeg" alt={content.missionAlt} />
          </div>

          <div className="lg:w-[60%] bg-AzulP p-10 sm:p-14 lg:p-20">
            <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
              {content.missionKicker}
            </p>

            <h2 className="font-Barlow mt-4 uppercase font-bold text-white lg:max-w-[740px] lg:text-5xl">
              {content.missionTitle}
            </h2>

            <p className="font-Jost text-white mt-6 leading-relaxed">
              {content.missionDescription}
            </p>

            <div className="flex mt-6">
              <a
                className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                href={localizedPath(locale, "/nossa-historia")}
              >
                {content.missionCta}
              </a>
            </div>

            <div className="border border-AzulC mx-auto w-[200px] mt-8 lg:mx-0" />

            <div className="flex flex-col gap-12 mt-14 lg:flex-row lg:gap-16">
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="font-Barlow text-5xl lg:text-6xl font-semibold text-AzulC">
                    {stat.value}
                  </h3>
                  <p className="font-Jost text-white text-sm uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

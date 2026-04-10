"use client";

import React from "react";
import {
  FaBoxesStacked,
  FaLeaf,
  FaTree,
  FaWarehouse,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { type Locale, localizedPath } from "@/lib/i18n";

import "swiper/css";
import "swiper/css/pagination";

type Card = {
  icon: React.ElementType;
  title: string;
  text: string;
  topics: string[];
};

const messages = {
  "pt-BR": {
    kicker: "Extraída com cuidado. Entregue com confiança.",
    title: "Tradição, tecnologia e responsabilidade no processamento de madeira",
    description:
      "A Serraria Céu Azul une a força da tradição familiar à eficiência de uma operação moderna e integrada, entregando madeira com consistência, rastreabilidade e responsabilidade ambiental para atender mercados exigentes no Brasil e no exterior.",
    historyCta: "Conheça nossa história",
    missionKicker: "Missão, Visão e Valores",
    missionTitle: "Compromisso com qualidade, ética e sustentabilidade",
    missionDescription:
      "Nossa atuação é guiada por integridade, transparência e eficiência operacional. Trabalhamos com origem controlada, padronização e controle de qualidade para entregar produtos consistentes, com responsabilidade ambiental em cada etapa.",
    missionCta: "Nossa missão",
    missionAlt: "Sustentabilidade e produção responsável",
    stats: [
      { value: "30+", label: "Anos de experiência do grupo" },
      { value: "350+", label: "Colaboradores" },
      { value: "10+", label: "Países atendidos" },
    ],
    cards: [
      {
        icon: FaBoxesStacked,
        title: "Madeira para Pallets",
        text: "Soluções em madeira para pallets com padrão técnico e produção sob demanda.",
        topics: [
          "Tipos e dimensões (padrão e sob medida)",
          "Especificações técnicas conforme aplicação",
          "Padronização para logística e indústria",
        ],
      },
      {
        icon: FaTree,
        title: "Madeiras Brutas e Beneficiadas",
        text: "Variedade de espécies e opções de acabamento para diferentes usos.",
        topics: [
          "Pinus, eucalipto e outras opções",
          "Bruta, beneficiada, aparelhada ou tratada",
          "Aplicações e acabamentos conforme necessidade",
        ],
      },
      {
        icon: FaWarehouse,
        title: "Madeira Serrada para Construção",
        text: "Linha destinada à construção civil para mercado interno e externo.",
        topics: [
          "Cortes e bitolas para construção",
          "Padrões para mercado interno e exportação",
          "Seleção e controle de qualidade",
        ],
      },
      {
        icon: FaLeaf,
        title: "Outros Produtos",
        text: "Aproveitamento de resíduos com aplicações industriais e energéticas.",
        topics: ["Cavacos", "Serragem", "Biomassa (quando disponível)"],
      },
    ] as Card[],
  },
  "es-ES": {
    kicker: "Extraída con cuidado. Entregada con confianza.",
    title: "Tradición, tecnología y responsabilidad en el procesamiento de madera",
    description:
      "Serraria Céu Azul une la fuerza de la tradición familiar a la eficiencia de una operación moderna e integrada, entregando madera con consistencia, trazabilidad y responsabilidad ambiental para atender mercados exigentes en Brasil y en el exterior.",
    historyCta: "Conozca nuestra historia",
    missionKicker: "Misión, Visión y Valores",
    missionTitle: "Compromiso con calidad, ética y sostenibilidad",
    missionDescription:
      "Nuestra actuación está guiada por integridad, transparencia y eficiencia operativa. Trabajamos con origen controlado, estandarización y control de calidad para entregar productos consistentes, con responsabilidad ambiental en cada etapa.",
    missionCta: "Nuestra misión",
    missionAlt: "Sostenibilidad y producción responsable",
    stats: [
      { value: "30+", label: "Años de experiencia del grupo" },
      { value: "350+", label: "Colaboradores" },
      { value: "10+", label: "Países atendidos" },
    ],
    cards: [
      {
        icon: FaBoxesStacked,
        title: "Madera para Pallets",
        text: "Soluciones en madera para pallets con estándar técnico y producción bajo demanda.",
        topics: [
          "Tipos y dimensiones (estándar y a medida)",
          "Especificaciones técnicas según la aplicación",
          "Estandarización para logística e industria",
        ],
      },
      {
        icon: FaTree,
        title: "Maderas Brutas y Beneficiadas",
        text: "Variedad de especies y opciones de acabado para diferentes usos.",
        topics: [
          "Pino, eucalipto y otras opciones",
          "Bruta, beneficiada, cepillada o tratada",
          "Aplicaciones y acabados según la necesidad",
        ],
      },
      {
        icon: FaWarehouse,
        title: "Madera Aserrada para Construcción",
        text: "Línea destinada a la construcción civil para mercado interno y externo.",
        topics: [
          "Cortes y escuadrías para construcción",
          "Estándares para mercado interno y exportación",
          "Selección y control de calidad",
        ],
      },
      {
        icon: FaLeaf,
        title: "Otros Productos",
        text: "Aprovechamiento de residuos con aplicaciones industriales y energéticas.",
        topics: ["Astillas", "Aserrín", "Biomasa (cuando esté disponible)"],
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
      "Our work is guided by integrity, transparency, and operational efficiency. We operate with controlled origin, standardization, and quality control to deliver consistent products, with environmental responsibility at every stage.",
    missionCta: "Our mission",
    missionAlt: "Sustainability and responsible production",
    stats: [
      { value: "30+", label: "Years of group experience" },
      { value: "350+", label: "Employees" },
      { value: "10+", label: "Countries served" },
    ],
    cards: [
      {
        icon: FaBoxesStacked,
        title: "Wood for pallets",
        text: "Wood solutions for pallets with technical standards and on-demand production.",
        topics: [
          "Types and dimensions (standard and custom)",
          "Technical specifications by application",
          "Standardization for logistics and industry",
        ],
      },
      {
        icon: FaTree,
        title: "Rough and processed timber",
        text: "A variety of species and finishing options for different uses.",
        topics: [
          "Pine, eucalyptus, and other options",
          "Rough, processed, planed, or treated",
          "Applications and finishes as needed",
        ],
      },
      {
        icon: FaWarehouse,
        title: "Sawn timber for construction",
        text: "A product line designed for construction in domestic and international markets.",
        topics: [
          "Cuts and dimensions for construction",
          "Standards for domestic and export markets",
          "Selection and quality control",
        ],
      },
      {
        icon: FaLeaf,
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

  const CardItem = ({ card }: { card: Card }) => {
    const Icon = card.icon;

    return (
      <div className="border border-gray-100 py-10 px-8 bg-white h-full">
        <div className="flex h-18 w-18 items-center justify-center rounded-full bg-AzulP/6 text-AzulS ring-1 ring-AzulS/15">
          <Icon className="text-4xl" aria-hidden="true" />
        </div>
        <h2 className="font-Jost text-GrayP font-medium text-lg mt-4">
          {card.title}
        </h2>
        <p className="font-Jost mt-2 text-GrayP">{card.text}</p>

        <ul className="mt-4 space-y-2">
          {card.topics.map((topic) => (
            <li key={topic} className="font-Jost text-GrayP text-sm flex gap-2">
              <span className="text-AzulS mt-[1px]">-</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

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

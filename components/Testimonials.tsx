"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { type Locale } from "@/lib/i18n";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  highlighted?: boolean;
};

const messages = {
  "pt-BR": {
    kicker: "O que dizem de nos?",
    title: "Referencia para quem exige qualidade",
    items: [
      {
        id: 1,
        name: "Eduardo Sousa",
        role: "Marcenaria Sousa - Itarare/SP",
        text: "A qualidade da madeira e o padrao de corte fazem diferenca no nosso dia a dia. Entrega correta, material bem seco e otimo acabamento.",
        highlighted: false,
      },
      {
        id: 2,
        name: "Maria Silva",
        role: "Construtora Silva - Obras residenciais",
        text: "Atendimento rapido e madeira com rastreabilidade. Isso da seguranca para a obra e mantem o cronograma sem imprevistos.",
        highlighted: true,
      },
      {
        id: 3,
        name: "Joao Pereira",
        role: "Fabrica de Moveis Pereira",
        text: "Trabalhamos com producao continua e precisamos de constancia. A Serraria Ceu Azul entrega um padrao que facilita muito o processo.",
        highlighted: false,
      },
      {
        id: 4,
        name: "Ana Costa",
        role: "Industria de Embalagens Costa",
        text: "Os pallets sob medida atenderam exatamente nossa operacao. Material firme, bom encaixe e otimo custo-beneficio no volume.",
        highlighted: true,
      },
      {
        id: 5,
        name: "Carlos Lima",
        role: "Logistica e Armazenagem - Pallet Exportacao",
        text: "Precisavamos de pallets one way com padrao e agilidade. A negociacao foi simples e a entrega veio no prazo.",
        highlighted: true,
      },
      {
        id: 6,
        name: "Fernanda Rocha",
        role: "Industria (uso de madeira e derivados)",
        text: "Alem do material principal, o aproveitamento de cavaco e po de serra ajuda muito na rotina. Empresa organizada e transparente.",
        highlighted: false,
      },
      {
        id: 7,
        name: "Bruno Alves",
        role: "Marcenaria - Projetos sob medida",
        text: "Madeira bem selecionada e com otima estabilidade. Para moveis planejados, isso e essencial para evitar retrabalho.",
        highlighted: true,
      },
      {
        id: 8,
        name: "Patricia Souza",
        role: "Construtora - Obras comerciais",
        text: "O suporte no pedido e a flexibilidade nos cortes ajudaram bastante. Ficou facil padronizar a compra para as obras.",
        highlighted: false,
      },
    ] as Testimonial[],
  },
  "en-US": {
    kicker: "What do clients say about us?",
    title: "A reference for those who demand quality",
    items: [
      {
        id: 1,
        name: "Eduardo Sousa",
        role: "Sousa Woodshop - Itarare/SP",
        text: "The wood quality and cutting standard make a difference in our daily operation. Correct delivery, properly dried material, and a great finish.",
        highlighted: false,
      },
      {
        id: 2,
        name: "Maria Silva",
        role: "Silva Construction - Residential projects",
        text: "Fast service and traceable wood. That gives us confidence on site and keeps the schedule on track without surprises.",
        highlighted: true,
      },
      {
        id: 3,
        name: "Joao Pereira",
        role: "Pereira Furniture Factory",
        text: "We work with continuous production and need consistency. Ceu Azul Sawmill delivers a standard that makes the whole process easier.",
        highlighted: false,
      },
      {
        id: 4,
        name: "Ana Costa",
        role: "Costa Packaging Industry",
        text: "The custom pallets matched our operation exactly. Solid material, good fit, and strong cost-effectiveness at volume.",
        highlighted: true,
      },
      {
        id: 5,
        name: "Carlos Lima",
        role: "Logistics and Warehousing - Export Pallets",
        text: "We needed one-way pallets with standardization and agility. The negotiation was simple and delivery arrived on time.",
        highlighted: true,
      },
      {
        id: 6,
        name: "Fernanda Rocha",
        role: "Industry (wood and by-product use)",
        text: "Beyond the main material, the reuse of wood chips and sawdust helps a lot in our routine. A well-organized and transparent company.",
        highlighted: false,
      },
      {
        id: 7,
        name: "Bruno Alves",
        role: "Woodshop - Custom projects",
        text: "Well-selected wood with excellent stability. For custom furniture, that is essential to avoid rework.",
        highlighted: true,
      },
      {
        id: 8,
        name: "Patricia Souza",
        role: "Construction company - Commercial projects",
        text: "The order support and flexibility in cuts helped a lot. It became easy to standardize purchasing for our projects.",
        highlighted: false,
      },
    ] as Testimonial[],
  },
} as const;

export default function Testimonials({ locale }: { locale: Locale }) {
  const content = messages[locale];
  const firstRow = content.items.slice(0, 4);
  const secondRow = content.items.slice(4, 8);

  return (
    <section id="depoimentos" className="py-20 bg-[#FCFCFC]">
      <div className="maxW">
        <p className="font-Jost uppercase tracking-wider font-medium text-AzulS">
          {content.kicker}
        </p>
        <h2 className="font-Barlow uppercase font-bold text-GrayP mt-2 lg:max-w-[600px] lg:text-5xl">
          {content.title}
        </h2>

        <div className="hidden md:block mt-10">
          <article className="flex gap-4 mb-4">
            {firstRow.map((item) => {
              const isHighlighted = item.highlighted;

              return (
                <div
                  key={item.id}
                  className={`lg:w-1/4 py-8 px-6 ${isHighlighted ? "bg-Orange" : "bg-white"}`}
                >
                  <p className={`font-Jost ${isHighlighted ? "text-white" : "text-GrayP"}`}>
                    {item.text}
                  </p>

                  <h1
                    className={`font-semibold uppercase mt-6 ${
                      isHighlighted ? "text-white" : "text-GrayP"
                    }`}
                  >
                    {item.name}
                  </h1>

                  <p
                    className={`font-Jost text-sm mt-1 ${
                      isHighlighted ? "text-white/90" : "text-GrayP/70"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              );
            })}
          </article>

          <article className="flex gap-4">
            {secondRow.map((item) => {
              const isHighlighted = item.highlighted;

              return (
                <div
                  key={item.id}
                  className={`lg:w-1/4 py-8 px-6 ${isHighlighted ? "bg-Orange" : "bg-white"}`}
                >
                  <p className={`font-Jost ${isHighlighted ? "text-white" : "text-GrayP"}`}>
                    {item.text}
                  </p>

                  <h1
                    className={`font-semibold uppercase mt-6 ${
                      isHighlighted ? "text-white" : "text-GrayP"
                    }`}
                  >
                    {item.name}
                  </h1>

                  <p
                    className={`font-Jost text-sm mt-1 ${
                      isHighlighted ? "text-white/90" : "text-GrayP/70"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              );
            })}
          </article>
        </div>

        <div className="mt-10 md:hidden">
          <Swiper modules={[Pagination]} spaceBetween={16} slidesPerView={1}>
            {content.items.map((item) => {
              const isHighlighted = item.highlighted;

              return (
                <SwiperSlide key={item.id}>
                  <div
                    className={`py-8 px-6 rounded-md ${isHighlighted ? "bg-Orange" : "bg-white"}`}
                  >
                    <p className={`font-Jost ${isHighlighted ? "text-white" : "text-GrayP"}`}>
                      {item.text}
                    </p>

                    <h1
                      className={`font-semibold uppercase mt-6 ${
                        isHighlighted ? "text-white" : "text-GrayP"
                      }`}
                    >
                      {item.name}
                    </h1>

                    <p
                      className={`font-Jost text-sm mt-1 ${
                        isHighlighted ? "text-white/90" : "text-GrayP/70"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

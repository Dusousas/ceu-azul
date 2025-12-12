"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  id: number;
  name: string;
  role: string; // ✅ cargo/empresa/segmento
  text: string;
  highlighted?: boolean; // controla se é laranja
};

const firstRow: Testimonial[] = [
  {
    id: 1,
    name: "Eduardo Sousa",
    role: "Marcenaria Sousa • Itararé/SP",
    text: "A qualidade da madeira e o padrão de corte fazem diferença no nosso dia a dia. Entrega correta, material bem seco e ótimo acabamento.",
    highlighted: false,
  },
  {
    id: 2,
    name: "Maria Silva",
    role: "Construtora Silva • Obras residenciais",
    text: "Atendimento rápido e madeira com rastreabilidade. Isso dá segurança para a obra e mantém o cronograma sem imprevistos.",
    highlighted: true,
  },
  {
    id: 3,
    name: "João Pereira",
    role: "Fábrica de Móveis Pereira",
    text: "Trabalhamos com produção contínua e precisamos de constância. A Serraria Céu Azul entrega um padrão que facilita muito o processo.",
    highlighted: false,
  },
  {
    id: 4,
    name: "Ana Costa",
    role: "Indústria de Embalagens Costa",
    text: "Os pallets sob medida atenderam exatamente nossa operação. Material firme, bom encaixe e ótimo custo-benefício no volume.",
    highlighted: true,
  },
];

const secondRow: Testimonial[] = [
  {
    id: 5,
    name: "Carlos Lima",
    role: "Logística & Armazenagem • Pallet Exportação",
    text: "Precisávamos de pallets one way com padrão e agilidade. A negociação foi simples e a entrega veio no prazo.",
    highlighted: true,
  },
  {
    id: 6,
    name: "Fernanda Rocha",
    role: "Indústria (uso de madeira e derivados)",
    text: "Além do material principal, o aproveitamento de cavaco e pó de serra ajuda muito na rotina. Empresa organizada e transparente.",
    highlighted: false,
  },
  {
    id: 7,
    name: "Bruno Alves",
    role: "Marcenaria • Projetos sob medida",
    text: "Madeira bem selecionada e com ótima estabilidade. Para móveis planejados, isso é essencial para evitar retrabalho.",
    highlighted: true,
  },
  {
    id: 8,
    name: "Patrícia Souza",
    role: "Construtora • Obras comerciais",
    text: "O suporte no pedido e a flexibilidade nos cortes ajudaram bastante. Ficou fácil padronizar a compra para as obras.",
    highlighted: false,
  },
];

const allTestimonials = [...firstRow, ...secondRow];

export default function Testimonials() {
  return (
    <>
      <section className="py-20 bg-[#FCFCFC]">
        <div className="maxW">
          <p className="font-Jost uppercase tracking-wider font-medium text-AzulS">
            O que dizem de nós?
          </p>
          <h2 className="font-Barlow uppercase font-bold text-GrayP mt-2 lg:max-w-[600px] lg:text-5xl">
            Referência para quem exige qualidade
          </h2>

          {/* DESKTOP / TABLET (duas fileiras) */}
          <div className="hidden md:block mt-10">
            {/* 1ª fileira */}
            <article className="flex gap-4 mb-4">
              {firstRow.map((item) => {
                const isHighlighted = item.highlighted;

                return (
                  <div
                    key={item.id}
                    className={`lg:w-1/4 py-8 px-6 ${
                      isHighlighted ? "bg-Orange" : "bg-white"
                    }`}
                  >
                    <p
                      className={`font-Jost ${
                        isHighlighted ? "text-white" : "text-GrayP"
                      }`}
                    >
                      {item.text}
                    </p>

                    <h1
                      className={`font-semibold uppercase mt-6 ${
                        isHighlighted ? "text-white" : "text-GrayP"
                      }`}
                    >
                      {item.name}
                    </h1>

                    {/* ✅ Cargo/empresa/segmento */}
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

            {/* 2ª fileira */}
            <article className="flex gap-4">
              {secondRow.map((item) => {
                const isHighlighted = item.highlighted;

                return (
                  <div
                    key={item.id}
                    className={`lg:w-1/4 py-8 px-6 ${
                      isHighlighted ? "bg-Orange" : "bg-white"
                    }`}
                  >
                    <p
                      className={`font-Jost ${
                        isHighlighted ? "text-white" : "text-GrayP"
                      }`}
                    >
                      {item.text}
                    </p>

                    <h1
                      className={`font-semibold uppercase mt-6 ${
                        isHighlighted ? "text-white" : "text-GrayP"
                      }`}
                    >
                      {item.name}
                    </h1>

                    {/* ✅ Cargo/empresa/segmento */}
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

          {/* MOBILE (carrossel Swiper) */}
          <div className="mt-10 md:hidden">
            <Swiper modules={[Pagination]} spaceBetween={16} slidesPerView={1}>
              {allTestimonials.map((item) => {
                const isHighlighted = item.highlighted;

                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`py-8 px-6 rounded-md ${
                        isHighlighted ? "bg-Orange" : "bg-white"
                      }`}
                    >
                      <p
                        className={`font-Jost ${
                          isHighlighted ? "text-white" : "text-GrayP"
                        }`}
                      >
                        {item.text}
                      </p>

                      <h1
                        className={`font-semibold uppercase mt-6 ${
                          isHighlighted ? "text-white" : "text-GrayP"
                        }`}
                      >
                        {item.name}
                      </h1>

                      {/* ✅ Cargo/empresa/segmento */}
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
    </>
  );
}

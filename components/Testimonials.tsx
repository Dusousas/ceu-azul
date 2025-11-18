"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  highlighted?: boolean; // controla se é laranja
};

const firstRow: Testimonial[] = [
  {
    id: 1,
    name: "Eduardo Sousa",
    text: "Texto do depoimento 1 da primeira fileira. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    highlighted: false, // branco
  },
  {
    id: 2,
    name: "Maria Silva",
    text: "Texto do depoimento 2 da primeira fileira. Odio a praesentium voluptatem sed labore aliquid sequi recusandae.",
    highlighted: true, // laranja
  },
  {
    id: 3,
    name: "João Pereira",
    text: "Texto do depoimento 3 da primeira fileira. Magnam maiores consectetur adipisicing elit.",
    highlighted: false, // branco
  },
  {
    id: 4,
    name: "Ana Costa",
    text: "Texto do depoimento 4 da primeira fileira. Sequi recusandae quis magni maiores.",
    highlighted: true, // laranja
  },
];

const secondRow: Testimonial[] = [
  {
    id: 5,
    name: "Carlos Lima",
    text: "Texto do depoimento 1 da segunda fileira. Aqui você coloca outro relato diferente.",
    highlighted: true, // laranja (começa na laranja)
  },
  {
    id: 6,
    name: "Fernanda Rocha",
    text: "Texto do depoimento 2 da segunda fileira. Outro conteúdo específico para esse cliente.",
    highlighted: false, // branco
  },
  {
    id: 7,
    name: "Bruno Alves",
    text: "Texto do depoimento 3 da segunda fileira. Cada card pode ter um texto personalizado.",
    highlighted: true, // laranja
  },
  {
    id: 8,
    name: "Patrícia Souza",
    text: "Texto do depoimento 4 da segunda fileira. Ajuste aqui conforme os depoimentos reais.",
    highlighted: false, // branco
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
            Lorem ipsum dolor sit amet consectetur adipisicing.
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
                  </div>
                );
              })}
            </article>
          </div>

          {/* MOBILE (carrossel Swiper) */}
          <div className="mt-10 md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
            >
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

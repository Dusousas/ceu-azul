"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Card = {
  icon: string;
  title: string;
  text: string;
  topics: string[];
};

export default function About() {
  const cards: Card[] = [
    {
      icon: "/icons/005-logs.png",
      title: "Madeira para Pallets",
      text: "Soluções em madeira para pallets com padrão técnico e produção sob demanda.",
      topics: [
        "Tipos e dimensões (padrão e sob medida)",
        "Especificações técnicas conforme aplicação",
        "Padronização para logística e indústria",
      ],
    },
    {
      icon: "/icons/005-logs.png",
      title: "Madeiras Brutas e Beneficiadas",
      text: "Variedade de espécies e opções de acabamento para diferentes usos.",
      topics: [
        "Pínus, eucalipto e outras opções",
        "Bruta, beneficiada, aparelhada ou tratada",
        "Aplicações e acabamentos conforme necessidade",
      ],
    },
    {
      icon: "/icons/005-logs.png",
      title: "Madeira Serrada para Construção",
      text: "Linha destinada à construção civil para mercado interno e externo.",
      topics: [
        "Cortes e bitolas para construção",
        "Padrões para mercado interno e exportação",
        "Seleção e controle de qualidade",
      ],
    },
    {
      icon: "/icons/005-logs.png",
      title: "Outros Produtos",
      text: "Aproveitamento de resíduos com aplicações industriais e energéticas.",
      topics: ["Cavacos", "Serragem", "Biomassa (quando disponível)"],
    },
  ];

  const hasSlider = cards.length > 3;

  const CardItem = ({ card }: { card: Card }) => (
    <div className="border border-gray-100 py-10 px-8 bg-white h-full">
      <img className="w-[70px]" src={card.icon} alt={card.title} />
      <h2 className="font-Jost text-GrayP font-medium text-lg mt-4">
        {card.title}
      </h2>
      <p className="font-Jost mt-2 text-GrayP">{card.text}</p>

      <ul className="mt-4 space-y-2">
        {card.topics.map((topic, i) => (
          <li key={i} className="font-Jost text-GrayP text-sm flex gap-2">
            <span className="text-AzulS mt-[1px]">•</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <section id="sobre-nos" className="pt-20 bg-[#FCFCFC]">
        <div className="maxW">
          <p className="font-Jost uppercase tracking-wider font-medium text-AzulS">
            Extraída com cuidado. Entregue com confiança.
          </p>

          <h2 className="font-Barlow uppercase font-bold text-GrayP mt-2 lg:max-w-[720px] lg:text-5xl">
            Tradição, tecnologia e responsabilidade no processamento de madeira
          </h2>

          <p className="font-Jost mt-2 text-base sm:text-lg lg:w-[80%] text-GrayP">
            A Serraria Céu Azul une a força da tradição familiar à eficiência de
            uma operação moderna e integrada, entregando madeira com
            consistência, rastreabilidade e responsabilidade ambiental para
            atender mercados exigentes no Brasil e no exterior.
          </p>

          <div className="mt-4 flex">
            <a
              className="uppercase tracking-wider text-white font-Jost bg-AzulS hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
              href="/nossa-historia"
            >
              Conheça nossa história
            </a>
          </div>

          {/* Cards (se passar de 3 vira Swiper) */}
          <article className="mt-14">
            {!hasSlider ? (
              <div className="flex flex-col lg:flex-row">
                {cards.map((card, index) => (
                  <div key={index} className="border border-gray-100 lg:w-1/4">
                    <div className="py-10 px-8 bg-white h-full">
                      <img
                        className="w-[70px]"
                        src={card.icon}
                        alt={card.title}
                      />
                      <h2 className="font-Jost text-GrayP font-medium text-lg mt-4">
                        {card.title}
                      </h2>
                      <p className="font-Jost mt-2 text-GrayP">{card.text}</p>

                      <ul className="mt-4 space-y-2">
                        {card.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="font-Jost text-GrayP text-sm flex gap-2"
                          >
                            <span className="text-AzulS mt-[1px]">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
                {cards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <CardItem card={card} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </article>

          {/* NOSSA MISSÃO (enxuto + link pra página detalhada) */}
          <article className="mt-14 flex flex-col lg:flex-row">
            <div className="lg:w-[40%]">
              <img
                src="/about.jpeg"
                alt="Sustentabilidade e produção responsável"
              />
            </div>

            <div className="lg:w-[60%] bg-AzulP p-10 sm:p-14 lg:p-20">
              <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
                Missão, Visão e Valores
              </p>

              <h2 className="font-Barlow mt-4 uppercase font-bold text-white lg:max-w-[740px] lg:text-5xl">
                Compromisso com qualidade, ética e sustentabilidade
              </h2>

              <p className="font-Jost text-white mt-6 leading-relaxed">
                Nossa atuação é guiada por integridade, transparência e
                eficiência operacional. Trabalhamos com origem controlada,
                padronização e controle de qualidade para entregar produtos
                consistentes — com responsabilidade ambiental em cada etapa.
              </p>

              <div className="flex mt-6">
                <a
                  className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                  href="/nossa-historia"
                >
                  Nossa missão
                </a>
              </div>

              <div className="border border-AzulC mx-auto w-[200px] mt-8 lg:mx-0" />

              {/* números rápidos (enxutos e reais) */}
              <div className="flex flex-col gap-12 mt-14 lg:flex-row lg:gap-16">
                <div>
                  <h3 className="font-Barlow text-5xl lg:text-6xl font-semibold text-AzulC">
                    30+
                  </h3>
                  <p className="font-Jost text-white text-sm uppercase">
                    Anos de experiência do grupo
                  </p>
                </div>

                <div>
                  <h3 className="font-Barlow text-5xl lg:text-6xl font-semibold text-AzulC">
                    350+
                  </h3>
                  <p className="font-Jost text-sm text-white uppercase">
                    Colaboradores
                  </p>
                </div>

                <div>
                  <h3 className="font-Barlow text-5xl lg:text-6xl font-semibold text-AzulC">
                    10+
                  </h3>
                  <p className="font-Jost text-white text-sm uppercase">
                    Países atendidos
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

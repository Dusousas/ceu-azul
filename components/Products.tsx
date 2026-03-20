import React from "react";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";

const messages = {
  "pt-BR": {
    kicker: "Produtos e servicos",
    title: "Serraria focada em precisao e qualidade de corte",
    description:
      "Do desdobro ao acabamento, entregamos madeira serrada, beneficiada e pallets para logistica, construcao e movelaria. Controle de umidade, repetitividade e acompanhamento tecnico para evitar retrabalho em obra ou fabrica.",
    quoteCta: "Solicitar orcamento",
    portfolioCta: "Ver portfolio",
    badge: "Sob medida",
    highlights: [
      "Corte sob medida com revisao de bitolas",
      "Secagem, beneficiamento e rastreabilidade",
      "Pinus e eucalipto de origem controlada",
      "Entrega programada e lotes repetitivos",
    ],
    items: [
      {
        title: "Pallets e embalagens",
        desc: "Pallets para exportacao, one way e sob medida para logistica e industria.",
        image: "/servicos/pallets.jpeg",
        points: [
          "Padroes PBR, PBR leve e medidas especiais",
          "Madeira seca e controle de umidade para exportacao",
          "Reforcos, tacos e travessas conforme carga",
        ],
      },
      {
        title: "Madeira serrada",
        desc: "Pranchas, caibros, vigas e sarrafos cortados com padrao constante.",
        image: "/servicos/madeira-serrada.jpeg",
        points: [
          "Pinus e eucalipto com rastreabilidade",
          "Bitolas constantes e cortes repetitivos",
          "Secagem monitorada para reduzir empeno",
        ],
      },
      {
        title: "Madeiras beneficiadas",
        desc: "Aparelhada, lixada ou tratada para uso direto em obras e moveis.",
        image: "/servicos/beneficiadas.jpeg",
        points: [
          "Cepilhada e aparelhada com acabamento fino",
          "Tratamento preventivo e impregnacao",
          "Pecas calibradas para montagem rapida",
        ],
      },
      {
        title: "Caibros e vigas estruturais",
        desc: "Componentes para coberturas, galpoes leves e estruturas temporarias.",
        image: "/servicos/caibros.jpeg",
        points: [
          "Calculos de corte para minimizar desperdicio",
          "Bitolas indicadas para carga e vao",
          "Entrega em kit com identificacao",
        ],
      },
      {
        title: "Componentes para moveis",
        desc: "Sarrafos, paineis colados e pecas cortadas para producao moveleira.",
        image: "/servicos/moveis.jpeg",
        points: [
          "Secagem controlada para estabilidade",
          "Selecionada para colagem e usinagem",
          "Acabamento para receber verniz ou tinta",
        ],
      },
      {
        title: "Subprodutos aproveitados",
        desc: "Cavaco e serragem para biomassa, cama de aviario e absorcao.",
        image: "/servicos/subprodutos.jpeg",
        points: [
          "Volumes fracionados ou a granel",
          "Umidade acompanhada para melhor uso",
          "Opcao de retirada no patio ou entrega",
        ],
      },
    ],
  },
  "en-US": {
    kicker: "Products and services",
    title: "A sawmill focused on cutting precision and quality",
    description:
      "From breakdown to finishing, we deliver sawn timber, processed wood, and pallets for logistics, construction, and furniture manufacturing. Moisture control, repeatability, and technical support help prevent rework at the job site or factory.",
    quoteCta: "Request a quote",
    portfolioCta: "View portfolio",
    badge: "Custom",
    highlights: [
      "Custom cutting with dimensional review",
      "Drying, processing, and traceability",
      "Controlled-origin pine and eucalyptus",
      "Scheduled deliveries and repeatable batches",
    ],
    items: [
      {
        title: "Pallets and packaging",
        desc: "Export pallets, one-way solutions, and custom builds for logistics and industry.",
        image: "/servicos/pallets.jpeg",
        points: [
          "PBR, light PBR, and special dimensions",
          "Dry wood and moisture control for export",
          "Reinforcements, blocks, and runners by load",
        ],
      },
      {
        title: "Sawn timber",
        desc: "Boards, rafters, beams, and battens cut to consistent standards.",
        image: "/servicos/madeira-serrada.jpeg",
        points: [
          "Pine and eucalyptus with traceability",
          "Consistent dimensions and repeatable cuts",
          "Monitored drying to reduce warping",
        ],
      },
      {
        title: "Processed wood",
        desc: "Planed, sanded, or treated wood ready for direct use in construction and furniture.",
        image: "/servicos/beneficiadas.jpeg",
        points: [
          "Planed finish for refined surfaces",
          "Preventive treatment and impregnation",
          "Calibrated pieces for faster assembly",
        ],
      },
      {
        title: "Rafters and structural beams",
        desc: "Components for roofs, light sheds, and temporary structures.",
        image: "/servicos/caibros.jpeg",
        points: [
          "Cut plans to minimize waste",
          "Dimensions matched to span and load",
          "Kit delivery with identification",
        ],
      },
      {
        title: "Furniture components",
        desc: "Battens, glued panels, and cut parts for furniture production.",
        image: "/servicos/moveis.jpeg",
        points: [
          "Controlled drying for stability",
          "Selected for gluing and machining",
          "Finish ready for varnish or paint",
        ],
      },
      {
        title: "Recovered by-products",
        desc: "Wood chips and sawdust for biomass, poultry bedding, and absorption uses.",
        image: "/servicos/subprodutos.jpeg",
        points: [
          "Split volumes or bulk supply",
          "Moisture tracked for better usage",
          "Pickup yard option or delivery",
        ],
      },
    ],
  },
} as const;

export default function Products({ locale }: { locale: Locale }) {
  const content = messages[locale];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="maxW flex flex-col gap-12 ">
        <article className=" lg:w-[60%]">
          <p className="font-Jost uppercase tracking-wider font-medium text-AzulS">
            {content.kicker}
          </p>

          <h2 className="font-Barlow mt-2 uppercase font-bold text-GrayP text-3xl lg:text-5xl ">
            {content.title}
          </h2>

          <p className="font-Jost mt-2 text-GrayP lg:text-lg">
            {content.description}
          </p>

          <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 gap-3">
            {content.highlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
              >
                <p className="font-Jost text-GrayP">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex mt-6 flex-col gap-4 sm:flex-row">
            <a
              className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6 text-center"
              href="#contato"
            >
              {content.quoteCta}
            </a>
            <Link
              className="uppercase tracking-wider font-Jost text-AzulP border border-AzulS hover:bg-AzulS hover:text-white py-4 px-6 text-center"
              href="/portfolio"
            >
              {content.portfolioCta}
            </Link>
          </div>
        </article>

        <article className="grid  grid-cols-1 md:grid-cols-3 gap-4">
          {content.items.map((product) => (
            <div
              key={product.title}
              className="border border-gray-100 bg-white overflow-hidden hover:-translate-y-[2px] transition duration-150"
            >
              <div
                className="h-40 w-full bg-center bg-cover relative"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url(${product.image})`,
                }}
              >
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-Jost uppercase tracking-wide bg-Orange text-white">
                  {content.badge}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-Jost text-GrayP font-semibold text-lg">
                  {product.title}
                </h3>
                <p className="font-Jost text-GrayP mt-2">{product.desc}</p>

                <ul className="mt-4 space-y-2">
                  {product.points.map((item) => (
                    <li
                      key={item}
                      className="font-Jost text-GrayP text-sm flex gap-2"
                    >
                      <span className="text-Orange mt-[2px]">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

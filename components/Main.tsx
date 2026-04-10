import React from "react";
import { type Locale, localizedPath } from "@/lib/i18n";

const messages = {
  "pt-BR": {
    kicker: "Extraída com cuidado. Entregue com confiança.",
    title: "Madeira com propósito.",
    description:
      "A Serraria Céu Azul atua no processamento de madeira com operação integrada, do corte e secagem ao produto final, garantindo consistência, rastreabilidade e responsabilidade ambiental em cada entrega.",
    productsLabel: "Produtos e serviços",
    specs:
      "Especificações: umidade controlada (12% +/- 2%) e padronização dimensional.",
    historyCta: "Nossa História",
    contactCta: "Entrar em contato",
    products: [
      { title: "Pallets", desc: "Exportação, one way e sob medida." },
      { title: "Madeira serrada", desc: "Padrão e qualidade para aplicações." },
      { title: "Cavaco e serragem", desc: "Aproveitamento com eficiência." },
      { title: "Caixas e embalagens", desc: "Soluções para transporte." },
    ],
  },
  "es-ES": {
    kicker: "Extraída con cuidado. Entregada con confianza.",
    title: "Madera con propósito.",
    description:
      "Serraria Céu Azul actúa en el procesamiento de madera con una operación integrada, desde el corte y el secado hasta el producto final, garantizando consistencia, trazabilidad y responsabilidad ambiental en cada entrega.",
    productsLabel: "Productos y servicios",
    specs:
      "Especificaciones: humedad controlada (12% +/- 2%) y estandarización dimensional.",
    historyCta: "Nuestra Historia",
    contactCta: "Ponerse en contacto",
    products: [
      { title: "Pallets", desc: "Exportación, one way y a medida." },
      { title: "Madera aserrada", desc: "Estándar y calidad para aplicaciones." },
      { title: "Astillas y aserrín", desc: "Aprovechamiento con eficiencia." },
      { title: "Cajas y embalajes", desc: "Soluciones para transporte." },
    ],
  },
  "en-US": {
    kicker: "Carefully sourced. Reliably delivered.",
    title: "Wood with purpose.",
    description:
      "Ceu Azul Sawmill operates with an integrated timber process, from cutting and drying to the final product, ensuring consistency, traceability, and environmental responsibility in every delivery.",
    productsLabel: "Products and services",
    specs:
      "Specifications: controlled moisture (12% +/- 2%) and dimensional standardization.",
    historyCta: "Our Story",
    contactCta: "Get in touch",
    products: [
      { title: "Pallets", desc: "Export, one-way, and custom builds." },
      {
        title: "Sawn timber",
        desc: "Consistent standards and quality for applications.",
      },
      {
        title: "Wood chips and sawdust",
        desc: "Efficient by-product utilization.",
      },
      { title: "Crates and packaging", desc: "Transport-ready solutions." },
    ],
  },
} as const;

export default function Main({ locale }: { locale: Locale }) {
  const content = messages[locale];

  return (
    <section id="main" className="bg-AzulP relative lg:block">
      <div className="h-full">
        <article className="h-full flex gap-10 flex-col lg:flex-row">
          <div className="h-full bgMain1 mt-20 flex flex-col justify-center px-3 py-12 lg:px-0 lg:mt-28 lg:py-20 lg:pl-34 lg:w-1/2">
            <p className="font-Jost uppercase tracking-wider font-medium text-AzulC text-center lg:text-left">
              {content.kicker}
            </p>

            <h1 className="font-Barlow text-white uppercase text-center font-bold text-3xl sm:text-4xl lg:text-left lg:text-[72px] leading-[1.02] mt-3">
              {content.title}
            </h1>

            <div className="border border-Orange mx-auto w-[200px] mt-6 lg:mx-0" />

            <p className="mt-6 font-Jost text-white/90 text-center lg:text-lg lg:text-left lg:pr-10 leading-relaxed">
              {content.description}
            </p>

            <div className="mt-8">
              <p className="uppercase tracking-wider text-white/90 text-sm lg:text-base text-center lg:text-left">
                {content.productsLabel}
              </p>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.products.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/15 bg-black/20 p-4 transition hover:bg-black/35 hover:border-white/25"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-Orange" />
                      <div className="text-left">
                        <p className="font-semibold text-white leading-tight">
                          {item.title}
                        </p>
                        <p className="text-white/80 text-sm lg:text-[15px] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 font-Jost text-white/70 text-sm text-center lg:text-left">
                {content.specs}
              </p>
            </div>

            <div className="mt-10 flex flex-col text-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                className="uppercase tracking-wider text-white font-Jost bg-AzulS hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                href={localizedPath(locale, "/nossa-historia")}
              >
                {content.historyCta}
              </a>

              <a
                className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                href="#contato"
              >
                {content.contactCta}
              </a>
            </div>
          </div>

          <div className="hidden bgMain relative lg:block lg:w-1/2">
            <div className="absolute inset-0 bg-AzulP/35" />

            <div className="absolute top-10 right-10 flex gap-3">
              <span className="h-3 w-3 rounded-full bg-white/90" />
              <span className="h-3 w-3 rounded-full bg-white/60" />
              <span className="h-3 w-3 rounded-full bg-white/40" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

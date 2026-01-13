import React from "react";

const products = [
  {
    title: "Pallets e embalagens",
    desc: "Pallets para exportacao, one way e sob medida para logistica e industria.",
    image:
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=900&q=80",
    items: [
      "Padroes PBR, PBR leve e medidas especiais",
      "Madeira seca e controle de umidade para exportacao",
      "Reforcos, tacos e travessas conforme carga",
    ],
  },
  {
    title: "Madeira serrada",
    desc: "Pranchas, caibros, vigas e sarrafos cortados com padrao constante.",
    image:
      "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80",
    items: [
      "Pinus e eucalipto com rastreabilidade",
      "Bitolas constantes e cortes repetitivos",
      "Secagem monitorada para reduzir empeno",
    ],
  },
  {
    title: "Madeiras beneficiadas",
    desc: "Aparelhada, lixada ou tratada para uso direto em obras e moveis.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    items: [
      "Cepilhada e aparelhada com acabamento fino",
      "Tratamento preventivo e impregnacao",
      "Pecas calibradas para montagem rapida",
    ],
  },
  {
    title: "Caibros e vigas estruturais",
    desc: "Componentes para coberturas, galpoes leves e estruturas temporarias.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    items: [
      "Calculos de corte para minimizar desperdicio",
      "Bitolas indicadas para carga e vao",
      "Entrega em kit com identificacao",
    ],
  },
  {
    title: "Componentes para moveis",
    desc: "Sarrafos, paineis colados e pecas cortadas para producao moveleira.",
    image:
      "https://images.unsplash.com/photo-1503389156029-5a9c854d85f2?auto=format&fit=crop&w=900&q=80",
    items: [
      "Secagem controlada para estabilidade",
      "Selecionada para colagem e usinagem",
      "Acabamento para receber verniz ou tinta",
    ],
  },
  {
    title: "Subprodutos aproveitados",
    desc: "Cavaco e serragem para biomassa, cama de aviario e absorcao.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    items: [
      "Volumes fracionados ou a granel",
      "Umidade acompanhada para melhor uso",
      "Opcao de retirada no patio ou entrega",
    ],
  },
];

const highlights = [
  "Corte sob medida com revisao de bitolas",
  "Secagem, beneficiamento e rastreabilidade",
  "Pinus e eucalipto de origem controlada",
  "Entrega programada e lotes repetitivos",
];

export default function Products() {
  return (
    <>
      <section id="produtos" className="py-20 bg-white">
        <div className="maxW flex flex-col gap-12 ">
          <article className=" lg:w-[60%]">
            <p className="font-Jost uppercase tracking-wider font-medium text-AzulS">
              Produtos e servicos
            </p>

            <h2 className="font-Barlow mt-2 uppercase font-bold text-GrayP text-3xl lg:text-5xl ">
              Serraria focada em precisao e qualidade de corte
            </h2>

            <p className="font-Jost mt-2 text-GrayP lg:text-lg">
              Do desdobro ao acabamento, entregamos madeira serrada,
              beneficiada e pallets para logistica, construcao e movelaria.
              Controle de umidade, repetitividade e acompanhamento tecnico para
              evitar retrabalho em obra ou fabrica.
            </p>

            <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
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
                Solicitar orcamento
              </a>
              <a
                className="uppercase tracking-wider font-Jost text-AzulP border border-AzulS hover:bg-AzulS hover:text-white py-4 px-6 text-center"
                href="/portfolio"
              >
                Ver portfolio
              </a>
            </div>
          </article>

          <article className="grid  grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
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
                    sob medida
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-Jost text-GrayP font-semibold text-lg">
                    {product.title}
                  </h3>
                  <p className="font-Jost text-GrayP mt-2">{product.desc}</p>

                  <ul className="mt-4 space-y-2">
                    {product.items.map((item, i) => (
                      <li
                        key={i}
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
    </>
  );
}

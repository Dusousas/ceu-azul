import React from "react";

export default function Main() {
  const produtos = [
    {
      title: "Pallets",
      desc: "Exportação, one way (descartáveis) e sob medida.",
    },
    {
      title: "Madeira serrada",
      desc: "Qualidade e padrão para diversas aplicações.",
    },
    {
      title: "Pó de serra e cavaco",
      desc: "Aproveitamento do processo com eficiência.",
    },
    {
      title: "Caixas e embalagens",
      desc: "Soluções para transporte e armazenamento.",
    },
  ];

  return (
    <>
      <section className="bg-AzulP relative lg:block">
        <div className="h-full">
          <article className="h-full flex">
            <div className="h-full bgMain1 mt-20 flex flex-col justify-center px-2 py-10 lg:px-0 mt-28 lg:py-20 lg:pl-34 lg:w-1/2">
              <h1 className="font-Barlow text-white uppercase text-center font-bold text-3xl lg:text-left lg:text-[78px]">
                Um céu de oportunidades. O céu é o limite.
              </h1>

              <div className="border border-Orange mx-auto w-[200px] mt-6 lg:mx-0" />

              {/* Conteúdo mais agradável */}
              <div className="font-Jost text-white text-center lg:text-lg lg:text-left lg:pr-8 space-y-6">
                <p className="mt-6 font-Jost text-white text-center lg:text-lg lg:text-left lg:pr-8">
                  {" "}
                  A Serraria Céu Azul atua principalmente no desdobramento de
                  madeira, produzindo madeira serrada e desdobrada. Todo o
                  processo é feito na serraria, desde corte, secagem e produto
                  final. A empresa está envolvida no comércio atacadista e
                  varejista de madeira e produtos derivados.{" "}
                </p>

                {/* Lista interativa */}
                <div className="space-y-3">
                  <p className="uppercase tracking-wider text-white/90 text-sm lg:text-base">
                    Produtos e serviços
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {produtos.map((item, idx) => (
                      <div
                        key={idx}
                        className="group rounded-xl border border-white/15 bg-black/20 p-4 transition-all duration-200 hover:bg-black/35 hover:border-white/25 hover:-translate-y-0.5"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-Orange group-hover:scale-110 transition-transform" />
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
                </div>

                {/* Chips de matéria-prima */}
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-start">
                  <p className="text-white/85 text-sm lg:text-base">
                    Matéria-prima:
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    <span className="px-3 py-1 rounded-full border border-white/15 bg-black/20 text-white/90 text-sm transition hover:bg-black/35">
                      Pinus
                    </span>
                    <span className="px-3 py-1 rounded-full border border-white/15 bg-black/20 text-white/90 text-sm transition hover:bg-black/35">
                      Eucalipto
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col text-center gap-6 lg:flex-row">
                <a
                  className="uppercase tracking-wider text-white font-Jost bg-AzulS hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                  href="/nossa-historia"
                >
                  Nossa História
                </a>
                <a
                  className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                  href=""
                >
                  Entrar em contato
                </a>
              </div>
            </div>

            <div className="hidden bgMain relative lg:block lg:w-1/2">
              <div className="absolute inset-0 bg-AzulP/30" />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

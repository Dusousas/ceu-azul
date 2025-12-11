import React from "react";

export default function Main() {
  return (
    <>
      <section className="bg-AzulP relative lg:block h-[100vh]">
        <div className="h-full">
          <article className="h-full flex">
            <div className="h-full bgMain1 mt-14 flex flex-col justify-center px-2 lg:px-0 lg:mt-0 lg:pl-34 lg:w-1/2">
              <h1 className="font-Barlow text-white uppercase text-center font-bold text-3xl lg:text-left lg:text-[78px]">
                Um céu de oportunidades. O céu é o limite.
              </h1>
              <div className="border border-Orange mx-auto w-[200px] mt-6 lg:mx-0" />
              <p className="mt-6 font-Jost text-white text-center lg:text-lg lg:text-left lg:pr-8">
                A Serraria Céu Azul é uma empresa do setor madeireiro,
                integrante do Grupo Elopack, que iniciou suas operações em
                Itararé, São Paulo.
              </p>

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

            <div className="hidden bgMain h-full relative lg:block lg:w-1/2">
              <div className="absolute inset-0 bg-AzulP/30" />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

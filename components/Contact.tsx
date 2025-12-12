import React from "react";
import Form from "./subc/Form";

export default function Contact() {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col w-full items-center lg:flex-row">
          <article className="py-20 w-full lg:w-1/2 px-4 lg:px-20">
            <p className="font-Jost uppercase tracking-wider font-medium text-center text-AzulP lg:text-left">
              Precisa de ajuda?
            </p>
            <h2 className="font-Barlow text-center uppercase font-bold text-GrayP lg:w-[600px] lg:text-3xl lg:text-left">
              Fale com a Serraria Céu Azul e solicite um orçamento.
            </h2>

            <div className="mt-10">
              <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
                Nossos endereços
              </p>
              <p className="font-Jost mt-2 lg:w-[500px]">
                Rodovia Francisco Alves Negrão (SP-258), Km 331, bairro Ibiti,
                Itararé - SP, CEP 18467-899.
              </p>
              <div className="border my-10 lg:w-[500px]" />

              <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
                Nossos contatos
              </p>
              <p className="font-Jost mt-2">(14) 3656-3014</p>
              <p className="font-Jost">seuemail@example.com</p>
              <div className="border my-10 lg:w-[500px]" />

              <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
                Horário de funcionamento
              </p>
              <p className="font-Jost mt-2">Segunda – Sexta</p>
              <p className="font-Jost">08:00 – 17:00</p>
              <div className="border my-10 lg:w-[500px]" />
            </div>
          </article>

          <article className="bg-[#F6F6F6] w-full lg:w-1/2 py-20 px-4 lg:px-20">
            <Form />
          </article>
        </div>
      </section>
    </>
  );
}

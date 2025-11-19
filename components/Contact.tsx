import React from "react";
import Form from "./subc/Form";

export default function Contact() {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col w-full  items-center lg:flex-row">
          <article className="py-20 w-full lg:w-1/2 px-4 lg:px-20">
            <p className="font-Jost uppercase tracking-wider font-medium text-center text-AzulP lg:text-left">
              Precisa de ajuda?
            </p>
            <h2 className="font-Barlow text-center  uppercase font-bold text-GrayP lg:w-[600px] lg:text-3xl lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>

            <div className="mt-20">
              <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
                Nossos endereços
              </p>
              <p className="font-Jost mt-2">
                Avenida das Nações Unidas, 123 - São Paulo, SP
              </p>
              <div className="border my-10 lg:w-[500px]" />

              <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
                Nossos contatos
              </p>
              <p className="font-Jost mt-2">14 1234-1234</p>
              <p className="font-Jost">Seuemail@example.com</p>
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

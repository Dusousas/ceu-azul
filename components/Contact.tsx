import React from "react";
import Form from "./subc/Form";

export default function Contact() {
  return (
    <>
      <section className="">
        <div className="flex">
          <article className="lg:w-1/2 pl-64 py-20">
            <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
              Precisa de ajuda?
            </p>
            <h2 className="font-Barlow  uppercase font-bold text-GrayP lg:max-w-[600px] text-3xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>

            <div className="mt-20">
              <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
                Nossos endereços
              </p>
              <p className="font-Jost mt-2">
                Avenida das Nações Unidas, 123 - São Paulo, SP
              </p>
              <div className="border my-10 w-[500px]" />

              <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
                Nossos contatos
              </p>
              <p className="font-Jost mt-2">14 1234-1234</p>
            </div>
          </article>
          <article className="bg-[#F6F6F6] lg:w-1/2 pr-64 pl-20 py-20">
            <Form />
          </article>
        </div>
      </section>
    </>
  );
}

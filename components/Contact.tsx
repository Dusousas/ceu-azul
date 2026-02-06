import React from "react";
import Form from "./subc/Form";

export default function Contact() {
  return (
    <section id="contato" className="w-full bg-white">
      <div className="flex flex-col w-full items-stretch lg:flex-row">
        {/* BLOCO INSTITUCIONAL / CONTATO DIRETO */}
        <article className="py-20 w-full lg:w-1/2 px-4 lg:px-20 flex flex-col justify-center">
          <p className="font-Jost uppercase tracking-wider font-medium text-AzulP text-center lg:text-left">
            Vamos trabalhar juntos
          </p>

          <h2 className="font-Barlow text-center uppercase font-bold text-GrayP mt-2 lg:max-w-[640px] lg:text-4xl lg:text-left">
            Entre em contato com a Serraria Céu Azul
          </h2>

          <p className="font-Jost mt-6 text-GrayP lg:max-w-[560px] text-center lg:text-left">
            Solicite um orçamento, tire dúvidas comerciais e fale com nosso time
            para encontrar a melhor solução em madeira para sua operação.
          </p>

          {/* CARDS DE CONTATO */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5547997316610"
              target="_blank"
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <span className="h-12 w-12 rounded-xl bg-AzulP/10 flex items-center justify-center">
                  {/* WhatsApp icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-AzulP"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38 0 12c0 2.1.55 4.15 1.6 5.96L0 24l6.2-1.56A11.98 11.98 0 0 0 12 24c6.62 0 12-5.38 12-12a11.9 11.9 0 0 0-3.48-8.52ZM12 21.94a9.92 9.92 0 0 1-5.06-1.4l-.36-.2-3.68.92.98-3.6-.24-.37A9.93 9.93 0 0 1 2.06 12C2.08 6.5 6.53 2.06 12.02 2.06A9.87 9.87 0 0 1 22 12c0 5.5-4.5 9.94-10 9.94Zm5.75-7.42c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.62.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
                  </svg>
                </span>

                <div className="flex-1">
                  <p className="font-Barlow uppercase font-semibold text-GrayP">
                    WhatsApp
                  </p>
                  <p className="font-Jost text-GrayP mt-1">
                    +55 47 99731-6610
                  </p>
                  <p className="font-Jost text-sm text-GrayP/70 mt-1">
                    Resposta rápida para orçamentos
                  </p>
                </div>

                <span className="text-GrayP/40 group-hover:text-GrayP transition">
                  ↗
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:jonatan.souza@elopack.ind.br"
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <span className="h-12 w-12 rounded-xl bg-AzulP/10 flex items-center justify-center">
                  {/* Mail icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-AzulP"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                  </svg>
                </span>

                <div className="flex-1">
                  <p className="font-Barlow uppercase font-semibold text-GrayP">
                    Email
                  </p>
                  <p className="font-Jost text-GrayP mt-1 break-all">
                    jonatan.souza@elopack.ind.br
                  </p>
                  <p className="font-Jost text-sm text-GrayP/70 mt-1">
                    Envie especificações e volumes
                  </p>
                </div>

                <span className="text-GrayP/40 group-hover:text-GrayP transition">
                  ↗
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ceuazul"
              target="_blank"
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <span className="h-12 w-12 rounded-xl bg-AzulP/10 flex items-center justify-center">
                  {/* LinkedIn icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-AzulP"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                  </svg>
                </span>

                <div className="flex-1">
                  <p className="font-Barlow uppercase font-semibold text-GrayP">
                    LinkedIn
                  </p>
                  <p className="font-Jost text-GrayP mt-1">@ceuazul</p>
                  <p className="font-Jost text-sm text-GrayP/70 mt-1">
                    Acompanhe novidades e estrutura
                  </p>
                </div>

                <span className="text-GrayP/40 group-hover:text-GrayP transition">
                  ↗
                </span>
              </div>
            </a>

            {/* Telefone fixo (opcional) */}
            <a
              href="tel:+551436563014"
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <span className="h-12 w-12 rounded-xl bg-AzulP/10 flex items-center justify-center">
                  {/* Phone icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-AzulP"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
                  </svg>
                </span>

                <div className="flex-1">
                  <p className="font-Barlow uppercase font-semibold text-GrayP">
                    Telefone
                  </p>
                  <p className="font-Jost text-GrayP mt-1">(14) 3656-3014</p>
                  <p className="font-Jost text-sm text-GrayP/70 mt-1">
                    Atendimento em horário comercial
                  </p>
                </div>

                <span className="text-GrayP/40 group-hover:text-GrayP transition">
                  ↗
                </span>
              </div>
            </a>
          </div>

          {/* ENDEREÇO + HORÁRIO */}
          <div className="mt-12">
            <div className="border my-10 lg:max-w-[560px]" />

            <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
              Endereço
            </p>

            <p className="font-Jost mt-3 text-GrayP lg:max-w-[560px]">
              Rodovia Francisco Alves Negrão (SP-258), Km 331, bairro Ibiti,
              Itararé – SP <br />
              CEP 18467-899
            </p>

            <div className="border my-10 lg:max-w-[560px]" />

            <p className="font-Jost uppercase tracking-wider font-medium text-AzulP">
              Horário de funcionamento
            </p>
            <p className="font-Jost mt-3 text-GrayP">Segunda a Sexta</p>
            <p className="font-Jost text-GrayP">08:00 – 17:00</p>
          </div>
        </article>

        {/* FORMULÁRIO */}
        <article className="bg-[#F6F6F6] w-full lg:w-1/2 py-20 px-4 lg:px-20 flex items-center">
          <div className="w-full">
            <h3 className="font-Barlow uppercase font-bold text-GrayP text-2xl mb-6">
              Solicite um orçamento
            </h3>

            <p className="font-Jost text-GrayP mb-8">
              Preencha o formulário e nossa equipe retorna com as próximas
              etapas. Se puder, informe tipo de madeira, medidas e volume.
            </p>

            <Form />
          </div>
        </article>
      </div>
    </section>
  );
}

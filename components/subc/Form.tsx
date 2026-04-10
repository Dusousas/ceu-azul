import React from "react";
import { type Locale } from "@/lib/i18n";

const messages = {
  "pt-BR": {
    name: "Seu nome",
    company: "Sua empresa",
    email: "Seu e-mail",
    subject: "Assunto",
    message: "Sua mensagem",
    submit: "Enviar",
  },
  "es-ES": {
    name: "Su nombre",
    company: "Su empresa",
    email: "Su correo electrónico",
    subject: "Asunto",
    message: "Su mensaje",
    submit: "Enviar",
  },
  "en-US": {
    name: "Your name",
    company: "Your company",
    email: "Your email",
    subject: "Subject",
    message: "Your message",
    submit: "Send",
  },
} as const;

export default function Form({ locale }: { locale: Locale }) {
  const content = messages[locale];

  return (
    <form className="w-full">
      <div className="flex flex-col justify-center gap-10">
        <div className="flex flex-col w-full">
          <label className="font-Jost" htmlFor="name">
            {content.name}
          </label>
          <input className="bg-white p-2" type="text" name="name" id="name" />
        </div>
        <div className="flex flex-col w-full">
          <label className="font-Jost" htmlFor="company">
            {content.company}
          </label>
          <input className="bg-white p-2" type="text" name="company" id="company" />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-10 mt-4">
        <div className="flex flex-col w-full">
          <label className="font-Jost" htmlFor="email">
            {content.email}
          </label>
          <input className="bg-white p-2" type="email" name="email" id="email" />
        </div>
        <div className="flex flex-col w-full">
          <label className="font-Jost" htmlFor="subject">
            {content.subject}
          </label>
          <input className="bg-white p-2" type="text" name="subject" id="subject" />
        </div>
      </div>

      <div className="mt-4">
        <label className="font-Jost" htmlFor="message">
          {content.message}
        </label>
        <textarea className="w-full bg-white p-2 resize-none " rows={4} name="message" id="message" />
      </div>

      <div className="flex mt-6">
        <button
          type="submit"
          className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6 cursor-pointer"
        >
          {content.submit}
        </button>
      </div>
    </form>
  );
}

import React from "react";

export default function Form() {
  return (
    <>
      <form className="w-full">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col w-full">
            <label className="font-Jost" htmlFor="">
              Seu nome
            </label>
            <input className="bg-white p-2" type="text" name="" id="" />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-Jost" htmlFor="">
              Seu nome
            </label>
            <input className="bg-white p-2" type="text" name="" id="" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-10 mt-4">
          <div className="flex flex-col w-full">
            <label className="font-Jost" htmlFor="">
              Seu Email
            </label>
            <input className="bg-white p-2" type="text" name="" id="" />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-Jost" htmlFor="">
              Assunto
            </label>
            <input className="bg-white p-2" type="text" name="" id="" />
          </div>
        </div>

        <div className="mt-4">
        <label className="" htmlFor="">Sua mensagem</label>
        <textarea
          className="w-full bg-white p-2 resize-none "
          rows={4}
          name=""
          id=""
        ></textarea>
        </div>

        <div className="flex mt-6">
            <a className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6" href="">Enviar</a>
        </div>

      </form>
    </>
  );
}

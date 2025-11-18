import React from "react";

type ProgressItem = {
  label: string;
  value: number; // porcentagem (0–100)
  text: string;
};

const progressData: ProgressItem[] = [
  { label: "Wood Fuel", value: 80, text: "Lorem m²" },
  { label: "Forest Management", value: 65, text: "Ipsum m²" },
  { label: "Timber Harvest", value: 90, text: "Dolor m²" },
];

function ProgressBar({ label, value, text }: ProgressItem) {
  return (
    <div>
      <p className="font-Jost text-white mb-1">{label}</p>
      <div className="w-full bg-GrayP/60 h-5">
        <div
          className="flex items-center h-5 bg-AzulC"
          style={{ width: `${value}%` }} // controla o preenchimento dinamicamente
        >
          <p className="pl-4 text-sm text-Orange font-semibold">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Production() {
  return (
    <>
      <section className="py-30 bgProduction relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-AzulP/95 pointer-events-none" />

        <div className="maxW relative flex items-center z-10 text-white gap-20">
          {/* LEFT TEXT */}
          <article className="lg:w-1/2">
            <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
              Nossos números
            </p>

            <h2 className="font-Barlow mt-4 uppercase font-bold text-white lg:max-w-[600px] lg:text-5xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h2>

            <p className="mt-4 font-Jost">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
              rerum voluptatibus illo necessitatibus iure quaerat dolorum mollitia
              quasi reprehenderit quam quae accusantium omnis.
            </p>

            <div className="border border-AzulC w-[200px] mt-8" />

            <div className="mt-9 flex">
              <a
                className="uppercase tracking-wider font-Jost text-white bg-Orange hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
                href=""
              >
                Entrar em contato
              </a>
            </div>
          </article>

          {/* PROGRESSOS */}
          <article className="lg:w-1/2 space-y-5">
            {progressData.map((item) => (
              <ProgressBar
                key={item.label}
                label={item.label}
                value={item.value}
                text={item.text}
              />
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

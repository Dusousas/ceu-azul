export default function About() {
  const cards = [
    {
      icon: "/icons/005-logs.png",
      title: "Colheita de madeira",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dignissimos numquam quis nemo laborum laudantium corporis animi et aliquam. Dolores!",
    },
    {
      icon: "/icons/005-logs.png",
      title: "Manejo florestal",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium reiciendis quaerat, obcaecati illum odit perspiciatis.",
    },
    {
      icon: "/icons/005-logs.png",
      title: "Transporte especializado",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, commodi. Temporibus, maiores.",
    },
    {
      icon: "/icons/005-logs.png",
      title: "Processamento de toras",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum porro molestiae, impedit numquam cumque.",
    },
    
  ];

  return (
    <>
      <section id="about" className="pt-20 bg-[#FCFCFC]">
        <div className="maxW">
          <p className="font-Jost uppercase tracking-wider font-medium text-AzulS">
            Nossa história vem de família
          </p>
          <h2 className="font-Barlow uppercase font-bold text-GrayP mt-2 lg:max-w-[600px] lg:text-5xl">
            Tradição e Inovação no Mercado Madeireiro
          </h2>

          <p className="font-Jost mt-2 text-base sm:text-lg lg:w-[75%] text-GrayP">
            Bem-vindo à nossa serraria Céu Azul, uma empresa que iniciou suas
            atividades em setembro de 2023 com o objetivo de trazer qualidade e
            inovação ao setor madeireiro. Apesar de sermos novos no mercado,
            nossa história está enraizada na tradição e na experiência de um
            grupo investidor com mais de 20 anos de conhecimento e atuação no
            mercado madeireiro.
          </p>

          <div className="mt-4 flex">
            <a
              className="uppercase tracking-wider text-white font-Jost bg-AzulS hover:bg-hoverAzul hover:text-AzulP py-4 px-6"
              href="/nossa-historia"
            >
              Conheça nossa história
            </a>
          </div>

          <article className="mt-14 flex flex-col lg:flex-row">
            {cards.map((card, index) => (
              <div
                key={index}
                className="border border-gray-100 lg:w-1/4 py-10 px-8 bg-white"
              >
                <img className="w-[70px]" src={card.icon} alt={card.title} />
                <h2 className="font-Jost text-GrayP font-medium text-lg mt-4">
                  {card.title}
                </h2>
                <p className="font-Jost mt-2 text-GrayP">{card.text}</p>
              </div>
            ))}
          </article>

          <article className="mt-14 flex flex-col lg:flex-row">
            <div className="lg:w-[40%]">
              <img
                className=""
                src="/pexels-fabian-wiktor-3466355.jpg"
                alt=""
              />
            </div>

            <div className="lg:w-[60%] bg-AzulP p-20">
              <p className="font-Jost uppercase tracking-wider font-medium text-AzulC">
                Bem-vindo
              </p>
              <h2 className="font-Barlow mt-4 uppercase font-bold text-white mt-2 lg:max-w-[600px] lg:text-5xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, autem?
              </h2>
              <p className="font-Jost text-white mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptate soluta expedita? Possimus iure, placeat magni, nisi
                illum adipisci tempore neque temporibus culpa voluptas totam sit
                libero reiciendis, hic eaque.
              </p>
              <div className="border border-AzulC mx-auto w-[200px] mt-8 lg:mx-0" />

              <div className="flex flex-col gap-16 mt-20 lg:flex-row">
                <div className="">
                  <h3 className="font-Barlow text-8xl font-semibold text-AzulC">
                    25
                  </h3>
                  <p className="font-Jost text-white text-sm uppercase">
                    Anos de experiência
                  </p>
                </div>

                <div className="">
                  <h3 className="font-Barlow text-8xl font-semibold text-AzulC">
                    25
                  </h3>
                  <p className="font-Jost text-sm text-white uppercase">
                    Anos de experiência
                  </p>
                </div>

                <div className="">
                  <h3 className="font-Barlow text-8xl font-semibold text-AzulC">
                    25
                  </h3>
                  <p className="font-Jost text-white text-sm uppercase">
                    Anos de experiência
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

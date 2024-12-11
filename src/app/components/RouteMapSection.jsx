"use client";
import Image from "next/image";

import MagicButton from "./MagicButton";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Reverse Barbershop",
      description:
        "Uma barbearia de Blumenau que agora ingressou na internet com uma presença digital marcante.",
      imageSrc: "/cards/card-0.jpg",
      buttonTitle: "Ver Portfolio",
      link: "https://www.behance.net/gallery/211354693/Identidade-Visual-Reverse-BarberShop",
    },
    {
      title: "Laboratório de IA",
      description:
        "Um laboratório de Inteligência Generativa em Blumenau, onde desenvolvemos o material impresso deles.",
      imageSrc: "/cards/card-2.jpg",
      buttonTitle: "Ver Portfolio",
      link: "https://www.behance.net/gallery/205715647/Adesivacao-de-laboratorio-Ambientacao",
    },
    {
      title: "Infinity",
      description:
        "Criativos para a campanha digital da empresa infinity .web3. Material desenvolvido para um sistema de gestão de barbeiros.",
      imageSrc: "/cards/card-3.jpg",
      buttonTitle: "Ver Portfolio",
      link: "https://www.behance.net/gallery/194062973/Criativos-para-midias-sociais-InfinityWeb3",
    },
    {
      title: "Daiane Grison",
      description:
        "A terapia tântrica é um conjunto de práticas e massagens que se unem para ajudar o interagente a atingir um objetivo específico — seja ele o autoconhecimento corporal, energético ou mental.",
      imageSrc: "/cards/card-15.jpg",
      buttonTitle: "Ver Portfolio",
      link: "https://www.behance.net/gallery/205698387/Daiane-Grison-Mentora-Tantrica-Brand-Id",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-[url('/bg-2.png')] bg-no-repeat bg-fixed text-brandGray"
    >
      <h2 className="text-3xl lg:text-5xl font-black text-white text-center mb-12">
        Portfólio
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative  overflow-hidden p-6 bg-[url('/bg-2.png')] bg-center bg-brandSprite/ text-brandWhite shadow-2xl border-[1px] border-brandBlue shadow-brandBlue/60 rounded-lg transition-transform duration-300 transform hover:scale-105"
          >
            {/* Imagem do Card */}
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={400}
              height={240}
              className="w-full h-auto object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
            />
            {/* Conteúdo */}
            <h3 className="text-2xl font-bold mb-2 group-hover:text-brandGreen transition-colors">
              {project.title}
            </h3>
            <p className="text-base mb-8">{project.description}</p>
            <MagicButton title={project.buttonTitle} link={project.link} />
          </div>
        ))}
      </div>
    </section>
  );
}

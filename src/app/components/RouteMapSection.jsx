// components/RouteMapSection.jsx
"use client";
import Image from "next/image";
import MagicButton from "./MagicButton";

export default function RouteMapSection() {
  const steps = [
    { title: "Aquisição de documentação", description: "Entendimento do cliente e levantamento das necessidades." },
    { title: "Conceito", description: "Definição do conceito criativo e visual." },
    { title: "Produção", description: "Desenvolvimento dos elementos gráficos e da identidade visual." },
    { title: "Entrega", description: "Apresentação e entrega do projeto final." },
  ];

  return (
    <section id="mapa-de-roteiro" className="py-20 bg-[url('/bg.png')] bg-no-repeat bg-fixed text-brandGray">
      <h2 className="text-3xl font-black text-white text-center mb-12">Mapa de Roteiro</h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
        {steps.map((step, index) => (
          <div key={index} className="min-h-72 p-6 bg-brandGray text-brandWhite shadow-inner shadow-brandBlue rounded-lg">
            <Image src="/logo.png" alt="" width={200} height={80} className="w-48 h-14 ml-20 lg:ml-0 mb-6"/>
            <h3 className="text-2xl font-heading mb-2">{step.title}</h3>
            <p className="text-base font-sans mb-8">{step.description}</p>
            <MagicButton>
            </MagicButton>
          </div>
        ))}
      </div>
    </section>
  );
}

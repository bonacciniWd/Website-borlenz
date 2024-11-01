// components/RouteMapSection.jsx
"use client";

export default function RouteMapSection() {
  const steps = [
    { title: "Briefing", description: "Entendimento do cliente e levantamento das necessidades." },
    { title: "Conceito", description: "Definição do conceito criativo e visual." },
    { title: "Produção", description: "Desenvolvimento dos elementos gráficos e da identidade visual." },
    { title: "Entrega", description: "Apresentação e entrega do projeto final." },
  ];

  return (
    <section id="mapa-de-roteiro" className="py-20 bg-brandWhite text-brandGray">
      <h2 className="text-3xl font-heading text-center mb-12">Mapa de Roteiro</h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 p-6 bg-brandGray text-brandWhite rounded-lg shadow-md">
            <h3 className="text-2xl font-heading mb-2">{step.title}</h3>
            <p className="text-base font-sans">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { TbBrandUnity } from "react-icons/tb";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSection() {
  const technologies = [
    {
      name: "Photoshop",
      icon: "/icons/photoshop.png",
      services: ["Edição de Imagens", "Retoque Avançado", "Criação de Layouts"],
    },
    {
      name: "Illustrator",
      icon: "/icons/illustrator.png",
      services: ["Design Vetorial", "Criação de Logotipos", "Ilustração Digital"],
    },
    {
      name: "Lightroom",
      icon: "/icons/lightroom.png",
      services: ["Edição de Fotos", "Ajustes de Cor", "Presets Personalizados"],
    },
    {
      name: "Premiere",
      icon: "/icons/premiere.png",
      services: ["Edição de Vídeos", "Cortes Profissionais", "Efeitos Visuais"],
    },
    {
      name: "Audition",
      icon: "/icons/audition.png",
      services: ["Edição de Áudio", "Mixagem", "Restauração de Som"],
    },
    {
      name: "After Effects",
      icon: "/icons/after.png",
      services: ["Animação 2D/3D", "Motion Graphics", "Efeitos Especiais"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === technologies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTech = technologies[currentIndex];

  return (
    <section
      id="tecnologias"
      className="py-24 flex flex-col justify-center items-center bg-[url('/bg-2.png')] bg-fixed shadow-2xl text-center"
    >
      <h2 className="text-3xl font-black mb-12">Tecnologias Utilizadas</h2>

      {/* Área interativa */}
      <div className="relative w-96 h-96 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute flex flex-col items-center text-center"
          >
            <img
              src={currentTech.icon}
              alt={currentTech.name}
              className="w-44 h-44 mb-4 rounded-xl shadow-lg border"
            />
            <h3 className="text-2xl font-bold">{currentTech.name}</h3>
            <ul className="mt-4 text-sm space-y-2 p-4 bg-brandBlack border-[2px] shadow-2xl rounded-md shadow-yellow-50 border-brandBlue text-brandWhite">
              {currentTech.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botão Próximo com efeito visual */}
      <motion.div
        onClick={handleNext}
        className="mt-8 flex items-center justify-center w-40 h-12 cursor-pointer relative overflow-hidden rounded-lg"
      >
        <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl transition-transform transform active:scale-95">
          <TbBrandUnity className="mr-4"/>  Próxima
          </span>
        </button>

      </motion.div>
    </section>
  );
}

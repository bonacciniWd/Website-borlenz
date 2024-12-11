import React from 'react';
import { motion } from "framer-motion";
import { TbBrandWhatsapp } from "react-icons/tb";

const Card = ({ imageSrc, name, description, whatsappMessage }) => {
  const whatsappNumber = "5547992502202"; // Substitua pelo número de WhatsApp da empresa no formato internacional

  const handleWhatsappClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-brandBlack border h-auto border-brandBlue rounded-lg shadow-lg overflow-hidden">
      {/* Imagem de Capa */}
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-auto object-cover"
      />

      {/* Conteúdo do Card */}
      <div className="p-6 bg-[url('/bg.png')] bg-no-repeat h-auto bg-brandBlack text-brandWhite flex flex-col justify-between">
        {/* Título e Descrição */}
        <div>
          <h2 className="text-xl sm:text-xl md:text-2xl font-bold mb-2">{name}</h2>
          <p className="text-sm mr-4 sm:text-base md:text-lg mb-6">{description}</p>
        </div>

        {/* Rodapé com Imagem de Verificação e Botão */}
        <div className="flex items-center justify-between mt-4 mx-4">
          {/* Imagem de Verificação no canto inferior esquerdo */}
          <img
            src="./tag.png"
            alt="Verificado"
            className="w-16 py-2 h-auto sm:w-20"
          />

          {/* Botão para Abrir WhatsApp */}
          <motion.div
            className="flex items-center justify-center w-40 h-16 cursor-pointer relative overflow-hidden rounded-lg"
          >
            <button
              onClick={handleWhatsappClick}
              className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex text-sm text-brandWhite h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 font-medium hover:to-brandOrange backdrop-blur-3xl transition-transform transform active:scale-95">
                <TbBrandWhatsapp className="mr-2 text-brandWhite hover:to-brandOrange" />
                Contate-nos
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;

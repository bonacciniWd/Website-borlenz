// components/Card.js
import React from 'react';

const Card = ({ imageSrc, name, description, whatsappMessage }) => {
  return (
    <div className="bg-white border border-brandWhite rounded-lg shadow-lg overflow-hidden">
      {/* Imagem de Capa */}
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Conteúdo do Card */}
      <div className="p-6 bg-[url('/bg.png')] bg-brandBlack text-brandWhite flex flex-col justify-between h-64 sm:h-72 lg:h-80">
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
            className="w-16 py-2 h-auto sm:w-20" // Tamanho ajustado para mobile
          />

          {/* Botão no canto inferior direito */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-brandGray text-white rounded hover:bg-brandGreen transition-colors text-sm md:text-base"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Vrz() {
  const [frameIndex, setFrameIndex] = useState(0);
  const totalFrames = 210;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % totalFrames);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const framePath = `/frames/Motion_VRZ_Completa_${String(frameIndex).padStart(5, "0")}.png`;

  return (
    <div className="relative lg:h-[1400px] h-screen w-screen overflow-hidden bg-[url('/bg.png')] bg-cover bg-center flex flex-col items-center justify-start pt-8 md:pt-16">
      
      {/* Imagem de Fundo Fixa no Lado Direito Inferior */}
      <div className="absolute animate-space-drift bottom-0 right-0 lg:h-[600px] lg:w-[600px] md:h-[400px] md:w-[400px] h-[300px] w-[300px] bg-[url('/lua.png')] bg-contain bg-no-repeat opacity-80 pointer-events-none" />

      {/* Container de texto e imagem */}
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 items-center md:gap-4 text-center md:text-left text-brandWhite mt-8 md:mt-12 max-w-screen md:ml-20 mx-6 lg:ml-28">
        
        <div className="flex flex-col items-center md:items-start md:mx-6 lg:mx-8">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Conheça a VRZ Studio</h1>
          <p className="text-lg md:text-2xl mt-4 md:mt-6 mx-8 md:mx-0">
            Saia do mundo da Lua e conquiste o seu espaço no mundo digital. Fornecemos soluções reais para negócios reais.
          </p>
        </div>
        
        <div className="mt-6 md:mt-12 flex justify-center md:justify-end">
          <img
            src="/back-hero.png"
            alt="hero"
            className="animate-bounce mt-10 md:mt-0 w-80 sm:w-64 md:w-80 lg:w-[700px]"
          />
        </div>
      </div>

      {/* Animação da logo abaixo de todo o conteúdo */}
      <div className="absolute bottom-4 sm:bottom-16 md:bottom-16 lg:bottom-16 w-full flex items-center justify-center">
        <Image
          src={framePath}
          alt="Animação da logo"
          width={360}
          height={200}
          priority
          className="w-44 sm:w-1/2 md:w-1/3 lg:w-1/4" // Ajustando a largura para diferentes breakpoints
        />
      </div>

      
    </div>
  );
}

export default Vrz;

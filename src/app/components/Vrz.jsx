"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Vrz() {
  const [frameIndex, setFrameIndex] = useState(0);
  const totalFrames = 151;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % totalFrames);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const framePath = `/frames/frame-int/Motion_Logotipo${String(frameIndex).padStart(5, "0")}.png`;

  return (
    <div className="relative lg:h-[1400px] h-[1200px] w-auto overflow-hidden bg-[url('/bg.png')] bg-cover bg-center flex flex-col items-center justify-start pt-8 md:pt-16">
      
      {/* Imagem de Fundo Fixa no Lado Direito Inferior */}
      <div className="absolute animate-space-drift bottom-0 right-0 lg:h-[600px] md:h-[400px] h-[300px] bg-contain bg-no-repeat opacity-40 pointer-events-none md:mt-0 w-80 sm:w-64 md:w-80 lg:w-[600px]">
      <Image alt="lua" src="/lua.png" width={340} height={160} className="" />
      </div>

      {/* Container de texto e imagem */}
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 items-center md:gap-4 text-center md:text-left text-brandWhite mt-8 md:mt-12 max-w-screen md:ml-20 mx-6 lg:ml-28">
        <div className="flex flex-col items-center md:items-start md:mx-6 lg:mx-8 ">
        <Image
          src={framePath}
          alt="Animação da logo"
          width={360}
          height={200}
          priority
          className="w-[260px] sm:w-[300px] mb-2 md:w-[360px] lg:w-[400px] md:ml lg:ml-44" // Ajustando a largura para diferentes breakpoints
        />
          
        </div>
        
        <div className="mt-6 md:mt-6 flex justify-center">
          <Image src="/back-hero.png" alt="hero" width={320} height={210} className="animate-bounce mt-10 md:ml-10 lg:ml-14 md:mt-0 w-80 sm:w-80 md:w-80 lg:w-[600px] lg:mr-16"  />
        </div>
        <p className="text-base  sm:relative sm:text-xl md:text-2xl lg:text-3xl md:ml-20 lg:ml-20 mx-8">
        A <span className="font-black text-brandWhite">BORLENZ</span><span className="font-light text-brandOrange">®</span> tem orgulho de ter a <span className="font-black text-brandGreen">VRZ Software House </span> como parceira estratégica, especialista em soluções digitais inovadoras. A VRZ oferece um sistema de <span className="text-brandVrz font-black">CRM</span> Empresarial que centraliza dados para melhor gestão de leads e experiência do cliente, além de implementar chatbots com <span className="font-black text-brandVrz">IA</span> para interações rápidas e personalizadas. <br/><br/> Também desenvolve sites institucionais otimizados para SEO e com excelente experiência do usuário. Com foco em qualidade e inovação, a VRZ ajuda as empresas a melhorar sua presença online e transformar interações em resultados concretos.
        </p>
      </div>

      {/* Animação da logo abaixo de todo o conteúdo */}
     

      
    </div>
  );
}

export default Vrz;

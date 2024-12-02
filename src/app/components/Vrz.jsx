"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TbWorldBolt } from "react-icons/tb";
import { useState, useEffect } from "react";

function Vrz() {
  const [frameIndex, setFrameIndex] = useState(0);
  const totalFrames = 210; // Total de frames na animação
  const frameRate = 50; // Intervalo entre frames (em ms)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prevIndex) => (prevIndex + 1) % totalFrames);
    }, frameRate);

    return () => clearInterval(interval);
  }, []);

  const framePath = `/frames/Motion_VRZ_Completa_${String(frameIndex).padStart(5, "0")}.png`;

  return (
    <div className="relative lg:h-auto h-auto w-auto overflow-hidden bg-[url('/bg.png')] bg-cover bg-center flex flex-col items-center justify-start pt-8 md:pt-16">
      
      {/* Imagem de Fundo Fixa no Lado Direito Inferior */}
      <div className="absolute animate-space-drift bottom-0 right-0 lg:h-[600px] md:h-[600px] h-[500px] bg-contain bg-no-repeat opacity-40 pointer-events-none md:mt-0 w-80 sm:w-64 md:w-80 lg:w-[600px]">
      <Image alt="lua" src="/lua.png" width={340} height={160} className="" />
      </div>

      {/* Container de texto e imagem */}
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 items-center md:gap-4 text-center md:text-left text-brandWhite mt-8 md:mt-12 max-w-screen md:ml-20 mx-6 lg:ml-28">
      <div className="relative flex justify-center items-center mb-4">
        <img
          src={framePath}
          alt="Animação da logo VRZ"
          className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px]"
        />
      </div>
        
        <div className="mt-6 md:mt-6 flex justify-center">
          <Image src="/back-hero.png" alt="hero" width={320} height={210} className="animate-bounce mt-10 md:ml-10 lg:ml-14 md:mt-0 w-80 sm:w-80 md:w-80 lg:w-[400px] lg:mr-16"  />
        </div>
        <p className="text-base  sm:relative sm:text-xl md:text-xl lg:text-xl md:ml-20 lg:ml-20 lg:-mt-14 mx-8">
        A <span className="font-black text-brandWhite">BORLENZ</span><span className="font-light text-brandOrange">®</span> tem orgulho de ter a <span className="font-black text-brandGreen">VRZ Software House </span> como parceira estratégica, especialista em soluções digitais inovadoras. A VRZ oferece um sistema de <span className="text-brandVrz font-black">CRM</span> Empresarial que centraliza dados para melhor gestão de leads e experiência do cliente, além de implementar chatbots com <span className="font-black text-brandVrz">IA</span> para interações rápidas e personalizadas. <br/><br/> Também desenvolve sites institucionais otimizados para SEO e com excelente experiência do usuário. Com foco em qualidade e inovação, a VRZ ajuda as empresas a melhorar sua presença online e transformar interações em resultados concretos.
        </p>
      </div>

      
      <div className="flex-row justify-center items-center pt-10 lg:mt-4 xl:mt-4 mb-20 ">
        <Image 
          src="/tag-2.png" 
          alt="hero" 
          width={200} 
          height={40} 
          className="rounded-lg w-40 sm:w-40 md:w-40 lg:w-40 xl:w-40 lg:xl:mt-10"
        />

        {/* Botão Próximo com efeito visual */}
      <motion.div
        className="mt-8 flex items-center justify-center w-40 h-16 cursor-pointer relative overflow-hidden rounded-lg"
      >
       <Link href="https://vrzstudio.tech" target="_blank" passHref> 
          <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl transition-transform transform active:scale-95">
            <TbWorldBolt className="mr-2"/> Visitar Site
            </span>
          </button>
        </Link>
      </motion.div>
      </div>

    </div>
  );
}

export default Vrz;

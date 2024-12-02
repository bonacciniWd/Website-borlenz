"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const HeroSection = () => {
  return (
    <section
      id="home"
      style={{ borderBottomWidth: '1px' }}
      className="relative h-screen flex flex-col justify-center items-center bg-[url('/bg.png')] bg-cover bg-center border-brandWhite/60 bg-brandBlack text-center text-brandWhite pt-16 sm:pt-0 space-y-4 sm:space-y-8"
    >
      <h2 className="text-3xl -mt-20 jus mb-6 font-white uppercase mx-4 sm:text-5xl font-heading">
        <TextGenerateEffect
          words="Transformamos ideias em impacto visual"
          className="text-center text-[38px] font-white sm:text-5xl lg:text-5xl text-3xl"
        />
      </h2>
      <p className="text-lg font-light p-5 sm:text-2xl font-sans">
        Criação de Identidade Visual, Planejamento e Desenvolvimento de Negócios.
      </p>

      {/* Efeito de animação com framer-motion */}
      <div className="absolute xs:bottom-16 lg:bottom-16 bottom-24 w-full flex justify-center items-center">
        <a href="#sobre">
          <div className="w-[26px] h-[50px] md:w-[35px] md:h-[64px] lg:w-[35px] lg:h-[64px] rounded-3xl border-2 border-brandWhite flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-brandGreen mb-4"
            >
              
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

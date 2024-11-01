"use client"
import { motion } from "framer-motion";

const HeroSection =() => {
  return (
    <section 
      id="home" 
      style={{ borderBottomWidth: '1px'}}
      className="h-screen flex flex-col justify-center items-center bg-[url('/bg.png')] bg-cover bg-center border-brandWhite/60 bg-brandBlack text-center text-brandWhite"
    >
      <h2 className="text-3xl font-bold uppercase mx-4 sm:text-5xl font-heading mb-4">
        Transformamos ideias em impacto visual
      </h2>
      <p className="text-base mx-2 sm:text-2xl font-sans mb-8">
        Criação de Identidade Visual, Planejamento e Desenvolvimento de Negócios
      </p>
      

    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#services'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-brandGreen mb-1'
            >
              ㅤ
            </motion.div>  
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TrampolineImage = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <motion.div
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      animate={{
        scale: isHovered ? 1.2 : 1,
        y: isHovered ? -20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 10,
      }}
      className="cursor-pointer"
    >
      <img
        src={src}
        alt={alt}
        className="w-full lg:h-72 rounded-lg object-cover"
      />
    </motion.div>
  );
};

const Gallery = () => {
  const totalImages = 6;
  const images = Array.from({ length: totalImages }, (_, index) => `/cards/card-${index + 1}.jpg`);

  return (
    <div className="relative h-auto py-32 w-screen overflow-hidden bg-brandGray bg-[url('/bg-2.png')] bg-fixed bg-center flex items-center justify-center">
      <h1 className="absolute mt-4 top-10 mb-20 text-brandWhite text-3xl sm:text-4xl lg:text-5xl">Nosso Portfolio</h1>
      <div className="grid mx-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-auto h-auto p-4"> {/* Usando grid aqui */}
        {images.map((src, index) => (
          <TrampolineImage key={index} src={src} alt={`Portfolio Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

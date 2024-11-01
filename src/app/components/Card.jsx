
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ imageSrc, name, description, whatsappMessage }) => {
  return (
    <motion.div
      className="relative flex flex-col justify-between p-6 w-96 sm:w-72 h-80 md:w-96 bg-cover lg:w-[400px] bg-center rounded-lg shadow-lg text-white"
      style={{ backgroundImage: `url(${imageSrc})` }}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Overlay */}
      <div  style={{ borderBottomWidth: '0.10px' }} className="absolute inset-0 p-2 bottom-0 border-2 border-brandWhite shadow-brandGreen shadow-lg bg-black opacity-30 rounded-lg">
       
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold mb-2 mx-2 ">{name}</h3>
          <p className="text-sm  mb-4 mx-2">{description}</p>
        </div>

        {/* Button fixed at bottom-left */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-1 left-1 px-4 py-2 bg-brandGray text-white rounded hover:bg-brandGreen transition-colors"
        >
          Saiba mais
        </a>
      </div>
    </motion.div>
  );
};

export default Card;

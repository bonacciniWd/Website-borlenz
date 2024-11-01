"use client"
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones de hambúrguer e fechar

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header  style={{ borderBottomWidth: '0.10px' }} className="fixed w-full z-50  border-brandWhite/35 shadow-lg shadow-brandBlue/30 border-opacity-20  border-brandWhite bg-brandBlack/15 text-brandWhite backdrop-blur-md transition-all duration-300">
      <div className="max-w-screen lg:h-28 mx-auto px-4 flex items-center justify-between py-4">
        
        <div className="relative">
          <a href="#home">
            <Image 
              src="/logo.png" 
              alt="Borlenz Logo" 
              width={150} 
              height={50} 
              className="ml-4 lg:ml-24 md:ml-10" // Ajusta a logo conforme necessário
              priority
            />
          </a>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden font-bold md:flex gap-8 lg:mr-14 md:mr-10 lg:text-xl">
          <a href="#home" className="hover:text-brandGreen transition-colors">Início</a>
          <a href="#servicos" className="hover:text-brandOrange transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-brandGreen transition-colors">Sobre</a>
          <a href="#portfolio" className="hover:text-brandOrange transition-colors">Portfólio</a>
          <a href="#contato" className="hover:text-brandGreen transition-colors">Contato</a>
        </nav>

        {/* Ícone de Hambúrguer (Mobile) */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

     {/* Menu Mobile */}
    {isMenuOpen && (
      <div className="fixed rounded-lg font-extrabold uppercase top-20 right-10 w-24 max-w-xs py-2 transition-transform transform md:hidden bg-brandBlack/60 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center gap-6 text-sm p-4">
          <a href="#home" className="hover:text-brandGreen transition-colors" onClick={toggleMenu}>Início</a>
          <a href="#servicos" className="hover:text-brandOrange transition-colors" onClick={toggleMenu}>Serviços</a>
          <a href="#sobre" className="hover:text-brandGreen transition-colors" onClick={toggleMenu}>Sobre</a>
          <a href="#portfolio" className="hover:text-brandOrange transition-colors" onClick={toggleMenu}>Portfólio</a>
          <a href="#contato" className="hover:text-brandGreen transition-colors" onClick={toggleMenu}>Contato</a>
        </div>
      </div>
    )}
    </header>
  );
}

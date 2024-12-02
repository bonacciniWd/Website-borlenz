// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-brandBlack text-brandWhite py-10">
      <div className="max-w-full mx-auto px-4">
        {/* Navegação e Redes Sociais */}
        <div className="flex mx-8 flex-col md:flex-row justify-between items-center gap-6">
          {/* Navegação */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-base hover:text-brandGreen transition-colors">Início</a>
            <a href="#serviços" className="text-base hover:text-brandGreen transition-colors">Serviços</a>
            <a href="#sobre" className="text-base hover:text-brandGreen transition-colors">Sobre</a>
            <a href="#portfolio" className="text-base hover:text-brandGreen transition-colors">Portfólio</a>
            <a href="#contato" className="text-base hover:text-brandGreen transition-colors">Contato</a>
          </nav>

          {/* Redes Sociais */}
          <div className="flex gap-4 text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-brandGreen transition-colors"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-brandGreen transition-colors"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-brandGreen transition-colors"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-brandGreen transition-colors"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Divisor */}
        <hr className="border-brandGreen my-6" />

        {/* Direitos Autorais e Powered by */}
        <div className="mt-8 px-8 flex flex-col md:flex-row items-center justify-between text-center text-sm text-brandGray-light gap-4">
        <div className="flex-row items-center gap-2">
        <img src="/logo.png" alt="VRZ Studio Logo" className="w-18 mb-2 mx-auto h-10" />
          <div>© 2024 Borlenz. Todos os direitos reservados.</div>
        </div>  
          <div className="flex mt-6 items-center gap-2">
            <span>Powered by </span> <img src="/3.png" alt="VRZ Studio Logo" className="w-8 mb-2 mx-auto h-8 animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// components/Footer.js
export default function Footer() {
  
    return (
      <footer className="bg-brandBlack text-brandWhite py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Navegação */}
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#home" className="text-base hover:text-brandGreen transition-colors">Início</a>
              <a href="#servicos" className="text-base hover:text-brandGreen transition-colors">Serviços</a>
              <a href="#sobre" className="text-base hover:text-brandGreen transition-colors">Sobre</a>
              <a href="#portfolio" className="text-base hover:text-brandGreen transition-colors">Portfólio</a>
              <a href="#contato" className="text-base hover:text-brandGreen transition-colors">Contato</a>
            </nav>
  
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brandGreen transition-colors">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brandGreen transition-colors">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-brandGreen transition-colors">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brandGreen transition-colors">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
  
          {/* Direitos Autorais */}
          <div className="mt-8 text-center text-sm text-brandGray-light">
            © 2024 Borlenz. Todos os direitos reservados.
          </div>
        </div>

      </footer>
    );
  }
  
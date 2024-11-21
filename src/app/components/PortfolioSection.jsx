
export default function PortfolioSection() {
    const technologies = [
        { name: "Photoshop", icon: "/icons/photoshop.png" },
        { name: "Illustrator", icon: "/icons/illustrator.png" },
        { name: "Lightroom", icon: "/icons/lightroom.png" },
        { name: "Premiere", icon: "/icons/premiere.png" },
        { name: "Audition", icon: "/icons/audition.png" },
        { name: "AfterEffects", icon: "/icons/after.png" },
      ];
    
      return (
        <section 
          id="tecnologias" style={{ borderBottomWidth:'0.1px'}} 
          className="h-auto py-24 flex flex-col justify-center items-center bg-[url('/bg-1.png')] bg-fixed bg-brandBlack/20 shadow-2xl border-brandWhite shadow-brandWhite/80 text-center text-brandWhite"
        >
          <h2 className="text-3xl font-black text-center mb-12">Tecnologias Utilizadas</h2>
          <div className="grid mx-2 mt-12 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={tech.icon} alt={tech.name} className="w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 mb-4 rounded-xl shadow-lg shadow-brandBlue/80"  style={{ borderWidth: '0.10px' }} />
                <p className="text-lg text-brandWhite font-sans font-black">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>
      );
    }
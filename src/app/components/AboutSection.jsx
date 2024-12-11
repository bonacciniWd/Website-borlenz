"use client";

import { useEffect, useRef } from "react";


export default function AboutSection() {
  const videoRef = useRef(null); // Referência para o vídeo

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play(); // Reproduz o vídeo quando visível
        } else {
          videoRef.current.pause(); // Pausa o vídeo quando sai de vista
        }
      },
      { threshold: 0.5 } // O vídeo precisa estar 50% visível para ativar
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const sections = [
    {
      title: "Quem Somos",
      description:
        "A Borlenz é mais que uma agência de marketing – somos parceiros na construção de marcas que se conectam com propósito e autenticidade. Com mais de seis anos de experiência em comunicação, nosso fundador, Bruno Bordoli, lidera uma equipe multidisciplinar composta por especialistas em design, programação, administração e gestão. Juntos, traduzimos ideias em estratégias, entregando valor real em cada projeto.",
      videoSrc: "/video/1.mp4", // Apenas vídeo para este item
    },
    {
      title: "Nossa Missão",
      description: "Na Borlenz, comunicar é muito mais do que uma mensagem: é um ato de propósito. Buscamos inspirar, conectar e transformar através de uma comunicação acessível e verdadeira. Cada peça criada, cada palavra escolhida e cada detalhe visual são cuidadosamente planejados para transmitir valores, contando histórias com significado. Sejam artes para mídias sociais, projetos audiovisuais, identidade visual ou assessoria de marketing, nossa missão é clara – elevar a percepção e o impacto de cada marca com quem trabalhamos.",
      imageSrc: "/cards/card-7.jpg",
    },
    {
      title: "Nossos Valores",
      description: "Acreditamos em servir com verdade, honrando a imagem e o propósito de cada cliente. Nosso trabalho é sustentado pelo respeito, pela atenção aos detalhes e pelo comprometimento com a excelência. Para nós, criatividade é mais que uma técnica; é uma forma de traduzir ideias em experiências, buscando sempre soluções inovadoras para conectar marcas e públicos.",
      imageSrc: "/cards/card-9.jpg",
    },
    {
      title: "Nossa Visão",
      description: "Queremos ser reconhecidos como uma referência em comunicação criativa, elevando o nível conceitual e estratégico dos projetos com que nos envolvemos. Mais do que entregar um trabalho, queremos transformar a maneira como as marcas são percebidas e como o público se envolve com elas.",
      imageSrc: "/cards/card-10.jpg",
    },
    {
      title: "Nosso Atendimento",
      description: "Na Borlenz, cada projeto começa com uma conversa. Para nós, o cliente não é apenas um ponto de partida, mas uma parceria que conduz a cada etapa do processo. Trabalhamos de forma próxima e colaborativa, buscando não apenas executar a ideia inicial, mas encontrar juntos a solução ideal que irá posicionar estrategicamente sua marca no mercado.",
      imageSrc: "/cards/card-11.jpg",
    },
    {
      title: "Nossa Abordagem Criativa",
      description: "A criatividade é a essência do nosso trabalho. Para a Borlenz, design é uma linguagem poderosa e a nossa forma de comunicar. Não são os softwares ou os computadores que definem um bom artista – é o espírito criativo. Com visão e técnica, transformamos conceitos em narrativas visuais que inspiram, engajam e deixam uma marca duradoura.",
      imageSrc: "/cards/card-12.jpg",
    },
    ];
    

  return (
    <section id="sobre" className="py-20 bg-brandWhite text-brandGray">
      <div className="max-w-6xl mx-auto px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } items-center lg:gap-28 gap-8 py-8`}
          >
            {/* Texto */}
            <div className="flex-1">
              <h2 className="lg:text-4xl text-3xl mb-4 font-heading font-bold">
                {section.title}
              </h2>
              <p className="text-xl mx-2 font-thin">{section.description}</p>
            </div>

            {/* Mídia (vídeo ou imagem) */}
            <div className="flex-1">
              {section.videoSrc ? (
                <video
                  src={section.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-3xl shadow-lg shadow-brandGray w-full h-auto"
                >
                  Seu navegador não suporta vídeos.
                </video>
          
              ) : (
                <img
                  src={section.imageSrc}
                  alt={section.title}
                  className="rounded-3xl shadow-lg shadow-brandGray w-full h-auto"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





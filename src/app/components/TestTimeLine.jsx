"use client";
import React from "react";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TestTimeLine = () => {
  const steps = [
    {
      title: "Briefing",
      description: "No início de cada projeto, realizamos um profundo entendimento do cliente e das suas necessidades. Esta etapa é crucial para alinhar expectativas e garantir que todas as nuances do projeto sejam consideradas. Utilizamos entrevistas e questionários para captar informações relevantes, permitindo que a equipe tenha uma visão clara dos objetivos e desafios do cliente.",
      iconStyle: { background: "#161f24" },
      icon: '/numeros/1.png',
    },
    {
      title: "Conceito",
      description: "Após o levantamento de necessidades, passamos para a definição do conceito criativo e visual. Aqui, nossa equipe se dedica a transformar as informações coletadas em um conceito coerente que reflita a identidade e os valores do cliente. Essa fase envolve brainstorming, pesquisa de referências e criação de moodboards que guiarão o desenvolvimento visual.",
      iconStyle: { background: "#161f24" },
      icon: '/numeros/2.png',
    },
    {
      title: "Produção",
      description: "Com o conceito aprovado, iniciamos o desenvolvimento dos elementos gráficos e da identidade visual. Nessa etapa, trabalhamos na criação de logotipos, paletas de cores, tipografias e outros elementos visuais que comporão a identidade do projeto. Nossa equipe de designers se dedica a garantir que cada elemento seja estéticamente agradável e funcione em harmonia com o conceito definido.",
      iconStyle: { background: "#161f24" },
      icon: '/numeros/3.png',
    },
    {
      title: "Entrega",
      description: "Finalmente, chegamos à fase de apresentação e entrega do projeto final. Realizamos uma apresentação detalhada, onde mostramos todos os elementos criados e como eles se interconectam para formar a identidade visual completa. Após a aprovação final, entregamos os arquivos em diversos formatos, assegurando que o cliente tenha tudo o que precisa para implementar a nova identidade visual em suas plataformas.",
      iconStyle: { background: "#161f24" },
      icon: '/numeros/4.png',
    }
  ];
  

  return (
    <div className="h-auto flex flex-col justify-center items-center bg-[url('/bg-2.png')] bg-fixed bg-center bg-brandGray shadow-2xl border-brandWhite shadow-brandWhite/80 text-center text-brandWhite">
      <h1 className="py-8 mt-20 font-black text-2xl md:text-4xl lg:text-4xl">
      Roteiro de Operação - <span className="text-brandGreen">BORLENZ®</span>
      </h1>
      <VerticalTimeline animate={true}>
        {steps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            date={step.date}
            iconStyle={step.iconStyle}
            contentStyle={{
              background: `url('/bg.png') no-repeat center center / cover #0f1214`,
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "2%",
              marginBottom: "18%",
              
              padding: "20px",
            }}
            contentArrowStyle={{ borderRight: "18px solid #04d789" }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={step.icon}
                  alt="Icone"
                  className='w-[90%] h-[90%] object-contain rounded-full animate-pulse'
                />
              </div>
            }
          >
            <h3 className="text-xl md:text-2xl lg:text-4xl font-black">{step.title}</h3>
            <p className="text-lg md:text-xl lg:text-2xl my-4 mx-2 pt-6 pb-10">
              {step.description}
            </p>
            {/* Componente <Image> movido para o final do card */}
            <div className="mt-4">
              <Image src="/tag.png" alt="borlenz" width={60} height={60} />
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>  
  );
};

export default TestTimeLine;

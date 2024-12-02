"use client";
import React from "react";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TestTimeLine = () => {
  const steps = [
    {
      title: "Briefing",
      description: ` • Realização de entrevistas e questionários.<br /><br />
                     • Identificação das expectativas e desafios do cliente.<br /><br />
                     • Compreensão profunda para alinhar visão e objetivos do projeto.`,
      iconStyle: { background: "#161f24" },
      icon: '/numeros/1.png',
    },
    {
      title: "Conceito",
      description: `• Transformação das informações coletadas em um conceito visual coerente. <br /><br />
                    •  Desenvolvimento por meio de brainstorming, pesquisa de referências e criação de moodboards. <br /><br />
                    •  Reflexão da identidade e valores do cliente no conceito criado.`,
      iconStyle: { background: "#161f24" },
      icon: '/numeros/2.png',
    },
    {
      title: "Produção",
      description: `• Criação de logotipos, paletas de cores e tipografias. <br /><br />
                   • Design de elementos que integram a identidade visual do projeto. <br /><br />
                   • Garantia de harmonia estética e funcionalidade visual.`,
      iconStyle: { background: "#161f24" },
      icon: '/numeros/3.png',
    },
    {
      title: "Entrega",
      description: ` • Apresentação detalhada dos elementos criados e sua interconexão.<br /><br />
                    • Entrega de arquivos em diversos formatos.<br /><br />
                   • Suporte para a implementação da nova identidade visual em plataformas do cliente.`,
      iconStyle: { background: "#161f24" },
      icon: '/numeros/4.png',
    }
  ];
  
  

  return (
    <div className="h-auto flex flex-col justify-center items-center bg-[url('/bg-2.png')] bg-no-repeat bg-fixed shadow-2xl  text-center text-brandWhite">
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
                  className='w-[90%] h-[90%] object-contain rounded-full'
                />
              </div>
            }
          >
            <h3 className="text-xl md:text-2xl lg:text-4xl font-black">{step.title}</h3>
            <p
              className="text-2xl md:text-xl py-3 text-left"
              dangerouslySetInnerHTML={{ __html: step.description }}
            ></p>

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


"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";



const TestTimeLine = () => {  // Observe o nome aqui: TestTimeLine
  const steps = [
    {
      title: "Descoberta e Planejamento",
      description: "Consultoria e Levantamento de Requisitos",
      date: "📝🤝",
      iconStyle: { background: "#3B82F6" }
    },
    {
      title: "Arquitetura e Design de Soluções",
      description: "Arquitetura do Sistema e UX/UI Design",
      date: "🖌️🏗️",
      iconStyle: { background: "#10B981" }
    },
    {
      title: "Desenvolvimento e Integração",
      description: "Codificação e Implementação",
      date: "💻👨‍💻",
      iconStyle: { background: "#F59E0B" }
    },
    {
      title: "Testes e Qualidade",
      description: "Garantia de Qualidade e Testes",
      date: "🧪🛠️",
      iconStyle: { background: "#EF4444" }
    },
    {
      title: "Implantação e Suporte Contínuo",
      description: "Entrega e Pós-lançamento",
      date: "🚀🔧",
      iconStyle: { background: "#8B5CF6" }
    }
  ];
  
  const linearGradientBackground = "linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8))";

  return (
    <VerticalTimeline>
      {steps.map((step, index) => (
        <VerticalTimelineElement
          key={index}
          date={step.date}
          iconStyle={step.iconStyle}
          contentStyle={{
            background: linearGradientBackground, 
            color: "#fff",
            border: "1px solid #5f11efd2",
            borderRadius: "4%",
          }}
        >
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default TestTimeLine;  // Exporta com o nome consistente

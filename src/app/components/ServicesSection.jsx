// components/ServicesSection.js
"use client";
import Card from './Card'; // Importando o componente Card

export default function ServicesSection() {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 bg-[url('/bg-2.png')] bg-fixed bg-center bg-brandGray text-brandWhite"
      id="services"
    >
      <h2 className="md:text-5xl text-4xl font-heading mb-20 mt-10 text-center font-black text-brandWhite">
        Nossos Serviços
      </h2>
      <div className="grid gap-6 p-4 sm:px-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen max-h-auto mx-auto">
        <Card
          imageSrc="/cards/card-1.jpg"
          name="Identidade Visual"
          description="Capturamos momentos únicos de eventos, como casamentos e festas, com filmagens aéreas que oferecem uma perspectiva incrível."
          whatsappMessage="Estou interessado na Filmagem Aérea de Eventos. Pode me dar mais informações?"
        />
        <Card
          imageSrc="/cards/card-2.jpg"
          name="Material Criativo Impresso"
          description="Oferecemos serviços de inspeção industrial e de infraestrutura utilizando drones, garantindo eficiência e segurança em locais de difícil acesso."
          whatsappMessage="Olá, tenho interesse nas Inspeções com Drone. Pode me dar mais detalhes?"
        />
        <Card
          imageSrc="/cards/card-3.jpg"
          name="Criação de conteúdo digital"
          description="Realizamos levantamentos topográficos precisos com drones, proporcionando dados detalhados para projetos de engenharia, construção e planejamento urbano."
          whatsappMessage="Gostaria de saber mais sobre o Levantamento Topográfico com Drone."
        />
        <Card
          imageSrc="/cards/card-4.jpg"
          name="Captação de fotos e vídeos"
          description="Nosso sistema de CRM (Customer Relationship Management) oferece uma solução completa para gerenciar informações sobre clientes."
          whatsappMessage="Estou interessado em Filmagens Promocionais. Pode me dar mais informações?"
        />
        <Card
          imageSrc="/cards/card-6.jpg"
          name="Posicionamento digital"
          description="Crie conteúdo visual impactante para sua marca com nossas filmagens promocionais. Os drones proporcionam uma visão única que pode destacar seu produto ou serviço."
          whatsappMessage="Estou interessado em Filmagens Promocionais. Pode me dar mais informações?"
        />
        <Card
          imageSrc="/cards/card-5.jpg"
          name="Site Institucional"
          description="Crie conteúdo visual impactante para sua marca com nossas filmagens promocionais. Os drones proporcionam uma visão única que pode destacar seu produto ou serviço."
          whatsappMessage="Estou interessado em Filmagens Promocionais. Pode me dar mais informações?"
        />
      </div>
    </section>
  );
}

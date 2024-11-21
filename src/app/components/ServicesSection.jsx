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
          description="Desenvolvemos uma identidade visual única e estratégica para a sua marca. Através de cores, tipografia e elementos visuais bem definidos, criamos uma presença marcante que comunica a essência do seu negócio e fortalece a conexão com o público."
          whatsappMessage="Estou interessado na Filmagem Aérea de Eventos. Pode me dar mais informações?"
        />
        <Card
          imageSrc="/cards/card-2.jpg"
          name="Criativos Impressos"
          description="Produzimos materiais impressos personalizados que refletem a identidade da sua marca. Desde cartões de visita a folhetos e banners, garantimos qualidade visual e comunicação clara para impactar o público de forma memorável."
          whatsappMessage="Olá, tenho interesse nas Inspeções com Drone. Pode me dar mais detalhes?"
        />
        <Card
          imageSrc="/cards/card-3.jpg"
          name="Criativos para mídias sociais"
          description="Desenvolvemos conteúdos digitais estratégicos que engajam e inspiram. De posts para redes sociais a newsletters, nosso foco é comunicar de forma autêntica e alinhada aos objetivos da sua marca, aumentando sua presença online"
          whatsappMessage="Gostaria de saber mais sobre o Levantamento Topográfico com Drone."
        />
        <Card
          imageSrc="/cards/card-4.jpg"
          name="Captação de fotos e vídeos"
          description="Realizamos a captação de fotos e vídeos com equipamentos de alta qualidade, assegurando imagens e áudios nítidos e impactantes. Nossa equipe técnica captura momentos que refletem a essência da sua marca, criando um acervo visual rico e envolvente."
          whatsappMessage="Estou interessado em Filmagens Promocionais. Pode me dar mais informações?"
        />
        <Card
          imageSrc="/cards/card-6.jpg"
          name="Posicionamento digital"
          description="Personalizamos perfis nas redes sociais com elementos que refletem a identidade da marca e atraem o público. Estruturamos uma proposta de valor clara, incluindo links, configurações e também descrições que destacam a oferta da marca."
          whatsappMessage="Estou interessado em Filmagens Promocionais. Pode me dar mais informações?"
        />
        <Card
          imageSrc="/cards/card-5.jpg"
          name="Gestão de tráfego"
          description="O tráfego pago atrai visitantes para seu site ou landing page através de anúncios em plataformas como Google Ads e redes sociais. Na Borlenz, o gestor de tráfego pago planeja, executa e otimiza campanhas para garantir o melhor retorno sobre o investimento (ROI)."
          whatsappMessage="Estou interessado em Filmagens Promocionais. Pode me dar mais informações?"
        />
      </div>
    </section>
  );
}

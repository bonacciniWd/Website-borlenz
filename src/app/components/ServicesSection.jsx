// components/ServicesSection.js
"use client";
import Card from './Card'; // Importando o componente Card

export default function ServicesSection() {
  return (
    <section
      className="flex flex-col items-center bg-[url('/bg-2.png')] bg-fixed shadow-2xl text-center py-10"
      id="serviços"
    >
      <h2 className="md:text-5xl text-4xl font-heading mb-20 mt-10 text-center font-black text-brandWhite">
        Nossos Serviços
      </h2>
      <div className="grid gap-6 p-4 sm:px-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen max-h-auto mx-auto">
        <Card
          imageSrc="/cards/card-1.jpg"
          name="Identidade Visual"
          description="Desenvolvemos uma identidade visual única e estratégica para a sua marca. Através de cores, tipografia e elementos visuais bem definidos, criamos uma presença marcante que comunica a essência do seu negócio e fortalece a conexão com o público."
          whatsappMessage="Olá, BORLENZ vi aqui sobre Identidade Visual. Quero saber melhor como funciona esse serviço, valores e demais informações. Podemos agendar uma reunião?"
        />
        <Card
          imageSrc="/cards/card-2.jpg"
          name="Criativos Impressos"
          description="Produzimos materiais impressos personalizados que refletem a identidade da sua marca. Desde cartões de visita a folhetos e banners, garantimos qualidade visual e comunicação clara para impactar o público de forma memorável."
          whatsappMessage="Olá, BORLENZ vi aqui sobre Criativos Impressos. Quero saber melhor como funciona esse serviço, valores e demais informações. Podemos agendar uma reunião?"
        />
        <Card
          imageSrc="/cards/card-3.jpg"
          name="Criativos para mídias sociais"
          description="Desenvolvemos conteúdos digitais estratégicos que engajam e inspiram. De posts para redes sociais a newsletters, nosso foco é comunicar de forma autêntica e alinhada aos objetivos da sua marca, criando ou aumentando sua presença online."
          whatsappMessage="Olá, BORLENZ vi aqui sobre Criativos para mídias sociais. Quero saber melhor como funciona esse serviço, valores e demais informações. Podemos agendar uma reunião?"
        />
        <Card
          imageSrc="/cards/card4.jpg"
          name="Site Comercial"
          description="Na Borlenz, cuidamos de tudo para que seu site institucional seja completo e estratégico. Da estrutura ao design, da experiência do usuário à integração Google, entregamos resultados que fazem a diferença. Com suporte especializado da VRZ e monitoramento contínuo, garantimos que sua marca esteja sempre à frente."
          whatsappMessage="Olá, BORLENZ vi aqui sobre Site Comercial. Quero saber melhor como funciona esse serviço, valores e demais informações. Podemos agendar uma reunião?"
        />
        <Card
          imageSrc="/cards/card5.jpg"
          name="Posicionamento digital"
          description="Personalizamos perfis nas redes sociais com elementos que refletem a identidade da marca e atraem o público. Estruturamos uma proposta de valor clara, incluindo links, configurações e também descrições que destacam a oferta da marca."
          whatsappMessage="Olá, BORLENZ vi aqui sobre Posicionamento Digital. Quero saber melhor como funciona esse serviço, valores e demais informações. Podemos agendar uma reunião?"
        />
        <Card
          imageSrc="/cards/card6.jpg"
          name="Gestão de tráfego"
          description="O tráfego pago atrai visitantes para seu site ou landing page através de anúncios em plataformas como Google Ads e redes sociais. Na Borlenz, o gestor de tráfego pago planeja, executa e otimiza campanhas para garantir o melhor retorno sobre o investimento (ROI)."
          whatsappMessage="Olá, BORLENZ vi aqui sobre Gestão de Tráfego. Quero saber melhor como funciona esse serviço, valores e demais informações. Podemos agendar uma reunião?"
        />
      </div>
    </section>
  );
}

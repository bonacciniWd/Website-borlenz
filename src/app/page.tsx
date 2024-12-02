import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import RouteMapSection from "./components/RouteMapSection";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer"
import EmbedModel from "./components/EmbedModel";
import Vrz from "./components/Vrz";
import TestTimeLine from "./components/TestTimeLine"; 
import PortfolioSection from "./components/PortfolioSection";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <TestTimeLine />
        <RouteMapSection />
        <BlogPage />
        <Vrz />
        <EmbedModel />
        <Footer />
      </main>
    </div>
  );
}

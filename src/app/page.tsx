import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import RouteMapSection from "./components/RouteMapSection";
import Footer from "./components/Footer";
import Vrz from "./components/Vrz";
import TestTimeLine from "./components/TestTimeLine"; 
import PortfolioSection from "./components/PortfolioSection";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestTimeLine />
        <Gallery />
        <PortfolioSection />
        <Vrz />
        <RouteMapSection />
        <Footer />
      </main>
    </div>
  );
}

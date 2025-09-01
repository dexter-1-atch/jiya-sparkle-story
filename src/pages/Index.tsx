import HeroSection from "@/components/HeroSection";
import ChatSection from "@/components/ChatSection";
import BasketballSection from "@/components/BasketballSection";
import PhotoGallery from "@/components/PhotoGallery";
import InteractiveGames from "@/components/InteractiveGames";
import InteractiveParticles from "@/components/InteractiveParticles";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <InteractiveParticles />
      <FloatingNav />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="chat">
        <ChatSection />
      </section>
      
      <section id="basketball">
        <BasketballSection />
      </section>
      
      <section id="gallery">
        <PhotoGallery />
      </section>
      
      <section id="games">
        <InteractiveGames />
      </section>
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-start justify-start overflow-hidden">
      {/* Hero Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Professional_Mode_make_the_wind_naturaly_go_very_s.mp4" type="video/mp4" />
      </video>
      
      {/* Hero Content - Top Left Positioned */}
      <div className="relative z-20 p-8 md:p-16 lg:p-24 max-w-2xl animate-fade-in-slow">
        <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-soft-white mb-6 leading-tight">
          Jardins de la
          <span className="block text-sage-green">Côte d'Azur</span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-soft-white/90 mb-8 leading-relaxed max-w-lg">
          L'art du jardin méditerranéen depuis trois générations. 
          Nous créons des espaces verts d'exception qui capturent l'essence éternelle de la Riviera française.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="minimal" size="xl" className="font-inter font-medium hover-scale animate-fade-in transform transition-all duration-300 hover:animate-glow-pulse">
            Nos savoir-faire
          </Button>
          <Button variant="luxury" size="xl" className="font-inter font-medium hover-scale animate-fade-in transform transition-all duration-300 hover:shadow-luxury hover:scale-110">
            Consultation privée
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
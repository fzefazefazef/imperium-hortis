import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button3DWrapper } from "@/components/Button3DWrapper";

const HeroSection = () => {
  const { ref: buttonsRef, isIntersecting: buttonsVisible } = useIntersectionObserver();

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
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Jardins de la
          <span className="block text-sage-green drop-shadow-md">Côte d'Azur</span>
        </h1>
        
        <p className="font-opensans text-lg md:text-xl text-white mb-8 leading-relaxed max-w-lg drop-shadow-md">
          L'art du jardin méditerranéen depuis trois générations. 
          Nous créons des espaces verts d'exception qui capturent l'essence éternelle de la Riviera française.
        </p>
        
        <div 
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
            buttonsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Button3DWrapper 
            isVisible={buttonsVisible} 
            delay={0.2}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="minimal" 
              size="xl" 
              className={`font-opensans font-semibold hover-scale transform transition-all duration-500 hover:animate-glow-pulse w-full text-white border-2 border-white/80 hover:border-sage-green ${
                buttonsVisible ? 'animate-fade-in' : ''
              }`}
              style={{ 
                animationDelay: buttonsVisible ? '0.2s' : '0s',
                background: buttonsVisible ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
              }}
            >
              Nos savoir-faire
            </Button>
          </Button3DWrapper>
          
          <Button3DWrapper 
            isVisible={buttonsVisible} 
            delay={0.4}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="luxury" 
              size="xl" 
              className={`font-opensans font-semibold hover-scale transform transition-all duration-500 hover:shadow-luxury hover:scale-110 w-full text-white border-2 border-white/60 hover:border-sage-green ${
                buttonsVisible ? 'animate-fade-in' : ''
              }`}
              style={{ 
                animationDelay: buttonsVisible ? '0.4s' : '0s',
                background: buttonsVisible ? 'rgba(34, 197, 94, 0.05)' : 'transparent'
              }}
            >
              Consultation privée
            </Button>
          </Button3DWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
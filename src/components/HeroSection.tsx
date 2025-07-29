import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button3DWrapper } from "@/components/Button3DWrapper";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { ref: buttonsRef, isIntersecting: buttonsVisible } = useIntersectionObserver();

  return (
    <section className="relative h-screen flex items-start justify-start overflow-hidden bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-sage-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-64 h-64 bg-sage-green/3 rounded-full blur-2xl"></div>
      
      {/* Hero Background Video */}
      <video 
        className="absolute inset-0 w-3/5 aspect-video object-contain z-0 mx-auto my-auto rounded-3xl shadow-luxury border border-sage-green/10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Professional_Mode_Transform_this_still_image_into_.mp4" type="video/mp4" />
      </video>
      

      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-30">
        <div className="flex space-x-12">
          {[
            { name: "PHILOSOPHIE", path: "/philosophie" },
            { name: "NOS SERVICES", path: "/services" },
            { name: "PORTFOLIO", path: "/portfolio" },
            { name: "CONTACT", path: "/contact" }
          ].map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-cinzel text-base font-medium text-soft-white/90 hover:text-sage-green transition-all duration-300 hover:scale-105 tracking-wider"
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      
      {/* Hero Content - Top Left Positioned */}
      <div className="absolute left-0 top-0 z-20 pl-4 md:pl-6 lg:pl-8 pt-32 md:pt-40 lg:pt-48 max-w-2xl animate-fade-in-slow">
        <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold text-soft-white mb-6 leading-tight">
          Imperium
          <span className="block text-sage-green">Hortis</span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-soft-white/90 mb-8 leading-relaxed max-w-lg">
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
              className={`font-inter font-medium hover-scale transform transition-all duration-500 hover:animate-glow-pulse w-full ${
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
              className={`font-inter font-medium hover-scale transform transition-all duration-500 hover:shadow-luxury hover:scale-110 w-full ${
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
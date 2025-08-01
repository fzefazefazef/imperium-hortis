import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button3DWrapper } from "@/components/Button3DWrapper";
import { Logo3D } from "@/components/Logo3D";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { ref: buttonsRef, isIntersecting: buttonsVisible } = useIntersectionObserver();
  const { setLanguage, t } = useLanguage();

  return (
    <section className="relative h-screen flex items-start justify-start overflow-hidden bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-whisper-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-64 h-64 bg-whisper-gold/3 rounded-full blur-2xl"></div>
      
      {/* Hero Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Professional_Mode_Transform_this_still_image_into_.mp4" type="video/mp4" />
      </video>
      
      
      
      {/* Language Selector */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-6">
          <Button 
            variant="ghost" 
            size="xl" 
            className="p-2 h-auto hover:bg-soft-white/10 transition-all duration-300 -mt-1"
            title="Français"
            onClick={() => setLanguage('fr')}
          >
            <svg width="192" height="128" viewBox="0 0 24 16" className="border border-gray-400">
              <rect width="8" height="16" fill="#0055A4"/>
              <rect x="8" width="8" height="16" fill="#FFFFFF"/>
              <rect x="16" width="8" height="16" fill="#EF4135"/>
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="xl" 
            className="p-2 h-auto hover:bg-soft-white/10 transition-all duration-300 -mt-1"
            title="English"
            onClick={() => setLanguage('en')}
          >
            <svg width="192" height="128" viewBox="0 0 24 16" className="border border-gray-400">
              <rect width="24" height="16" fill="#012169"/>
              <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFFFFF" strokeWidth="2"/>
              <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1"/>
              <rect x="10" width="4" height="16" fill="#FFFFFF"/>
              <rect width="24" height="3" y="6.5" fill="#FFFFFF"/>
              <rect x="11" width="2" height="16" fill="#C8102E"/>
              <rect width="24" height="1.5" y="7.25" fill="#C8102E"/>
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="xl" 
            className="p-2 h-auto hover:bg-soft-white/10 transition-all duration-300 -mt-1"
            title="Italiano"
            onClick={() => setLanguage('it')}
          >
            <svg width="192" height="128" viewBox="0 0 24 16" className="border border-gray-400">
              <rect width="8" height="16" fill="#009246"/>
              <rect x="8" width="8" height="16" fill="#FFFFFF"/>
              <rect x="16" width="8" height="16" fill="#CE2B37"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-30">
        <div className="flex space-x-8">
          {[
            { name: t('nav.philosophie'), path: "/philosophie" },
            { name: t('nav.services'), path: "/services" },
            { name: t('nav.portfolio'), path: "/portfolio" },
            { name: t('nav.contact'), path: "/contact" }
          ].map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-cinzel-decorative text-sm font-medium text-white hover:text-whisper-gold transition-all duration-300 hover:scale-105 tracking-wider"
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
      
      {/* Hero Content - Left Center Positioned */}
      <div className="absolute left-0 top-[40%] z-20 pl-4 md:pl-6 lg:pl-8 max-w-2xl animate-fade-in-slow">
        <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Imperium
          <span className="block text-whisper-gold">Hortis</span>
        </h1>
        
        <p className="font-cinzel text-lg md:text-xl text-white mb-8 leading-relaxed max-w-lg">
          {t('hero.subtitle')}
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
              variant="hero-minimal" 
              size="xl"
              className={`font-playfair font-medium hover-scale transform transition-all duration-500 w-full mt-75 relative overflow-hidden ${
                buttonsVisible ? 'animate-fade-in animate-golden-wave' : ''
              }`}
              style={{ 
                animationDelay: buttonsVisible ? '0.2s' : '0s',
                background: buttonsVisible ? 'linear-gradient(45deg, rgba(255, 215, 0, 0.3), rgba(255, 193, 7, 0.4), rgba(255, 215, 0, 0.3))' : 'transparent',
                backgroundSize: '200% 200%',
                boxShadow: buttonsVisible ? '0 0 40px rgba(255, 215, 0, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.2)' : 'none'
              }}
            >
              {t('hero.btn.services')}
            </Button>
          </Button3DWrapper>
          
          <Button3DWrapper 
            isVisible={buttonsVisible} 
            delay={0.4}
            className="w-full sm:w-auto"
          >
            <Button 
              variant="hero-luxury" 
              size="xl"
              className={`font-cinzel font-medium hover-scale transform transition-all duration-500 hover:shadow-luxury hover:scale-110 w-full relative overflow-hidden ${
                buttonsVisible ? 'animate-fade-in animate-amber-flow' : ''
              }`}
              style={{ 
                animationDelay: buttonsVisible ? '0.4s' : '0s',
                background: buttonsVisible ? 'linear-gradient(135deg, rgba(255, 126, 95, 0.4), rgba(255, 193, 7, 0.5), rgba(255, 171, 64, 0.4))' : 'transparent',
                backgroundSize: '300% 300%',
                boxShadow: buttonsVisible ? '0 0 35px rgba(255, 171, 64, 0.6), inset 0 0 25px rgba(255, 193, 7, 0.3)' : 'none'
              }}
            >
              {t('hero.btn.consultation')}
            </Button>
          </Button3DWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
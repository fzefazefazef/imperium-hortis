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
      <div className="absolute top-20 right-20 w-96 h-96 bg-sage-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-64 h-64 bg-sage-green/3 rounded-full blur-2xl"></div>
      
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
      
      {/* Logo Imperium Hortis en haut à gauche */}
      <div className="absolute top-8 left-8 z-30">
        <img 
          src="/lovable-uploads/fe4099f2-7464-40e9-aecb-0e0792444553.png"
          alt="Imperium Hortis Logo"
          className="w-20 h-20 object-contain filter drop-shadow-lg"
        />
      </div>
      
      
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
            <svg width="96" height="64" viewBox="0 0 24 16" className="border border-gray-400">
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
            <svg width="96" height="64" viewBox="0 0 24 16" className="border border-gray-400">
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
            <svg width="96" height="64" viewBox="0 0 24 16" className="border border-gray-400">
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
              className="font-cinzel text-sm font-medium text-soft-white/90 hover:text-sage-green transition-all duration-300 hover:scale-105 tracking-wider"
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
        <h1 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold text-soft-white mb-6 leading-tight">
          Imperium
          <span className="block text-sage-green">Hortis</span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl text-soft-white/90 mb-8 leading-relaxed max-w-lg">
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
              variant="minimal" 
              size="xl" 
              className={`font-inter font-medium hover-scale transform transition-all duration-500 hover:animate-glow-pulse w-full mt-75 ${
                buttonsVisible ? 'animate-fade-in' : ''
              }`}
              style={{ 
                animationDelay: buttonsVisible ? '0.2s' : '0s',
                background: buttonsVisible ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
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
              {t('hero.btn.consultation')}
            </Button>
          </Button3DWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
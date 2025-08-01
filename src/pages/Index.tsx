import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button3DWrapper } from "@/components/Button3DWrapper";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo3D } from "@/components/Logo3D";

const Index = () => {
  const { t } = useLanguage();
  const { ref: servicesRef, isIntersecting: servicesVisible } = useIntersectionObserver();
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: contactButtonsRef, isIntersecting: contactButtonsVisible } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Logo 3D en haut à gauche */}
      <div className="fixed top-4 left-4 z-50">
        <Logo3D 
          width="w-24"
          height="h-24"
          scale={0.5}
          enableControls={false}
          autoRotate={true}
        />
      </div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-deep-charcoal to-midnight-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-semibold text-soft-white mb-8">
                {t('about.title')}
              </h2>
              <p className="font-cinzel text-lg text-soft-white/80 mb-6 leading-relaxed">
                {t('about.intro.text1')}
              </p>
              <p className="font-cinzel text-lg text-soft-white/80 leading-relaxed">
                {t('about.intro.text2')}
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-video bg-gradient-accent rounded-2xl shadow-luxury border border-whisper-gold/20 flex items-center justify-center">
                <p className="font-cinzel text-soft-white/60 text-center px-8">
                  [{t('about.gallery')}]
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-whisper-gold/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-midnight-blue/50">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={titleRef}
            className={`font-cinzel text-3xl md:text-4xl lg:text-5xl font-semibold text-soft-white text-center mb-16 transition-all duration-1000 ${
              titleVisible 
                ? 'opacity-100 translate-y-0 animate-fade-in' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            {t('home.services.title')}
          </h2>
          
          <div 
            ref={servicesRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: t('home.services.gardens.title'),
                description: t('home.services.gardens.desc'),
                icon: "🌿"
              },
              {
                title: t('home.services.terraces.title'), 
                description: t('home.services.terraces.desc'),
                icon: "🏔️"
              },
              {
                title: t('home.services.art.title'),
                description: t('home.services.art.desc'),
                icon: "🌳"
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-card border border-whisper-gold/20 hover:border-whisper-gold/40 transition-all duration-700 hover:shadow-glow hover:scale-105 transform ${
                  servicesVisible 
                    ? 'opacity-100 translate-y-0 animate-fade-in' 
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ 
                  animationDelay: servicesVisible ? `${index * 0.3}s` : '0s',
                  transitionDelay: servicesVisible ? `${index * 0.2}s` : '0s'
                }}
              >
                <div className={`text-4xl mb-4 transition-all duration-500 ${
                  servicesVisible ? 'animate-scale-in' : ''
                }`} style={{ animationDelay: servicesVisible ? `${0.5 + index * 0.2}s` : '0s' }}>
                  {service.icon}
                </div>
                <h3 className="font-cinzel text-xl font-semibold text-soft-white mb-4 group-hover:text-whisper-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-cinzel text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-t from-deep-charcoal to-midnight-blue">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-semibold text-soft-white mb-8">
            {t('home.contact.title')}
          </h2>
          <p className="font-cinzel text-lg text-soft-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('home.contact.desc')}
          </p>
          
          <div 
            ref={contactButtonsRef}
            className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 ${
              contactButtonsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Button3DWrapper 
              isVisible={contactButtonsVisible} 
              delay={0.1}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="minimal" 
                size="xl" 
                className={`font-cinzel font-medium transform transition-all duration-500 relative overflow-hidden ${
                  contactButtonsVisible ? 'animate-fade-in animate-golden-wave' : ''
                }`}
                style={{ 
                  animationDelay: contactButtonsVisible ? '0.1s' : '0s',
                  background: contactButtonsVisible ? 'linear-gradient(45deg, rgba(255, 215, 0, 0.3), rgba(255, 193, 7, 0.4), rgba(255, 215, 0, 0.3))' : 'transparent',
                  backgroundSize: '200% 200%',
                  boxShadow: contactButtonsVisible ? '0 0 40px rgba(255, 215, 0, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.2)' : 'none'
                }}
              >
                {t('home.contact.appointment')}
              </Button>
            </Button3DWrapper>
            
            <Button3DWrapper 
              isVisible={contactButtonsVisible} 
              delay={0.3}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="luxury" 
                size="xl" 
                className={`font-cinzel font-medium transform transition-all duration-500 relative overflow-hidden ${
                  contactButtonsVisible ? 'animate-fade-in animate-amber-flow' : ''
                }`}
                style={{ 
                  animationDelay: contactButtonsVisible ? '0.3s' : '0s',
                  background: contactButtonsVisible ? 'linear-gradient(135deg, rgba(255, 126, 95, 0.4), rgba(255, 193, 7, 0.5), rgba(255, 171, 64, 0.4))' : 'transparent',
                  backgroundSize: '300% 300%',
                  boxShadow: contactButtonsVisible ? '0 0 35px rgba(255, 171, 64, 0.6), inset 0 0 25px rgba(255, 193, 7, 0.3)' : 'none'
                }}
              >
                {t('home.contact.portfolio')}
              </Button>
            </Button3DWrapper>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-t from-deep-charcoal via-midnight-blue/30 to-deep-charcoal border-t border-whisper-gold/40">
        <div className="max-w-4xl mx-auto">
          {/* Ornamental Top Border */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-whisper-gold/50 to-transparent flex-1"></div>
            <div className="mx-6 text-whisper-gold/70 text-xl">⚜</div>
            <div className="h-px bg-gradient-to-r from-transparent via-whisper-gold/50 to-transparent flex-1"></div>
          </div>
          
          {/* Main Footer Content */}
          <div className="text-center mb-16">
            <h3 className="font-cinzel text-4xl font-bold text-soft-white mb-4 tracking-widest uppercase">
              IMPERIUM HORTIS
            </h3>
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-px bg-whisper-gold/60"></div>
              <div className="mx-4 text-whisper-gold/70">◆</div>
              <div className="w-8 h-px bg-whisper-gold/60"></div>
            </div>
            <p className="font-cinzel text-xl text-soft-graphite max-w-2xl mx-auto leading-relaxed italic tracking-wider">
              "Là où les jardins murmurent la grandeur"
            </p>
          </div>
          
          {/* Contact Information with Refined Style */}
          <div className="bg-gradient-to-r from-whisper-gold/5 via-whisper-gold/8 to-whisper-gold/5 backdrop-blur-sm border border-whisper-gold/20 p-10 mb-16 relative">
            {/* Subtle Corner Ornaments */}
            <div className="absolute top-2 left-2 text-whisper-gold/40 text-sm">◢</div>
            <div className="absolute top-2 right-2 text-whisper-gold/40 text-sm">◣</div>
            <div className="absolute bottom-2 left-2 text-whisper-gold/40 text-sm">◥</div>
            <div className="absolute bottom-2 right-2 text-whisper-gold/40 text-sm">◤</div>
            
            <h4 className="font-cinzel text-2xl font-semibold text-whisper-gold mb-8 text-center tracking-wide">
              Contact
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-whisper-gold/10 flex items-center justify-center border border-whisper-gold/30">
                  <span className="text-whisper-gold text-lg">☎</span>
                </div>
                <p className="font-cinzel text-soft-white/90 group-hover:text-whisper-gold transition-colors duration-300 tracking-wide">
                  +33 6 58 40 41 91
                </p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-whisper-gold/10 flex items-center justify-center border border-whisper-gold/30">
                  <span className="text-whisper-gold text-lg">✉</span>
                </div>
                <p className="font-cinzel text-soft-white/90 group-hover:text-whisper-gold transition-colors duration-300 tracking-wide">
                  contact@imperiumhortis.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Refined Copyright */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-whisper-gold/30 to-transparent flex-1"></div>
              <div className="mx-6 text-whisper-gold/50 text-sm">❦</div>
              <div className="h-px bg-gradient-to-r from-transparent via-whisper-gold/30 to-transparent flex-1"></div>
            </div>
            <p className="font-cinzel text-soft-white/60 text-sm tracking-widest">
              {t('footer.rights')}
            </p>
            <div className="mt-4 text-whisper-gold/40 text-xs font-cinzel tracking-widest">
              MMXXIV
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
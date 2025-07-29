import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button3DWrapper } from "@/components/Button3DWrapper";

const Index = () => {
  const { ref: servicesRef, isIntersecting: servicesVisible } = useIntersectionObserver();
  const { ref: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { ref: contactButtonsRef, isIntersecting: contactButtonsVisible } = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-deep-charcoal to-midnight-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
                Une tradition d'excellence
              </h2>
              <p className="font-opensans text-lg text-white/95 mb-6 leading-relaxed drop-shadow-sm">
                Depuis 1952, notre maison façonne les jardins les plus prestigieux 
                de la Côte d'Azur. De Monaco à Saint-Tropez, nous créons des havres 
                de paix qui transcendent les saisons.
              </p>
              <p className="font-opensans text-lg text-white/95 leading-relaxed drop-shadow-sm">
                Chaque projet est une œuvre unique, pensée en harmonie avec 
                l'architecture, le climat méditerranéen et la vision de nos clients.
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-video bg-gradient-accent rounded-2xl shadow-luxury border border-sage-green/20 flex items-center justify-center">
                <p className="font-opensans text-white/80 text-center px-8 text-lg">
                  [Galerie de nos créations les plus emblématiques]
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage-green/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-midnight-blue/50">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={titleRef}
            className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16 transition-all duration-1000 drop-shadow-lg ${
              titleVisible 
                ? 'opacity-100 translate-y-0 animate-fade-in' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            Nos savoir-faire
          </h2>
          
          <div 
            ref={servicesRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Jardins d'exception",
                description: "Conception et réalisation de jardins sur-mesure pour villas de prestige",
                icon: "🌿"
              },
              {
                title: "Terrasses panoramiques", 
                description: "Aménagement de terrasses avec vue sur la Méditerranée",
                icon: "🏔️"
              },
              {
                title: "Art paysager",
                description: "Sculptures végétales et installations artistiques uniques",
                icon: "🎨"
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-card border border-sage-green/20 hover:border-sage-green/40 transition-all duration-700 hover:shadow-glow hover:scale-105 transform ${
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
                <h3 className="font-playfair text-xl font-bold text-deep-charcoal mb-4 group-hover:text-sage-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-opensans text-slate-600 leading-relaxed group-hover:text-deep-charcoal transition-colors duration-300">
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
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            Créons ensemble votre jardin d'éternité
          </h2>
          <p className="font-opensans text-lg text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Chaque jardin raconte une histoire. Quelle sera la vôtre ? 
            Découvrez comment nous pouvons transformer votre vision en réalité.
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
                className={`font-opensans font-semibold animate-glow-pulse transform transition-all duration-500 text-white border-2 border-white/80 hover:border-sage-green ${
                  contactButtonsVisible ? 'animate-fade-in' : ''
                }`}
                style={{ 
                  animationDelay: contactButtonsVisible ? '0.1s' : '0s',
                  background: contactButtonsVisible ? 'rgba(34, 197, 94, 0.1)' : 'transparent'
                }}
              >
                Prendre rendez-vous
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
                className={`font-opensans font-semibold transform transition-all duration-500 text-white border-2 border-white/60 hover:border-sage-green ${
                  contactButtonsVisible ? 'animate-fade-in' : ''
                }`}
                style={{ 
                  animationDelay: contactButtonsVisible ? '0.3s' : '0s',
                  background: contactButtonsVisible ? 'rgba(34, 197, 94, 0.05)' : 'transparent'
                }}
              >
                Portfolio complet
              </Button>
            </Button3DWrapper>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 lg:px-24 bg-deep-charcoal border-t border-sage-green/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-playfair text-xl font-bold text-white mb-4">
                Jardins de la Côte d'Azur
              </h3>
              <p className="font-opensans text-white/80">
                L'excellence paysagère depuis 1952
              </p>
            </div>
            
            <div>
              <h4 className="font-opensans font-semibold text-white mb-4">Contact</h4>
              <p className="font-opensans text-white/80 mb-2">+33 4 93 xx xx xx</p>
              <p className="font-opensans text-white/80">contact@jardins-cotedazur.fr</p>
            </div>
            
            <div>
              <h4 className="font-opensans font-semibold text-white mb-4">Showroom</h4>
              <p className="font-opensans text-white/80">
                123 Boulevard de la Croisette<br />
                06400 Cannes, France
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-sage-green/20 text-center">
            <p className="font-opensans text-white/60">
              © 2024 Jardins de la Côte d'Azur. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
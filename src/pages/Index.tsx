import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-deep-charcoal to-midnight-blue">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-semibold text-soft-white mb-8">
                Une tradition d'excellence
              </h2>
              <p className="font-inter text-lg text-soft-white/80 mb-6 leading-relaxed">
                Depuis 1952, notre maison façonne les jardins les plus prestigieux 
                de la Côte d'Azur. De Monaco à Saint-Tropez, nous créons des havres 
                de paix qui transcendent les saisons.
              </p>
              <p className="font-inter text-lg text-soft-white/80 leading-relaxed">
                Chaque projet est une œuvre unique, pensée en harmonie avec 
                l'architecture, le climat méditerranéen et la vision de nos clients.
              </p>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-video bg-gradient-accent rounded-2xl shadow-luxury border border-sage-green/20 flex items-center justify-center">
                <p className="font-inter text-soft-white/60 text-center px-8">
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
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-semibold text-soft-white text-center mb-16 animate-fade-in">
            Nos savoir-faire
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                className="group p-8 rounded-2xl bg-card border border-sage-green/20 hover:border-sage-green/40 transition-all duration-500 animate-fade-in hover:shadow-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-cinzel text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
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
            Créons ensemble votre jardin d'éternité
          </h2>
          <p className="font-inter text-lg text-soft-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Chaque jardin raconte une histoire. Quelle sera la vôtre ? 
            Découvrez comment nous pouvons transformer votre vision en réalité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="minimal" size="xl" className="font-inter font-medium animate-glow-pulse">
              Prendre rendez-vous
            </Button>
            <Button variant="luxury" size="xl" className="font-inter font-medium">
              Portfolio complet
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 lg:px-24 bg-deep-charcoal border-t border-sage-green/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-cinzel text-xl font-semibold text-soft-white mb-4">
                Jardins de la Côte d'Azur
              </h3>
              <p className="font-inter text-soft-white/60">
                L'excellence paysagère depuis 1952
              </p>
            </div>
            
            <div>
              <h4 className="font-inter font-medium text-soft-white mb-4">Contact</h4>
              <p className="font-inter text-soft-white/60 mb-2">+33 4 93 xx xx xx</p>
              <p className="font-inter text-soft-white/60">contact@jardins-cotedazur.fr</p>
            </div>
            
            <div>
              <h4 className="font-inter font-medium text-soft-white mb-4">Showroom</h4>
              <p className="font-inter text-soft-white/60">
                123 Boulevard de la Croisette<br />
                06400 Cannes, France
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-sage-green/20 text-center">
            <p className="font-inter text-soft-white/40">
              © 2024 Jardins de la Côte d'Azur. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
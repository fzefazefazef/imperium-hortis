import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Philosophie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-30">
        <div className="flex space-x-8">
          {[
            { name: "ACCUEIL", path: "/" },
            { name: "NOS SERVICES", path: "/services" },
            { name: "PORTFOLIO", path: "/portfolio" },
            { name: "CONTACT", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-cinzel text-sm font-medium text-soft-white/90 hover:text-sage-green transition-all duration-300 hover:scale-105 tracking-wider"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-soft-white mb-12 text-center">
            Notre <span className="text-sage-green">Philosophie</span>
          </h1>
          
          <div className="space-y-12">
            <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
              <h2 className="font-cinzel text-2xl md:text-3xl font-semibold text-sage-green mb-6">
                L'Art du Jardinage Impérial
              </h2>
              <p className="font-inter text-lg text-soft-white/90 leading-relaxed mb-6">
                Chez Imperium Hortis, nous croyons que chaque jardin est une œuvre d'art vivante, 
                un testament à la beauté éternelle de la nature domestiquée par la main experte 
                de l'homme. Notre philosophie s'enracine dans l'excellence, la tradition et 
                l'innovation harmonieuse.
              </p>
              <p className="font-inter text-lg text-soft-white/90 leading-relaxed">
                Nous ne créons pas simplement des jardins ; nous orchestrons des symphonies 
                végétales qui évoluent avec les saisons, révélant de nouveaux mystères à 
                chaque regard, à chaque promenade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-4">
                  Excellence Héritée
                </h3>
                <p className="font-inter text-soft-white/80 leading-relaxed">
                  Trois générations de maîtres jardiniers ont forgé notre savoir-faire unique, 
                  transmettant les secrets de l'art paysager méditerranéen de père en fils.
                </p>
              </div>

              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-4">
                  Innovation Respectueuse
                </h3>
                <p className="font-inter text-soft-white/80 leading-relaxed">
                  Nous marions les techniques ancestrales aux technologies modernes, 
                  créant des écosystèmes durables qui respectent l'environnement.
                </p>
              </div>
            </div>

            <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
              <h2 className="font-cinzel text-2xl md:text-3xl font-semibold text-sage-green mb-6">
                Notre Engagement
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌿</div>
                  <h4 className="font-cinzel font-semibold text-soft-white mb-2">Authenticité</h4>
                  <p className="font-inter text-sm text-soft-white/70">Respect des essences locales</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-cinzel font-semibold text-soft-white mb-2">Durabilité</h4>
                  <p className="font-inter text-sm text-soft-white/70">Solutions écologiques</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">👑</div>
                  <h4 className="font-cinzel font-semibold text-soft-white mb-2">Luxe</h4>
                  <p className="font-inter text-sm text-soft-white/70">Finitions d'exception</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="luxury" size="xl" className="font-inter font-medium">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophie;
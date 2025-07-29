import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Conception de Jardins d'Exception",
      description: "Création complète de jardins sur-mesure pour propriétés de prestige",
      features: ["Étude paysagère complète", "Sélection d'essences rares", "Design architectural végétal", "Suivi de réalisation"],
      icon: "🌺"
    },
    {
      title: "Terrasses et Patios Méditerranéens",
      description: "Aménagement de terrasses avec vue panoramique sur la Côte d'Azur",
      features: ["Mobilier sur-mesure", "Systèmes d'irrigation intelligents", "Éclairage d'ambiance", "Pergolas et tonnelles"],
      icon: "🏛️"
    },
    {
      title: "Jardins Aquatiques et Fontaines",
      description: "Installation de bassins, fontaines et cascades pour un ambiance rafraîchissante",
      features: ["Bassins naturels", "Fontaines artistiques", "Éclairage subaquatique", "Écosystème équilibré"],
      icon: "⛲"
    },
    {
      title: "Maintenance VIP",
      description: "Entretien premium pour préserver la beauté de votre jardin toute l'année",
      features: ["Équipe dédiée", "Interventions discrètes", "Produits biologiques", "Conseils saisonniers"],
      icon: "✨"
    },
    {
      title: "Éclairage Paysager",
      description: "Mise en lumière artistique pour sublimer votre jardin la nuit",
      features: ["LED dernière génération", "Programmation intelligente", "Effets dramatiques", "Économie d'énergie"],
      icon: "💡"
    },
    {
      title: "Sculptures Végétales",
      description: "Art topiaire et sculptures vivantes pour des jardins uniques au monde",
      features: ["Topiaires sur-mesure", "Sculptures temporaires", "Événements privés", "Créations artistiques"],
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-30">
        <div className="flex space-x-8">
          {[
            { name: "ACCUEIL", path: "/" },
            { name: "PHILOSOPHIE", path: "/philosophie" },
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
        <div className="max-w-6xl mx-auto">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-soft-white mb-8 text-center">
            Nos <span className="text-sage-green">Services</span>
          </h1>
          
          <p className="font-inter text-xl text-soft-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services paysagers, conçus pour transformer 
            vos espaces extérieurs en véritables œuvres d'art végétales.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20 hover:border-sage-green/40 transition-all duration-500 hover:scale-105 hover:shadow-glow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-cinzel text-2xl font-semibold text-sage-green mb-4 group-hover:text-soft-white transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-soft-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-inter text-soft-white/70 flex items-center">
                      <span className="text-sage-green mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-card/20 backdrop-blur-sm p-12 rounded-2xl border border-sage-green/20 text-center">
            <h2 className="font-cinzel text-3xl font-semibold text-sage-green mb-6">
              Service Sur-Mesure
            </h2>
            <p className="font-inter text-lg text-soft-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Chaque projet est unique. Nous créons des solutions personnalisées qui 
              répondent parfaitement à vos besoins spécifiques et à votre vision.
            </p>
            <Link to="/contact">
              <Button variant="luxury" size="xl" className="font-inter font-medium">
                Consultation gratuite
              </Button>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="minimal" size="xl" className="font-inter font-medium">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
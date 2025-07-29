import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Villa Azzurra",
      location: "Cap d'Antibes",
      year: "2024",
      description: "Jardin méditerranéen de 2000m² avec terrasses étagées et bassin à débordement",
      category: "Résidence privée"
    },
    {
      title: "Château de Lumière",
      location: "Saint-Paul-de-Vence",
      year: "2023",
      description: "Restauration complète des jardins historiques avec création d'un labyrinthe de buis",
      category: "Patrimoine historique"
    },
    {
      title: "Penthouse Croisette",
      location: "Cannes",
      year: "2024",
      description: "Terrasse panoramique de 500m² avec jardins suspendus et sculptures végétales",
      category: "Terrasse de luxe"
    },
    {
      title: "Villa del Mare",
      location: "Monaco",
      year: "2023",
      description: "Jardin vertical et terrasses aquatiques avec vue sur la Méditerranée",
      category: "Innovation paysagère"
    },
    {
      title: "Domaine des Oliviers",
      location: "Mougins",
      year: "2022",
      description: "Parc de 5 hectares avec oliveraie centenaire et jardins thématiques",
      category: "Grand domaine"
    },
    {
      title: "Spa Impérial",
      location: "Juan-les-Pins",
      year: "2024",
      description: "Jardins sensoriels et thérapeutiques pour centre de bien-être de luxe",
      category: "Espace commercial"
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
            { name: "NOS SERVICES", path: "/services" },
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
            Notre <span className="text-sage-green">Portfolio</span>
          </h1>
          
          <p className="font-inter text-xl text-soft-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos créations les plus emblématiques, témoins de notre excellence 
            et de notre passion pour l'art paysager méditerranéen.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "150+", label: "Projets réalisés" },
              { number: "25", label: "Années d'expérience" },
              { number: "3", label: "Générations d'expertise" },
              { number: "100%", label: "Clients satisfaits" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-card/20 backdrop-blur-sm p-6 rounded-2xl border border-sage-green/20">
                <div className="font-cinzel text-3xl md:text-4xl font-bold text-sage-green mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-soft-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <h2 className="font-cinzel text-3xl font-semibold text-soft-white mb-12 text-center">
            Projets d'Exception
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card/20 backdrop-blur-sm rounded-2xl border border-sage-green/20 hover:border-sage-green/40 transition-all duration-500 hover:scale-105 hover:shadow-glow overflow-hidden"
              >
                <div className="aspect-video bg-gradient-accent rounded-t-2xl flex items-center justify-center border-b border-sage-green/20">
                  <p className="font-inter text-soft-white/60 text-center px-8">
                    [Image du projet {project.title}]
                  </p>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-cinzel text-xl font-semibold text-sage-green group-hover:text-soft-white transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-inter text-sm text-soft-white/60 bg-sage-green/20 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <p className="font-inter text-soft-white/70 mb-2">
                    📍 {project.location}
                  </p>
                  <p className="font-inter text-soft-white/60 text-sm mb-4">
                    {project.category}
                  </p>
                  <p className="font-inter text-soft-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-card/20 backdrop-blur-sm p-12 rounded-2xl border border-sage-green/20 text-center">
            <h2 className="font-cinzel text-3xl font-semibold text-sage-green mb-6">
              Votre Projet, Notre Prochaine Création
            </h2>
            <p className="font-inter text-lg text-soft-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Chaque jardin raconte une histoire unique. Laissez-nous écrire la vôtre 
              avec la même passion et le même savoir-faire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="luxury" size="xl" className="font-inter font-medium">
                  Démarrer mon projet
                </Button>
              </Link>
              <Button variant="minimal" size="xl" className="font-inter font-medium">
                Télécharger le portfolio complet
              </Button>
            </div>
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

export default Portfolio;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Villa Azzurra",
      location: "Cap d'Antibes",
      year: "2024",
      description: t('projects.villa.azzurra'),
      category: t('category.residence')
    },
    {
      title: "Château de Lumière",
      location: "Saint-Paul-de-Vence",
      year: "2023",
      description: t('projects.chateau.lumiere'),
      category: t('category.heritage')
    },
    {
      title: "Penthouse Croisette",
      location: "Cannes",
      year: "2024",
      description: t('projects.penthouse.croisette'),
      category: t('category.terrace')
    },
    {
      title: "Villa del Mare",
      location: "Monaco",
      year: "2023",
      description: t('projects.villa.del.mare'),
      category: t('category.innovation')
    },
    {
      title: "Domaine des Oliviers",
      location: "Mougins",
      year: "2022",
      description: t('projects.domaine.oliviers'),
      category: t('category.domain')
    },
    {
      title: "Spa Impérial",
      location: "Juan-les-Pins",
      year: "2024",
      description: t('projects.spa.imperial'),
      category: t('category.commercial')
    }
  ];

  return (
    <Layout navTheme="default">
      <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
        {/* Content */}
        <div className="pt-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-soft-white lg:text-black mb-8 text-center">
              Portfolio
            </h1>
            
            <p className="font-inter text-xl text-soft-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              {t('portfolio.subtitle')}
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { number: "150+", label: t('portfolio.stats.projects') },
                { number: "25", label: t('portfolio.stats.years') },
                { number: "3", label: t('portfolio.stats.generations') },
                { number: "100%", label: t('portfolio.stats.satisfaction') }
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
              {t('portfolio.featured')}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-card/20 backdrop-blur-sm rounded-2xl border border-sage-green/20 hover:border-sage-green/40 transition-all duration-500 hover:scale-105 hover:shadow-glow overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-accent rounded-t-2xl flex items-center justify-center border-b border-sage-green/20">
                    <p className="font-inter text-soft-white/60 text-center px-8">
                      [{t('common.image')} {project.title}]
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
                {t('portfolio.cta.title')}
              </h2>
              <p className="font-inter text-lg text-soft-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('portfolio.cta.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="luxury" size="xl" className="font-inter font-medium">
                    {t('portfolio.cta.btn1')}
                  </Button>
                </Link>
                <Button variant="minimal" size="xl" className="font-inter font-medium">
                  {t('portfolio.cta.btn2')}
                </Button>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link to="/">
                <Button variant="minimal" size="xl" className="font-inter font-medium">
                  {t('portfolio.back')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
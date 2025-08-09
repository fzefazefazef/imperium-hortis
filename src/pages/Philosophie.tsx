import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";

const Philosophie = () => {
  const { t } = useLanguage();

  return (
    <Layout navTheme="default">
      <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
        {/* Hero Section */}
        <div className="relative pt-40 pb-32">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-soft-white mb-8 text-center lg:!text-black">
              {t('philosophy.art.title')}
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-8">
          
          {/* Introduction */}
          <section className="mb-24">
            <div className="text-center max-w-4xl mx-auto">
              <p className="font-playfair text-2xl md:text-3xl text-soft-white font-light leading-relaxed mb-10 italic">
                "Chez Imperium Hortis, chaque jardin est une œuvre vivante."
              </p>
              <div className="space-y-6 text-lg md:text-xl text-soft-white/85 font-light leading-relaxed">
                <p>
                  Un théâtre naturel pensé pour durer, pour émouvoir et pour sublimer l'architecture qu'il entoure.
                  Notre philosophie puise dans la noblesse des paysages méditerranéens, dans l'héritage des jardins antiques et dans le raffinement des villas d'exception de la Côte d'Azur.
                </p>
                <p className="italic text-sage-green/90">
                  Nous ne composons pas des jardins : nous écrivons des poèmes végétaux, à travers des harmonies de textures, de parfums et de lumière, évoluant au fil des saisons.
                </p>
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="w-24 h-px bg-sage-green/30 mx-auto mb-24"></div>

          {/* Héritage */}
          <section className="mb-24">
            <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-soft-white/85 font-light leading-relaxed text-center">
              <p>
                Imperium Hortis s'inscrit dans la continuité d'un savoir-faire transmis depuis plusieurs générations.
                Formé à la fois par l'exigence familiale et les codes contemporains du paysage haut de gamme, Imperium Hortis est porté par une nouvelle génération passionnée, exigeante et déterminée à faire évoluer les standards du jardin haut de gamme.
              </p>
              <p>
                Chaque projet est le fruit d'une double exigence : respecter la tradition méditerranéenne tout en intégrant les besoins et les sensibilités d'aujourd'hui. 
                <span className="text-sage-green italic"> Ici, l'élégance naît de la rigueur.</span>
              </p>
              <p className="italic text-soft-white/70">
                Et si notre regard est résolument tourné vers l'avenir, il puise sa force dans des racines profondes antiques et méditerranéennes et une culture du détail que le temps a forgée.
              </p>
            </div>
          </section>

          {/* Separator */}
          <div className="w-24 h-px bg-sage-green/30 mx-auto mb-24"></div>

          {/* Vision */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h3 className="font-cinzel text-3xl md:text-4xl font-light text-sage-green tracking-wide">
                Une vision construite avec exigence
              </h3>
            </div>
            <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-soft-white/85 font-light leading-relaxed text-center">
              <p>
                Imperium Hortis porte une ambition claire : offrir, à terme, une maîtrise complète et harmonieuse de l'art des extérieurs des jardins aux terrasses, de l'arrosage à la mise en lumière.
              </p>
              <p>
                Cette vision s'inscrit dans une démarche réfléchie et pérenne, où chaque étape se déploie avec rigueur, un sens aigu du détail et la volonté de tisser une relation de confiance durable avec chaque client.
              </p>
              <p>
                Au-delà de l'excellence technique, notre engagement se traduit par une simplicité raffinée au service de votre sérénité : 
                <span className="text-sage-green italic"> une seule entité, un interlocuteur dédié</span>, pour orchestrer avec finesse l'ensemble de vos espaces extérieurs.
              </p>
              <p className="italic text-soft-white/70">
                Cette approche exclusive garantit une gestion harmonieuse et fluide, tout en préservant l'intimité de votre domaine par une orchestration soigneuse des accès, garantissant discrétion et sécurité dans une harmonie parfaite.
              </p>
            </div>
          </section>

          {/* Separator */}
          <div className="w-24 h-px bg-sage-green/30 mx-auto mb-24"></div>

          {/* Innovation */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h3 className="font-cinzel text-3xl md:text-4xl font-light text-sage-green tracking-wide">
                Innovation, tradition & excellence durable
              </h3>
            </div>
            <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-soft-white/85 font-light leading-relaxed text-center">
              <p className="text-2xl font-light italic text-sage-green/90">
                "Chaque projet confié à Imperium Hortis est traité comme une pièce unique."
              </p>
              <p>
                Nous unissons les techniques ancestrales aux solutions modernes, pour créer des écosystèmes respectueux, durables et esthétiquement puissants, s'inspirant délicatement de l'harmonie intemporelle des jardins méditerranéens antiques.
              </p>
              <p className="italic text-soft-white/70">
                Le respect de la terre, l'élégance naturelle et la précision d'exécution guident chacun de nos gestes.
              </p>
            </div>
          </section>

          {/* Separator */}
          <div className="w-24 h-px bg-sage-green/30 mx-auto mb-24"></div>

          {/* Piliers d'engagement */}
          <section className="mb-32">
            <div className="text-center mb-20">
              <h3 className="font-cinzel text-3xl md:text-4xl font-light text-sage-green tracking-wide mb-6">
                Nos piliers d'engagement
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">🌿</div>
                <h4 className="font-cinzel text-xl font-light text-sage-green mb-6 tracking-wide">AUTHENTICITÉ</h4>
                <p className="font-playfair text-soft-white/70 leading-normal font-light">
                  Essences locales et plantes nobles, choisies pour leur beauté et leur adaptation naturelle.
                </p>
              </div>
              <div className="text-center group">
                <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h4 className="font-cinzel text-xl font-light text-sage-green mb-6 tracking-wide">DURABILITÉ</h4>
                <p className="font-playfair text-soft-white/70 leading-normal font-light">
                  Arrosages optimisés, écosystèmes équilibrés, pratiques respectueuses du climat méditerranéen.
                </p>
              </div>
              <div className="text-center group">
                <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">👑</div>
                <h4 className="font-cinzel text-xl font-light text-sage-green mb-6 tracking-wide">EXCELLENCE</h4>
                <p className="font-playfair text-soft-white/70 leading-normal font-light">
                  Finitions d'exception, suivi minutieux, service à la hauteur des plus grandes exigences.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center pb-32">
            <Link to="/#top">
              <Button variant="outline" size="lg" className="font-cinzel font-light tracking-wider text-sage-green border-sage-green hover:bg-sage-green hover:text-deep-charcoal transition-all duration-300 px-12 py-4">
                RETOUR À L'ACCUEIL
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Philosophie;
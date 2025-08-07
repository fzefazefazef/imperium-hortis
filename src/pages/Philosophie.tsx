import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";

const Philosophie = () => {
  const { t } = useLanguage();

  return (
    <Layout navTheme="default">
      <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground pt-32 sm:pt-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-soft-white mb-16 text-center">
            <span className="text-sage-green">L'ART DU JARDINAGE</span> <span className="text-soft-white">IMPÉRIAL</span>
          </h1>
          
          <div className="space-y-16">
            {/* Introduction */}
            <div className="bg-card/20 backdrop-blur-sm p-10 rounded-3xl border border-sage-green/20">
              <p className="font-playfair text-xl text-soft-white/95 leading-relaxed mb-6">
                Chez Imperium Hortis, chaque jardin est une œuvre vivante.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed mb-6">
                Un théâtre naturel pensé pour durer, pour émouvoir et pour sublimer l'architecture qu'il entoure.
                Notre philosophie puise dans la noblesse des paysages méditerranéens, dans l'héritage des jardins antiques et dans le raffinement des villas d'exception de la Riviera.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed italic">
                Nous ne composons pas des jardins : nous écrivons des poèmes végétaux, à travers des harmonies de textures, de parfums et de lumière, évoluant au fil des saisons.
              </p>
            </div>

            {/* Héritage */}
            <div className="bg-card/20 backdrop-blur-sm p-10 rounded-3xl border border-sage-green/20">
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed mb-6">
                Imperium Hortis s'inscrit dans la continuité d'un savoir-faire transmis depuis plusieurs générations.
                Formé à la fois par l'exigence familiale et les codes contemporains du paysage haut de gamme, Imperium Hortis est porté par une nouvelle génération passionnée, exigeante et déterminée à faire évoluer les standards du jardin haut de gamme.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed mb-6">
                Chaque projet est le fruit d'une double exigence : respecter la tradition méditerranéenne tout en intégrant les besoins et les sensibilités d'aujourd'hui. Ici, l'élégance naît de la rigueur.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed italic">
                Et si notre regard est résolument tourné vers l'avenir, il puise sa force dans des racines profondes antiques et méditerranéennes et une culture du détail que le temps a forgée.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card/20 backdrop-blur-sm p-10 rounded-3xl border border-sage-green/20">
              <h2 className="font-cinzel text-3xl font-semibold text-sage-green mb-8 text-center">
                Une vision construite avec exigence
              </h2>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed mb-6">
                Imperium Hortis porte une ambition claire : offrir, à terme, une maîtrise complète et harmonieuse de l'art des extérieurs — des jardins aux terrasses, de l'arrosage à la mise en lumière.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed mb-6">
                Cette vision s'inscrit dans une démarche réfléchie et pérenne, où chaque étape se déploie avec rigueur, un sens aigu du détail et la volonté de tisser une relation de confiance durable avec chaque client.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed mb-6">
                Au-delà de l'excellence technique, notre engagement se traduit par une simplicité raffinée au service de votre sérénité : une seule entité, un interlocuteur dédié, pour orchestrer avec finesse l'ensemble de vos espaces extérieurs.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed italic">
                Cette approche exclusive garantit une gestion harmonieuse et fluide, tout en préservant l'intimité de votre domaine par une orchestration soigneuse des accès, garantissant discrétion et sécurité dans une harmonie parfaite.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-card/20 backdrop-blur-sm p-10 rounded-3xl border border-sage-green/20">
              <h2 className="font-cinzel text-3xl font-semibold text-sage-green mb-8 text-center">
                Innovation, tradition & excellence durable
              </h2>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed mb-6">
                Chaque projet confié à Imperium Hortis est traité comme une pièce unique.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed mb-6">
                Nous unissons les techniques ancestrales aux solutions modernes, pour créer des écosystèmes respectueux, durables et esthétiquement puissants, s'inspirant délicatement de l'harmonie intemporelle des jardins méditerranéens antiques.
              </p>
              <p className="font-playfair text-lg text-soft-white/90 leading-relaxed italic">
                Le respect de la terre, l'élégance naturelle et la précision d'exécution guident chacun de nos gestes.
              </p>
            </div>

            {/* Piliers d'engagement */}
            <div className="bg-card/20 backdrop-blur-sm p-10 rounded-3xl border border-sage-green/20">
              <h2 className="font-cinzel text-3xl font-semibold text-sage-green mb-12 text-center">
                Nos piliers d'engagement
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-card/30 p-8 rounded-2xl border border-sage-green/10">
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-4">Authenticité</h3>
                  <p className="font-playfair text-soft-white/80 leading-relaxed">
                    Essences locales et plantes nobles, choisies pour leur beauté et leur adaptation naturelle.
                  </p>
                </div>
                <div className="text-center bg-card/30 p-8 rounded-2xl border border-sage-green/10">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-4">Durabilité</h3>
                  <p className="font-playfair text-soft-white/80 leading-relaxed">
                    Arrosages optimisés, écosystèmes équilibrés, pratiques respectueuses du climat méditerranéen.
                  </p>
                </div>
                <div className="text-center bg-card/30 p-8 rounded-2xl border border-sage-green/10">
                  <div className="text-4xl mb-4">👑</div>
                  <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-4">Excellence</h3>
                  <p className="font-playfair text-soft-white/80 leading-relaxed">
                    Finitions d'exception, suivi minutieux, service à la hauteur des plus grandes exigences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <Link to="/">
              <Button variant="luxury" size="xl" className="font-playfair font-medium">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Philosophie;
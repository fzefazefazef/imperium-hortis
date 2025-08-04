import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";

const Portfolio = () => {
  const { t } = useLanguage();

  const inspirations = [
    {
      title: t('portfolio.inspiration1.title'),
      description: t('portfolio.inspiration1.desc'),
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80"
    },
    {
      title: t('portfolio.inspiration2.title'),
      description: t('portfolio.inspiration2.desc'),
      imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop&q=80"
    },
    {
      title: t('portfolio.inspiration3.title'),
      description: t('portfolio.inspiration3.desc'),
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&q=80"
    },
    {
      title: t('portfolio.inspiration4.title'),
      description: t('portfolio.inspiration4.desc'),
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80"
    }
  ];

  return (
    <Layout navTheme="default">
      <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
        {/* Content */}
        <div className="pt-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-soft-white mb-8 text-center lg:!text-black">
              Portfolio
            </h1>
            
            <p className="font-inter text-xl text-soft-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              {t('portfolio.subtitle')}
            </p>

            {/* Inspirations Section */}
            <h2 className="font-cinzel text-3xl font-semibold text-soft-white mb-12 text-center">
              {t('portfolio.inspirations.title')}
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {inspirations.map((inspiration, index) => (
                <div
                  key={index}
                  className="group bg-card/20 backdrop-blur-sm rounded-2xl border border-sage-green/20 hover:border-sage-green/40 transition-all duration-500 hover:scale-105 hover:shadow-glow overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-accent rounded-t-2xl overflow-hidden border-b border-sage-green/20">
                    <img 
                      src={inspiration.imageUrl} 
                      alt={inspiration.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-cinzel text-xl font-semibold text-sage-green group-hover:text-soft-white transition-colors mb-4">
                      {inspiration.title}
                    </h3>
                    <p className="font-inter text-soft-white/80 leading-relaxed">
                      {inspiration.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="text-center mb-16">
              <p className="font-inter text-soft-white/60 italic text-sm max-w-2xl mx-auto">
                {t('portfolio.note')}
              </p>
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
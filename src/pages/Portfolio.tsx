import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { OptimizedButton3DWrapper } from "@/components/OptimizedButton3DWrapper";
import FluidButtonBackground from "@/components/FluidButtonBackground";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Portfolio = () => {
  const { t } = useLanguage();
  const { ref: buttonsRef, isIntersecting: buttonsVisible } = useIntersectionObserver();

  const inspirations = [
    {
      title: t('portfolio.inspiration1.title'),
      description: t('portfolio.inspiration1.desc'),
      imageUrl: "/lovable-uploads/7a082011-48b3-4306-80d8-ce1e622452d2.png"
    },
    {
      title: t('portfolio.inspiration2.title'),
      description: t('portfolio.inspiration2.desc'),
      imageUrl: "/lovable-uploads/38da725e-39e9-45ef-a4e5-c5553b93a25e.png"
    },
    {
      title: t('portfolio.inspiration3.title'),
      description: t('portfolio.inspiration3.desc'),
      imageUrl: "/lovable-uploads/64b79018-b45e-43d4-9bb6-84e10796b05f.png"
    },
    {
      title: t('portfolio.inspiration4.title'),
      description: t('portfolio.inspiration4.desc'),
      imageUrl: "/lovable-uploads/460c4834-1cf3-40f1-a24c-b50659ad31c2.png"
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
            <div ref={buttonsRef} className="bg-card/20 backdrop-blur-sm p-12 rounded-2xl border border-sage-green/20 text-center">
              <h2 className="font-cinzel text-3xl font-semibold text-sage-green mb-6">
                {t('portfolio.cta.title')}
              </h2>
              <p className="font-inter text-lg text-soft-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('portfolio.cta.desc')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
                buttonsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}>
                <OptimizedButton3DWrapper 
                  isVisible={buttonsVisible} 
                  delay={0.2}
                  className="w-full sm:w-auto"
                >
                  <Link to="/contact">
                    <Button 
                      variant="hero-luxury" 
                      size="xl" 
                      className={`relative overflow-hidden font-inter font-medium hover-scale transform transition-all duration-500 hover:shadow-luxury hover:scale-110 w-full ${
                        buttonsVisible ? 'animate-fade-in animate-light-sweep' : ''
                      }`}
                      style={{ 
                        animationDelay: buttonsVisible ? '0.2s' : '0s',
                        background: buttonsVisible ? 'linear-gradient(135deg, rgba(255, 126, 95, 0.4), rgba(255, 193, 7, 0.5), rgba(255, 171, 64, 0.4))' : 'transparent',
                        backgroundSize: '300% 100%',
                        boxShadow: buttonsVisible ? '0 0 35px rgba(255, 171, 64, 0.6), inset 0 0 25px rgba(255, 193, 7, 0.3)' : 'none'
                      }}
                    >
                      <FluidButtonBackground />
                      <span className="relative z-10">{t('portfolio.cta.btn1')}</span>
                    </Button>
                  </Link>
                </OptimizedButton3DWrapper>
                
                <OptimizedButton3DWrapper 
                  isVisible={buttonsVisible} 
                  delay={0.4}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    variant="hero-luxury" 
                    size="xl" 
                    className={`relative overflow-hidden font-inter font-medium hover-scale transform transition-all duration-500 hover:shadow-luxury hover:scale-110 w-full ${
                      buttonsVisible ? 'animate-fade-in animate-light-sweep' : ''
                    }`}
                    style={{ 
                      animationDelay: buttonsVisible ? '0.4s' : '0s',
                      background: buttonsVisible ? 'linear-gradient(135deg, rgba(255, 126, 95, 0.4), rgba(255, 193, 7, 0.5), rgba(255, 171, 64, 0.4))' : 'transparent',
                      backgroundSize: '300% 100%',
                      boxShadow: buttonsVisible ? '0 0 35px rgba(255, 171, 64, 0.6), inset 0 0 25px rgba(255, 193, 7, 0.3)' : 'none'
                    }}
                  >
                    <FluidButtonBackground />
                    <span className="relative z-10">{t('portfolio.cta.btn2')}</span>
                  </Button>
                </OptimizedButton3DWrapper>
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
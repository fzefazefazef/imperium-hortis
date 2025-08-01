import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";

const Philosophie = () => {
  const { t } = useLanguage();

  return (
    <Layout navTheme="default">
      <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground pt-20 sm:pt-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-soft-white mb-12 text-center">
            {t('philosophy.title').split(' ')[0]} <span className="text-sage-green">{t('philosophy.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <div className="space-y-12">
            <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
              <h2 className="font-cinzel text-2xl md:text-3xl font-semibold text-sage-green mb-6">
                {t('philosophy.art.title')}
              </h2>
              <p className="font-inter text-lg text-soft-white/90 leading-relaxed mb-6">
                {t('philosophy.art.desc1')}
              </p>
              <p className="font-inter text-lg text-soft-white/90 leading-relaxed">
                {t('philosophy.art.desc2')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-4">
                  {t('philosophy.heritage.title')}
                </h3>
                <p className="font-inter text-soft-white/80 leading-relaxed">
                  {t('philosophy.heritage.desc')}
                </p>
              </div>

              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-4">
                  {t('philosophy.innovation.title')}
                </h3>
                <p className="font-inter text-soft-white/80 leading-relaxed">
                  {t('philosophy.innovation.desc')}
                </p>
              </div>
            </div>

            <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
              <h2 className="font-cinzel text-2xl md:text-3xl font-semibold text-sage-green mb-6">
                {t('philosophy.commitment.title')}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌿</div>
                  <h4 className="font-cinzel font-semibold text-soft-white mb-2">{t('philosophy.commitment.authenticity')}</h4>
                  <p className="font-inter text-sm text-soft-white/70">{t('philosophy.commitment.authenticity.desc')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-cinzel font-semibold text-soft-white mb-2">{t('philosophy.commitment.sustainability')}</h4>
                  <p className="font-inter text-sm text-soft-white/70">{t('philosophy.commitment.sustainability.desc')}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">👑</div>
                  <h4 className="font-cinzel font-semibold text-soft-white mb-2">{t('philosophy.commitment.luxury')}</h4>
                  <p className="font-inter text-sm text-soft-white/70">{t('philosophy.commitment.luxury.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="luxury" size="xl" className="font-inter font-medium">
                {t('philosophy.back')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Philosophie;
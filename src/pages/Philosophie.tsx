import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";

const Philosophie = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

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
                 "{t('philosophy.intro.quote')}"
               </p>
               <div className="space-y-6 text-lg md:text-xl text-soft-white/85 font-light leading-relaxed">
                 <p>
                   {t('philosophy.intro.theater')}
                 </p>
                 <p className="italic text-sage-green/90">
                   {t('philosophy.intro.poetry')}
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
                 {t('philosophy.heritage.text1')}
               </p>
               <p>
                 {t('philosophy.heritage.text2')} 
                 <span className="text-sage-green italic"> {t('philosophy.heritage.elegance')}</span>
               </p>
               <p className="italic text-soft-white/70">
                 {t('philosophy.heritage.text3')}
               </p>
             </div>
          </section>

          {/* Separator */}
          <div className="w-24 h-px bg-sage-green/30 mx-auto mb-24"></div>

          {/* Vision */}
          <section className="mb-24">
             <div className="text-center mb-16">
               <h3 className="font-cinzel text-3xl md:text-4xl font-light text-sage-green tracking-wide">
                 {t('philosophy.vision.title')}
               </h3>
             </div>
             <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-soft-white/85 font-light leading-relaxed text-center">
               <p>
                 {t('philosophy.vision.text1')}
               </p>
               <p>
                 {t('philosophy.vision.text2')}
               </p>
               <p>
                 {t('philosophy.vision.text3')} 
                 <span className="text-sage-green italic"> {t('philosophy.vision.approach')}</span>{t('philosophy.vision.text4')}
               </p>
               <p className="italic text-soft-white/70">
                 {t('philosophy.vision.text5')}
               </p>
             </div>
          </section>

          {/* Separator */}
          <div className="w-24 h-px bg-sage-green/30 mx-auto mb-24"></div>

          {/* Innovation */}
          <section className="mb-24">
             <div className="text-center mb-16">
               <h3 className="font-cinzel text-3xl md:text-4xl font-light text-sage-green tracking-wide">
                 {t('philosophy.innovation.title')}
               </h3>
             </div>
             <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-soft-white/85 font-light leading-relaxed text-center">
               <p className="text-2xl font-light italic text-sage-green/90">
                 "{t('philosophy.innovation.quote')}"
               </p>
               <p>
                 {t('philosophy.innovation.text1')}
               </p>
               <p className="italic text-soft-white/70">
                 {t('philosophy.innovation.text2')}
               </p>
             </div>
          </section>

          {/* Separator */}
          <div className="w-24 h-px bg-sage-green/30 mx-auto mb-24"></div>

          {/* Piliers d'engagement */}
          <section className="mb-32">
             <div className="text-center mb-20">
               <h3 className="font-cinzel text-3xl md:text-4xl font-light text-sage-green tracking-wide mb-6">
                 {t('philosophy.pillars.title')}
               </h3>
             </div>
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
               <div className="text-center group">
                 <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">🌿</div>
                 <h4 className="font-cinzel text-xl font-light text-sage-green mb-6 tracking-wide">{t('philosophy.pillars.authenticity.title')}</h4>
                 <p className="font-playfair text-soft-white/70 leading-normal font-light">
                   {t('philosophy.pillars.authenticity.desc')}
                 </p>
               </div>
               <div className="text-center group">
                 <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">⚡</div>
                 <h4 className="font-cinzel text-xl font-light text-sage-green mb-6 tracking-wide">{t('philosophy.pillars.sustainability.title')}</h4>
                 <p className="font-playfair text-soft-white/70 leading-normal font-light">
                   {t('philosophy.pillars.sustainability.desc')}
                 </p>
               </div>
               <div className="text-center group">
                 <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300">👑</div>
                 <h4 className="font-cinzel text-xl font-light text-sage-green mb-6 tracking-wide">{t('philosophy.pillars.excellence.title')}</h4>
                 <p className="font-playfair text-soft-white/70 leading-normal font-light">
                   {t('philosophy.pillars.excellence.desc')}
                 </p>
               </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center pb-32">
            <Button 
              variant="outline" 
              size="lg" 
              className="font-cinzel font-light tracking-wider text-sage-green border-sage-green hover:bg-sage-green hover:text-deep-charcoal transition-all duration-300 px-12 py-4"
              onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
              }}
            >
              {t('philosophy.cta')}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Philosophie;
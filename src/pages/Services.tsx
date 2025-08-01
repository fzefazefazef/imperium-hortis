import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LogoHeader from "@/components/LogoHeader";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.service1.title'),
      description: t('services.service1.desc'),
      features: t('services.service1.features').split(', '),
      icon: "🌺"
    },
    {
      title: t('services.service2.title'),
      description: t('services.service2.desc'),
      features: t('services.service2.features').split(', '),
      icon: "🏛️"
    },
    {
      title: t('services.service3.title'),
      description: t('services.service3.desc'),
      features: t('services.service3.features').split(', '),
      icon: "⛲"
    },
    {
      title: t('services.service4.title'),
      description: t('services.service4.desc'),
      features: t('services.service4.features').split(', '),
      icon: "✨"
    },
    {
      title: t('services.service5.title'),
      description: t('services.service5.desc'),
      features: t('services.service5.features').split(', '),
      icon: "💡"
    },
    {
      title: t('services.service6.title'),
      description: t('services.service6.desc'),
      features: t('services.service6.features').split(', '),
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
      <LogoHeader />
      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-30">
        <div className="flex space-x-8">
          {[
            { name: t('nav.philosophie'), path: "/philosophie" },
            { name: t('nav.portfolio'), path: "/portfolio" },
            { name: t('nav.contact'), path: "/contact" }
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
            {t('services.title').split(' ')[0]} <span className="text-sage-green">{t('services.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <p className="font-inter text-xl text-soft-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
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
              {t('services.custom.title')}
            </h2>
            <p className="font-inter text-lg text-soft-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('services.custom.desc')}
            </p>
            <Link to="/contact">
              <Button variant="luxury" size="xl" className="font-inter font-medium">
                {t('services.custom.btn')}
              </Button>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="minimal" size="xl" className="font-inter font-medium">
                {t('services.back')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
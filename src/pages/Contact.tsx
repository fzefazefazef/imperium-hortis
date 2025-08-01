import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-30">
        <div className="flex space-x-8">
          {[
            { name: t('nav.home'), path: "/" },
            { name: t('nav.philosophie'), path: "/philosophie" },
            { name: t('nav.services'), path: "/services" },
            { name: t('nav.portfolio'), path: "/portfolio" }
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
            <span className="text-sage-green">{t('contact.title')}</span>
          </h1>
          
          <p className="font-inter text-xl text-soft-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
              <h2 className="font-cinzel text-2xl font-semibold text-sage-green mb-8">
                {t('contact.form.title')}
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                      {t('contact.form.firstname')} *
                    </label>
                    <Input 
                      placeholder={t('contact.form.firstname')}
                      className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                      {t('contact.form.lastname')} *
                    </label>
                    <Input 
                      placeholder={t('contact.form.lastname')}
                      className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.email')} *
                  </label>
                  <Input 
                    type="email"
                    placeholder="exemple@email.com"
                    className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50"
                  />
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.phone')}
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+33 6 58 40 41 91"
                    className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50"
                  />
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.project')}
                  </label>
                  <select className="w-full p-3 bg-background/50 border border-sage-green/30 rounded-md text-soft-white">
                    <option value="">{t('contact.form.project')}</option>
                    <option value="jardin-prive">Jardin privé</option>
                    <option value="terrasse">Terrasse et patio</option>
                    <option value="commercial">Espace commercial</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.budget')}
                  </label>
                  <select className="w-full p-3 bg-background/50 border border-sage-green/30 rounded-md text-soft-white">
                    <option value="">{t('contact.form.budget')}</option>
                    <option value="20-50k">20 000 - 50 000 €</option>
                    <option value="50-100k">50 000 - 100 000 €</option>
                    <option value="100-250k">100 000 - 250 000 €</option>
                    <option value="250k+">Plus de 250 000 €</option>
                  </select>
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.description')} *
                  </label>
                  <Textarea 
                    placeholder={t('contact.form.description')}
                    className="bg-background/50 border-sage-green/30 text-soft-white placeholder:text-soft-white/50 min-h-[120px]"
                  />
                </div>

                <Button variant="luxury" size="xl" className="w-full font-inter font-medium">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-6">
                  {t('contact.info.title')}
                </h3>
                
                <div className="space-y-6">

                  <div className="flex items-start space-x-4">
                    <div className="text-sage-green text-xl">📞</div>
                    <div>
                      <h4 className="font-inter font-medium text-soft-white mb-1">{t('contact.info.phone')}</h4>
                      <div className="flex items-center space-x-3">
                        <p className="font-inter text-soft-white/70">+33 6 58 40 41 91</p>
                        <a 
                          href="https://wa.me/33658404191" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform duration-200"
                          title="Contacter via WhatsApp"
                        >
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            className="text-green-500 hover:text-green-400"
                          >
                            <path 
                              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" 
                              fill="currentColor"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-sage-green text-xl">✉️</div>
                    <div>
                      <h4 className="font-inter font-medium text-soft-white mb-1">{t('contact.info.email')}</h4>
                      <p className="font-inter text-soft-white/70">contact@imperium-hortis.fr</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-sage-green/20">
                <h3 className="font-cinzel text-xl font-semibold text-sage-green mb-6">
                  {t('contact.areas.title')}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Cannes", "Monaco", "Nice", "Antibes",
                    "Saint Paul de Vence", "Menton", "Grasse", "Saint Jean Cap-Ferrat"
                  ].map((city) => (
                    <div key={city} className="flex items-center space-x-2">
                      <span className="text-sage-green">•</span>
                      <span className="font-inter text-soft-white/80">{city}</span>
                    </div>
                  ))}
                </div>
                
                <p className="font-inter text-soft-white/60 text-sm mt-4">
                  {t('contact.areas.note')}
                </p>
              </div>

            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="minimal" size="xl" className="font-inter font-medium">
                {t('contact.back')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
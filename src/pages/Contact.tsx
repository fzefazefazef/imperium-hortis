import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
                          <img 
                            src={whatsappIcon}
                            alt="WhatsApp" 
                            width="20" 
                            height="20" 
                            className="hover:opacity-80"
                          />
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
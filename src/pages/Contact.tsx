import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import LogoHeader from "@/components/LogoHeader";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.description) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await (supabase as any)
        .from('contact_requests')
        .insert({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || null,
          project_type: formData.projectType,
          description: formData.description
        });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        projectType: '',
        description: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-charcoal via-midnight-blue to-deep-charcoal text-foreground">
      <LogoHeader />
      {/* Navigation */}
      <nav className="absolute top-8 right-8 z-30">
        <div className="flex space-x-8">
          {[
            { name: t('nav.philosophie'), path: "/philosophie" },
            { name: t('nav.services'), path: "/services" },
            { name: t('nav.portfolio'), path: "/portfolio" }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-cinzel text-sm font-medium text-soft-white/90 hover:text-whisper-gold transition-all duration-300 hover:scale-105 tracking-wider"
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
            <span className="text-whisper-gold">{t('contact.title')}</span>
          </h1>
          
          <p className="font-inter text-xl text-soft-white/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-whisper-gold/20">
              <h2 className="font-cinzel text-2xl font-semibold text-whisper-gold mb-8">
                {t('contact.form.title')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                      {t('contact.form.firstname')} *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.firstname')}
                      className="bg-background/50 border-whisper-gold/30 text-soft-white placeholder:text-soft-white/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                      {t('contact.form.lastname')} *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.lastname')}
                      className="bg-background/50 border-whisper-gold/30 text-soft-white placeholder:text-soft-white/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.email')} *
                  </label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="exemple@email.com"
                    className="bg-background/50 border-whisper-gold/30 text-soft-white placeholder:text-soft-white/50"
                    required
                  />
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.phone')}
                  </label>
                  <Input 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+33 6 42 86 78 90"
                    className="bg-background/50 border-whisper-gold/30 text-soft-white placeholder:text-soft-white/50"
                  />
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.project')}
                  </label>
                  <Input 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre type de projet..."
                    className="bg-background/50 border-whisper-gold/30 text-soft-white placeholder:text-soft-white/50"
                  />
                </div>

                <div>
                  <label className="font-inter text-soft-white/80 text-sm mb-2 block">
                    {t('contact.form.description')} *
                  </label>
                  <Textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.description')}
                    className="bg-background/50 border-whisper-gold/30 text-soft-white placeholder:text-soft-white/50 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="luxury" 
                  size="xl" 
                  className="w-full font-inter font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : t('contact.form.submit')}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-whisper-gold/20">
                <h3 className="font-cinzel text-xl font-semibold text-whisper-gold mb-6">
                  {t('contact.info.title')}
                </h3>
                
                <div className="space-y-6">

                  <div className="flex items-start space-x-4">
                    <div className="text-whisper-gold text-xl">📞</div>
                    <div className="flex-1">
                      <h4 className="font-inter font-medium text-soft-white mb-1">{t('contact.info.phone')}</h4>
                      <p className="font-inter text-soft-white/70 mb-3">+33 6 58 40 41 91</p>
                      
                      <div className="flex items-center space-x-3">
                        <a 
                          href="https://wa.me/33658404191" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 rounded-lg border border-green-500/30 hover:border-green-500/50 transition-all duration-200 group"
                          title="Contacter via WhatsApp"
                        >
                          <img 
                            src={whatsappIcon}
                            alt="WhatsApp" 
                            width="18" 
                            height="18" 
                            className="group-hover:scale-110 transition-transform duration-200"
                          />
                          <span className="font-inter text-sm text-green-400 group-hover:text-green-300">
                            Contactez-nous
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-whisper-gold text-xl">✉️</div>
                    <div>
                      <h4 className="font-inter font-medium text-soft-white mb-1">{t('contact.info.email')}</h4>
                      <p className="font-inter text-soft-white/70">contact@imperiumhortis.com</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-whisper-gold/20">
                <h3 className="font-cinzel text-xl font-semibold text-whisper-gold mb-6">
                  {t('contact.areas.title')}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Cannes", "Monaco", "Nice", "Antibes",
                    "Saint Paul de Vence", "Menton", "Grasse", "Saint Jean Cap-Ferrat"
                  ].map((city) => (
                    <div key={city} className="flex items-center space-x-2">
                      <span className="text-whisper-gold">•</span>
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
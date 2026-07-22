import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const inputClass =
  "bg-[#FDFBF7] border-imperial/20 text-ink placeholder:text-ink-soft/50 rounded-xl focus-visible:ring-imperial";
const labelClass = "font-inter text-[12px] uppercase tracking-[0.1em] text-ink-soft mb-2 block";

const Contact = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Honeypot anti-spam : champ invisible que seuls les bots remplissent.
  const [honeypot, setHoneypot] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam : si le honeypot est rempli, on ignore silencieusement la soumission.
    if (honeypot) {
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.description) {
      toast({
        title: t('contact.error.title'),
        description: t('contact.error.fields'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '794ce625-fd4a-483c-8d0f-ac7c20e2c96d',
          subject: `Nouvelle demande — ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          project: formData.projectType,
          description: formData.description,
          replyto: formData.email,
          botcheck: honeypot,
        }),
      });

      const responseText = await response.text();
      let data: { success?: boolean; message?: string } = {};
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch {
        console.error('[contact] non-JSON response body:', responseText);
      }

      if (!response.ok || !data?.success) {
        console.error('[contact] server responded with an error:', response.status, responseText);
        throw new Error(data?.message || `Envoi impossible (${response.status})`);
      }

      toast({
        title: t('contact.success.title'),
        description: t('contact.success.desc'),
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
        title: t('contact.error.title'),
        description: t('contact.error.submit'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const cities = [
    t('contact.cities.cannes'), t('contact.cities.monaco'), t('contact.cities.nice'), t('contact.cities.antibes'),
    t('contact.cities.saintpaul'), t('contact.cities.menton'), t('contact.cities.grasse'), t('contact.cities.saintjean'),
  ];

  return (
    <Layout>
      <PageHeader eyebrow={t('nav.contact')} title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <section className="bg-cream px-6 md:px-12 lg:px-20 py-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14">
          {/* Formulaire */}
          <Reveal>
            <div className="rounded-[18px] bg-[#FDFBF7] border border-imperial/[0.14] p-8 md:p-10">
              <h2 className="font-cinzel font-semibold text-[22px] text-ink mb-8">
                {t('contact.form.title')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot anti-spam : masqué visuellement et hors tabulation. */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                />
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{t('contact.form.firstname')} *</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder={t('contact.form.firstname')} className={inputClass} required />
                  </div>
                  <div>
                    <label className={labelClass}>{t('contact.form.lastname')} *</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder={t('contact.form.lastname')} className={inputClass} required />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t('contact.form.email')} *</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder={t('contact.form.placeholder.email')} className={inputClass} required />
                </div>

                <div>
                  <label className={labelClass}>{t('contact.form.phone')}</label>
                  <Input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder={t('contact.form.placeholder.phone')} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>{t('contact.form.project')}</label>
                  <Input name="projectType" value={formData.projectType} onChange={handleInputChange} placeholder={t('contact.form.placeholder.project')} className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>{t('contact.form.description')} *</label>
                  <Textarea name="description" value={formData.description} onChange={handleInputChange} placeholder={t('contact.form.description')} className={`${inputClass} min-h-[120px]`} required />
                </div>

                <Button type="submit" variant="pill-primary" size="pill" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </Reveal>

          {/* Infos */}
          <div className="space-y-8">
            <Reveal delay={120}>
              <div className="rounded-[18px] bg-[#FDFBF7] border border-imperial/[0.14] p-8 md:p-10">
                <h3 className="font-cinzel font-semibold text-[19px] text-ink mb-6">{t('contact.info.title')}</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-imperial w-5 h-5 mt-1 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <div className="flex-1">
                      <h4 className="font-inter font-medium text-ink mb-1">{t('contact.info.phone')}</h4>
                      <p className="font-inter font-light text-ink-soft mb-3">+33 7 63 63 83 57</p>
                      <a
                        href="https://wa.me/33763638357"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 bg-imperial/5 hover:bg-imperial/10 rounded-full border border-imperial/20 hover:border-imperial/40 transition-all duration-200 group"
                        title="WhatsApp"
                      >
                        <img src={whatsappIcon} alt="WhatsApp" width="18" height="18" className="group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-inter text-sm text-imperial">{t('contact.whatsapp')}</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-imperial w-5 h-5 mt-1 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <h4 className="font-inter font-medium text-ink mb-1">{t('contact.info.email')}</h4>
                      <p className="font-inter font-light text-ink-soft">contact@imperiumhortis.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="rounded-[18px] bg-[#FDFBF7] border border-imperial/[0.14] p-8 md:p-10">
                <h3 className="font-cinzel font-semibold text-[19px] text-ink mb-6">{t('contact.areas.title')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {cities.map((city) => (
                    <div key={city} className="flex items-center gap-3">
                      <span className="h-px w-4 bg-brass shrink-0" />
                      <span className="font-inter font-light text-ink-soft">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="font-inter font-light text-ink-soft/80 text-sm mt-5">{t('contact.areas.note')}</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="text-center mt-14">
          <Button variant="pill-ghost-dark" size="pill" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
            {t('contact.back')}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
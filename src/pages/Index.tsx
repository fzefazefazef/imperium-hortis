import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ArchImage from "@/components/ArchImage";
import ArchPattern from "@/components/ArchPattern";
import OliveBranch from "@/components/OliveBranch";
import { useLanguage } from "@/contexts/LanguageContext";
import { SproutIcon, SunIcon, WateringCanIcon } from "@/components/AnimatedIcons";
import { useNavigate } from "react-router-dom";

const TRADITION_IMG = "/lovable-uploads/ee27c698-a25c-4ad1-b54c-c46f6a762fff.png";

const services = [
  { key: "gardens", Icon: SproutIcon },
  { key: "terraces", Icon: SunIcon },
  { key: "art", Icon: WateringCanIcon },
] as const;

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* ===== Une tradition d'excellence ===== */}
      <section className="relative bg-cream py-20 px-6 md:px-12 lg:px-20 md:py-28 overflow-hidden">
        <OliveBranch className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-[420px] text-imperial opacity-[0.10] hidden md:block" />

        <div className="relative mx-auto max-w-6xl grid items-center gap-12 md:gap-[72px] md:[grid-template-columns:1.05fr_0.95fr]">
          {/* Texte */}
          <div>
            <Reveal className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brass" />
              <span className="font-inter text-[11px] uppercase tracking-[0.26em] text-imperial">
                {t("home.tradition.eyebrow")}
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="font-cinzel font-semibold text-ink mb-7" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>
                {t("about.title")}
              </h2>
            </Reveal>

            <Reveal delay={240}>
              <div className="space-y-5">
                {t("about.intro.text1")
                  .split("\n\n")
                  .map((p, i) => (
                    <p
                      key={i}
                      className={`font-inter font-light leading-[1.85] ${
                        i === 0 ? "text-imperial italic text-[17px]" : "text-ink-soft text-[15.5px]"
                      }`}
                    >
                      {p}
                    </p>
                  ))}
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-5 space-y-3">
                {t("about.intro.text2")
                  .split("\n")
                  .map((line, i) => (
                    <p key={i} className="font-inter font-light text-[15.5px] leading-[1.85] text-ink-soft">
                      {line}
                    </p>
                  ))}
              </div>
            </Reveal>

            {/* Filet + signature */}
            <div className="mt-9 flex items-center gap-4">
              <Reveal variant="line" delay={200} className="h-px w-16 bg-brass" />
              <span className="font-cinzel text-[13px] uppercase tracking-[0.18em] text-imperial">
                {t("home.tradition.signature")}
              </span>
            </div>
          </div>

          {/* Image en arche */}
          <Reveal variant="image" delay={200} className="mx-auto w-full max-w-[min(380px,80vw)]">
            <ArchImage src={TRADITION_IMG} alt={t("about.title")} />
          </Reveal>
        </div>
      </section>

      {/* ===== Nos savoir-faire (services) ===== */}
      <section className="bg-cream-deep py-20 px-6 md:px-12 lg:px-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col items-center text-center mb-16">
            <span className="font-cinzel font-semibold text-ink" style={{ fontSize: "clamp(28px, 3.6vw, 40px)" }}>
              {t("home.services.title")}
            </span>
            <span className="mt-5 h-px w-16 bg-brass" />
          </Reveal>

          <div className="grid gap-7 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.key} delay={120 * (i + 1)}>
                <div
                  className="service-card group h-full rounded-[18px] bg-[#FDFBF7] border border-imperial/[0.14] hover:border-imperial/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(28,35,26,0.09)]"
                  style={{ padding: "40px 26px" }}
                >
                  <s.Icon size={54} />
                  <h3 className="mt-5 font-cinzel font-semibold text-[17px] text-ink">
                    {t(`home.services.${s.key}.title`)}
                  </h3>
                  <p className="mt-3 font-inter font-light text-[13.5px] leading-[1.7] text-ink-soft">
                    {t(`home.services.${s.key}.desc`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={480} className="text-center mt-14">
            <Button
              variant="pill-ghost-dark"
              size="pill"
              onClick={() => {
                navigate("/services");
                window.scrollTo(0, 0);
              }}
            >
              {t("index.services.discover")}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA jardin d'éternité ===== */}
      <section className="relative bg-ink text-center overflow-hidden py-20 px-6 md:py-28">
        <ArchPattern />

        <div className="relative mx-auto max-w-2xl flex flex-col items-center">
          <Reveal className="flex items-center gap-4 mb-6">
            <span className="h-px w-9 bg-brass/80" />
            <span className="font-inter text-[11.5px] uppercase tracking-[0.28em] text-sage">
              {t("home.cta.eyebrow")}
            </span>
            <span className="h-px w-9 bg-brass/80" />
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-cinzel font-semibold text-cream leading-[1.15]" style={{ fontSize: "clamp(30px, 4.5vw, 50px)" }}>
              <span className="text-shine-soft">{t("home.contact.title")}</span>
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 font-inter font-light text-[15px] leading-[1.75] text-cream/65 max-w-[460px]">
              {t("home.contact.desc")}
            </p>
          </Reveal>

          <Reveal delay={360} className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              variant="pill-cream"
              size="pill"
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              {t("home.contact.appointment")}
            </Button>
            <Button
              variant="pill-ghost-light"
              size="pill"
              onClick={() => {
                navigate("/portfolio");
                window.scrollTo(0, 0);
              }}
            >
              {t("home.cta.portfolio")}
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

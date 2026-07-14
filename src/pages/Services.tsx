import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import {
  FlowerIcon,
  TopiaryIcon,
  ShearsIcon,
  IrrigationIcon,
  LightIcon,
  GrowthIcon,
} from "@/components/AnimatedIcons";

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    { title: t("services.seasonal.title"), description: t("services.seasonal.desc"), Icon: FlowerIcon },
    { title: t("services.service6.title"), description: t("services.service6.desc"), Icon: TopiaryIcon },
    { title: t("services.optimization.title"), description: t("services.optimization.desc"), Icon: LightIcon },
    { title: t("services.selection.title"), description: t("services.selection.desc"), Icon: GrowthIcon },
    { title: t("services.service4.title"), description: t("services.service4.desc"), Icon: ShearsIcon },
    { title: t("services.lawn.title"), description: t("services.lawn.desc"), Icon: IrrigationIcon },
  ];

  return (
    <Layout>
      <PageHeader eyebrow={t("nav.services")} title={t("services.title")} subtitle={t("services.subtitle")} />

      {/* Grille compacte des services : 3×2 desktop, 2 col tablette, 1 col mobile */}
      <section className="bg-cream px-6 md:px-12 lg:px-20 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 min-[880px]:grid-cols-2 min-[1080px]:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <div
                className="flex h-full items-start gap-4 rounded-2xl border border-imperial/[0.14] bg-[#FDFBF7] transition-all duration-500 hover:-translate-y-1 hover:border-imperial/30 hover:shadow-[0_14px_32px_rgba(28,35,26,0.08)]"
                style={{ padding: "24px 22px" }}
              >
                <s.Icon size={46} className="shrink-0" />
                <div>
                  <h3 className="font-cinzel font-semibold text-[14.5px] text-ink">{s.title}</h3>
                  <p className="mt-2 line-clamp-3 font-inter font-light text-[12.5px] leading-[1.6] text-ink-soft">
                    {s.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service sur-mesure */}
      <section className="bg-cream-deep px-6 md:px-12 lg:px-20 py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-cinzel font-semibold text-ink mb-5" style={{ fontSize: "clamp(26px, 3.4vw, 38px)" }}>
            {t("services.custom.title")}
          </h2>
          <p className="font-inter font-light text-[15.5px] leading-[1.8] text-ink-soft mb-8 max-w-2xl mx-auto">
            {t("services.custom.desc")}
          </p>
          <Button variant="pill-primary" size="pill" onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}>
            {t("services.custom.btn")}
          </Button>
        </Reveal>

        <Reveal delay={120} className="text-center mt-12">
          <Button variant="pill-ghost-dark" size="pill" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
            {t("services.back")}
          </Button>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Services;

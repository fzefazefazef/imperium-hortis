import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const Portfolio = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const inspirations = [
    { title: t("portfolio.inspiration1.title"), description: t("portfolio.inspiration1.desc"), imageUrl: "/lovable-uploads/7a082011-48b3-4306-80d8-ce1e622452d2.png" },
    { title: t("portfolio.inspiration2.title"), description: t("portfolio.inspiration2.desc"), imageUrl: "/lovable-uploads/38da725e-39e9-45ef-a4e5-c5553b93a25e.png" },
    { title: t("portfolio.inspiration3.title"), description: t("portfolio.inspiration3.desc"), imageUrl: "/lovable-uploads/64b79018-b45e-43d4-9bb6-84e10796b05f.png" },
    { title: t("portfolio.inspiration4.title"), description: t("portfolio.inspiration4.desc"), imageUrl: "/lovable-uploads/460c4834-1cf3-40f1-a24c-b50659ad31c2.png" },
  ];

  return (
    <Layout>
      <PageHeader eyebrow={t("nav.portfolio")} title="Portfolio" subtitle={t("portfolio.intro")} />

      <section className="bg-cream px-6 md:px-12 lg:px-20 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Vision */}
          <Reveal className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-inter font-light text-[15.5px] leading-[1.85] text-ink-soft">
              {t("portfolio.vision")}
            </p>
          </Reveal>

          {/* Signatures paysagères */}
          <Reveal className="flex flex-col items-center text-center mb-12">
            <h2 className="font-cinzel font-semibold text-ink" style={{ fontSize: "clamp(26px, 3.4vw, 38px)" }}>
              {t("portfolio.inspirations.title")}
            </h2>
            <span className="mt-5 h-px w-16 bg-brass" />
          </Reveal>

          <div className="grid gap-x-8 gap-y-12 lg:grid-cols-2">
            {inspirations.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 120}>
                <div className="group relative">
                  {/* Cadre filaire laiton décalé, apparaît au hover */}
                  <div
                    className="pointer-events-none absolute -inset-3 rounded-[22px] border border-brass/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  <div className="overflow-hidden rounded-[18px] border border-imperial/[0.12]">
                    <div className="aspect-video overflow-hidden bg-cream-deep">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform [transition-duration:800ms] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="bg-[#FDFBF7] p-7">
                      <h3 className="font-cinzel font-semibold text-[19px] text-ink mb-3">{item.title}</h3>
                      <p className="font-inter font-light text-[14px] leading-[1.7] text-ink-soft">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal className="mt-20 rounded-[18px] bg-cream-deep border border-imperial/[0.12] p-10 md:p-14 text-center">
            <p className="font-inter font-light text-[15.5px] leading-[1.8] text-ink-soft mb-8 max-w-2xl mx-auto">
              {t("portfolio.cta.desc")}
            </p>
            <Button variant="pill-primary" size="pill" onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}>
              {t("portfolio.cta.btn1")}
            </Button>
          </Reveal>

          <div className="text-center mt-14">
            <Button variant="pill-ghost-dark" size="pill" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
              {t("portfolio.back")}
            </Button>
            <p className="mt-4 font-inter font-light text-[11px] leading-tight text-ink-soft/50 max-w-md mx-auto">
              {t("portfolio.note")}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;

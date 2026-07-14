import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import OliveBranch from "@/components/OliveBranch";

const ROMAN = ["I", "II", "III"];

const bodyText =
  "font-inter font-light text-[15.5px] leading-[1.9] text-ink-soft text-left";
const lettrine =
  "first-letter:font-cinzel first-letter:text-[52px] first-letter:leading-[0.8] first-letter:text-imperial first-letter:float-left first-letter:pr-3 first-letter:pt-1.5";

const Separator = () => (
  <div className="flex justify-center py-4">
    <Reveal variant="line" className="h-px w-20 bg-brass/70" />
  </div>
);

/** Citation sur rail laiton — phrases-clés de la philosophie, alignées à gauche. */
const Quote = ({
  text,
  attribution,
  delay = 0,
}: {
  text: string;
  attribution?: string;
  delay?: number;
}) => (
  <Reveal delay={delay}>
    <blockquote className="border-l border-brass pl-7 text-left">
      <p className="font-cinzel italic text-imperial" style={{ fontSize: "19px", lineHeight: 1.65 }}>
        {text}
      </p>
      {attribution && (
        <cite className="not-italic mt-3 block font-inter text-[11px] uppercase tracking-[0.22em] text-ink-soft">
          {attribution}
        </cite>
      )}
    </blockquote>
  </Reveal>
);

const Philosophie = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const romanPillars = [
    { key: "heritage", title: t("philosophy.roman.heritage.title"), desc: t("philosophy.roman.heritage.desc") },
    { key: "exigence", title: t("philosophy.roman.exigence.title"), desc: t("philosophy.roman.exigence.desc") },
    { key: "serenite", title: t("philosophy.roman.serenite.title"), desc: t("philosophy.roman.serenite.desc") },
  ];

  const pillarBase = "group relative pt-9 px-6 min-[880px]:px-9 pb-4";
  const pillarSeparated = `${pillarBase} border-t border-brass/25 min-[880px]:border-t-0 min-[880px]:border-l`;

  return (
    <Layout>
      <PageHeader
        eyebrow={t("nav.philosophie")}
        title={t("philosophy.title")}
        subtitle={t("philosophy.intro.quote")}
      />

      {/* ===== Bloc éditorial principal ===== */}
      {/* Note : le clip du décor vit dans un calque dédié, jamais sur un ancêtre du
          titre sticky — overflow-hidden sur un parent casserait position:sticky. */}
      <section className="relative bg-cream px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <OliveBranch
            className="absolute -right-14 top-1/2 hidden w-[340px] text-imperial opacity-[0.09] lg:block"
            style={{ transform: "translateY(-50%) scaleX(-1)" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-y-10 min-[880px]:grid-cols-[0.9fr_1.4fr] min-[880px]:gap-x-[60px]">
          {/* Titre sticky */}
          <div className="self-start min-[880px]:sticky min-[880px]:top-[90px]">
            <Reveal>
              <h2 className="font-cinzel font-semibold text-ink" style={{ fontSize: "clamp(26px, 3.4vw, 38px)" }}>
                {t("philosophy.heritage.title")}
              </h2>
              <span className="mt-5 block h-px w-14 bg-brass" />
            </Reveal>
          </div>

          {/* Corps */}
          <div className="space-y-7">
            <Reveal>
              <p className={`${bodyText} ${lettrine}`}>{t("philosophy.intro.theater")}</p>
            </Reveal>

            <Quote delay={120} text={t("philosophy.intro.poetry")} attribution="— Imperium Hortis" />

            <Reveal delay={0}>
              <p className={bodyText}>{t("philosophy.heritage.text1")}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className={bodyText}>
                {t("philosophy.heritage.text2")}
                <span className="text-imperial italic"> {t("philosophy.heritage.elegance")}</span>
              </p>
            </Reveal>

            <Quote delay={240} text={t("philosophy.heritage.text3")} />
          </div>
        </div>
      </section>

      {/* ===== Piliers en chiffres romains ===== */}
      <section className="bg-cream-deep px-6 md:px-12 lg:px-20 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 border-t border-brass/35 min-[880px]:grid-cols-3">
          {romanPillars.map((p, i) => (
            <Reveal key={p.key} delay={120 * i}>
              <div className={i === 0 ? pillarBase : pillarSeparated}>
                <span className="pillar-hover-line absolute left-0 top-0 h-px w-0 bg-imperial transition-[width] duration-700 group-hover:w-full" />
                <span className="block font-cinzel text-[30px] text-brass/85">{ROMAN[i]}</span>
                <h4 className="mt-3 font-cinzel font-semibold text-[16.5px] text-ink">{p.title}</h4>
                <p className="mt-3 font-inter font-light text-[13.5px] leading-[1.75] text-ink-soft">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Une vision construite avec exigence ===== */}
      <section className="bg-cream px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <div className="mx-auto max-w-[640px]">
          <Reveal>
            <h2 className="mb-8 text-left font-cinzel font-semibold text-ink" style={{ fontSize: "clamp(26px, 3.4vw, 38px)" }}>
              {t("philosophy.vision.title")}
            </h2>
          </Reveal>
          <div className="space-y-7">
            <Reveal delay={120}>
              <p className={`${bodyText} ${lettrine}`}>{t("philosophy.vision.text1")}</p>
            </Reveal>
            <Reveal delay={240}>
              <p className={bodyText}>{t("philosophy.vision.text2")}</p>
            </Reveal>
            <Reveal delay={360}>
              <p className={bodyText}>
                {t("philosophy.vision.text3")}
                <span className="text-imperial italic"> {t("philosophy.vision.approach")}</span>
                {t("philosophy.vision.text4")}
              </p>
            </Reveal>
            <Quote delay={0} text={t("philosophy.vision.text5")} />
          </div>
        </div>
      </section>

      {/* ===== Innovation, tradition & excellence durable ===== */}
      <section className="bg-cream-deep px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <div className="mx-auto max-w-[640px]">
          <Reveal>
            <h2 className="mb-8 text-left font-cinzel font-semibold text-ink" style={{ fontSize: "clamp(26px, 3.4vw, 38px)" }}>
              {t("philosophy.innovation.title")}
            </h2>
          </Reveal>
          <div className="space-y-7">
            <Quote delay={0} text={t("philosophy.innovation.quote")} />
            <Reveal delay={120}>
              <p className={`${bodyText} ${lettrine}`}>{t("philosophy.innovation.text1")}</p>
            </Reveal>
            <Reveal delay={240}>
              <p className={bodyText}>{t("philosophy.innovation.text2")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Retour ===== */}
      <section className="bg-cream px-6 md:px-12 lg:px-20 py-16">
        <Separator />
        <div className="mt-2 text-center">
          <Button variant="pill-ghost-dark" size="pill" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
            {t("philosophy.cta")}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Philosophie;

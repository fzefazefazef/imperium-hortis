import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // prefers-reduced-motion : on met la vidéo en pause, le fond ink + contenu restent affichés.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mql.matches) video.pause();
      else video.play().catch(() => {});
    };
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* Fond encre uni — visible sous la vidéo tant qu'elle n'a pas de frame prête (ou en reduced-motion) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="metadata"
        onCanPlay={() => setIsVideoReady(true)}
        onLoadedData={() => setIsVideoReady(true)}
        style={{
          pointerEvents: "none",
          opacity: isVideoReady ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        <source src="/Professional_Mode_Transform_this_still_image_into_.mp4" type="video/mp4" />
      </video>

      {/* Overlay vert encre — assombrissement renforcé en bas, jamais vers le crème */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(23,29,21,.75), rgba(28,35,26,.6) 55%, rgba(28,35,26,.75) 100%)",
        }}
      />

      {/* Contenu */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl">
        {/* Eyebrow encadré de filets laiton */}
        <Reveal delay={0} className="flex items-center gap-4 mb-7">
          <span className="h-px w-9 bg-brass/80" />
          <span className="font-inter text-[11.5px] uppercase tracking-[0.28em] text-cream/70">
            {t("hero.eyebrow")}
          </span>
          <span className="h-px w-9 bg-brass/80" />
        </Reveal>

        {/* Titre */}
        <Reveal delay={120}>
          <h1 className="font-cinzel font-semibold leading-[1.05] text-cream" style={{ fontSize: "clamp(44px, 7vw, 84px)" }}>
            Imperium <span className="text-shine">Hortis</span>
          </h1>
        </Reveal>

        {/* Sous-titre */}
        <Reveal delay={240}>
          <p className="mt-6 font-inter font-light text-cream/75 leading-[1.7] max-w-[520px]" style={{ fontSize: "16.5px" }}>
            {t("hero.subtitle")}
          </p>
        </Reveal>

        {/* Boutons */}
        <Reveal delay={360} className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button
            variant="pill-primary"
            size="pill"
            onClick={() => {
              navigate("/services");
              window.scrollTo(0, 0);
            }}
          >
            {t("hero.btn.services")}
          </Button>
          <Button
            variant="pill-ghost-light"
            size="pill"
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
          >
            {t("hero.btn.consultation")}
          </Button>
        </Reveal>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="scroll-indicator" />
      </div>
    </section>
  );
};

export default HeroSection;

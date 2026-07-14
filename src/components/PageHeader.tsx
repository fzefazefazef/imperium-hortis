import Reveal from "@/components/Reveal";
import ArchPattern from "@/components/ArchPattern";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** mot du titre mis en dégradé animé (optionnel) */
  shineWord?: string;
}

/** Bandeau d'en-tête compact (fond ink) commun à toutes les pages intérieures. */
const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, subtitle, shineWord }) => {
  const renderTitle = () => {
    if (shineWord && title.includes(shineWord)) {
      const [before, after] = title.split(shineWord);
      return (
        <>
          {before}
          <span className="text-shine-soft">{shineWord}</span>
          {after}
        </>
      );
    }
    return title;
  };

  return (
    <>
      <header className="relative bg-ink px-6 pt-28 pb-16 text-center overflow-hidden md:pt-36 md:pb-24">
        <ArchPattern />
        <div className="relative mx-auto max-w-3xl flex flex-col items-center">
          <Reveal className="flex items-center gap-4 mb-6">
            <span className="h-px w-9 bg-brass/80" />
            <span className="font-inter text-[11.5px] uppercase tracking-[0.28em] text-sage">{eyebrow}</span>
            <span className="h-px w-9 bg-brass/80" />
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-cinzel font-semibold text-cream leading-[1.1]" style={{ fontSize: "clamp(34px, 5vw, 60px)" }}>
              {renderTitle()}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={240}>
              <p className="mt-5 font-inter font-light text-[16px] leading-[1.7] text-cream/70 max-w-[560px]">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </header>
      {/* Arête nette + filet laiton — remplace l'ancien voile crème */}
      <div
        className="h-px"
        style={{ background: "linear-gradient(90deg, transparent 8%, rgba(176,141,76,.55) 50%, transparent 92%)" }}
        aria-hidden="true"
      />
    </>
  );
};

export default PageHeader;

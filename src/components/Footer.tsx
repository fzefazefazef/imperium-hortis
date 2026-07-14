import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.philosophie"), path: "/philosophie" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.portfolio"), path: "/portfolio" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="bg-[#141a13] text-cream px-6 md:px-10 pt-[70px] pb-[34px]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:gap-10 md:[grid-template-columns:1.4fr_1fr_1fr]">
          {/* Colonne 1 — identité */}
          <Reveal>
            <h3 className="font-cinzel font-semibold text-[19px] tracking-[0.12em] uppercase text-cream mb-4">
              {t("footer.company")}
            </h3>
            <p className="font-inter font-light text-[13.5px] leading-[1.75] text-cream/55 max-w-[320px] mb-5">
              {t("footer.description")}
            </p>
            <p className="font-cinzel italic text-[14px] text-sage tracking-[0.02em]">
              « {t("footer.motto")}. »
            </p>
          </Reveal>

          {/* Colonne 2 — navigation */}
          <Reveal delay={120}>
            <h4 className="font-cinzel font-semibold text-[15px] tracking-[0.12em] uppercase text-cream mb-5">
              {t("footer.nav")}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="font-inter font-light text-[13.5px] text-cream/55 hover:text-cream transition-colors duration-300"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Colonne 3 — contact */}
          <Reveal delay={240}>
            <h4 className="font-cinzel font-semibold text-[15px] tracking-[0.12em] uppercase text-cream mb-5">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2.5 font-inter font-light text-[13.5px] text-cream/55">
              <li>
                <a
                  href="mailto:contact@imperiumhortis.com"
                  className="hover:text-cream transition-colors duration-300"
                >
                  contact@imperiumhortis.com
                </a>
              </li>
              <li>
                <a href="tel:+33763638357" className="hover:text-cream transition-colors duration-300">
                  +33 7 63 63 83 57
                </a>
              </li>
              <li>{t("footer.zone")}</li>
            </ul>
          </Reveal>
        </div>

        {/* Barre finale */}
        <div className="mt-14 pt-6 border-t border-brass/25 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-inter text-[11.5px] tracking-[0.08em] text-cream/35">
            © Imperium Hortis
          </span>
          <span className="font-cinzel text-[11.5px] tracking-[0.2em] text-cream/35">MMXXVI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

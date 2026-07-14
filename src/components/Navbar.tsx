import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import MobileMenu from "@/components/MobileMenu";

const LOGO = "/lovable-uploads/6696fecd-a03f-41e2-9652-937af241728a.png";
const LANGS: Array<"fr" | "en" | "it"> = ["fr", "en", "it"];

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: t("nav.philosophie"), path: "/philosophie" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.portfolio"), path: "/portfolio" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  // Couleurs pilotées par l'état de scroll : transparent + cream au-dessus du
  // bandeau sombre, crème floutée + ink une fois défilé.
  const textColor = scrolled ? "text-ink" : "text-cream";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[hsl(var(--cream)/0.88)] backdrop-blur-[14px] shadow-[0_1px_0_rgba(28,35,26,0.08)] py-[10px]"
          : "bg-transparent py-[14px]"
      }`}
      style={{ transitionDuration: "400ms" }}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 md:px-8">
        {/* Logo + wordmark */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Imperium Hortis — accueil">
          <img src={LOGO} alt="Imperium Hortis" className="h-[38px] w-auto object-contain" />
          <span
            className={`hidden sm:block font-cinzel font-semibold text-[15px] tracking-[0.14em] transition-colors duration-400 ${textColor}`}
          >
            IMPERIUM HORTIS
          </span>
        </Link>

        {/* Liens desktop */}
        <nav className="hidden xl:flex items-center gap-9">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => window.scrollTo(0, 0)}
              className={`nav-link font-inter text-[12.5px] font-medium uppercase tracking-[0.16em] transition-colors duration-400 ${textColor} hover:opacity-100`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Sélecteur de langue + CTA (desktop) */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="flex items-center gap-2 font-inter text-[12px] tracking-[0.12em]">
            {LANGS.map((code, i) => (
              <span key={code} className="flex items-center gap-2">
                {i > 0 && <span className={scrolled ? "text-ink-soft/50" : "text-cream/40"}>·</span>}
                <button
                  type="button"
                  onClick={() => setLanguage(code)}
                  className={`uppercase transition-colors duration-300 ${
                    language === code
                      ? `${scrolled ? "text-imperial" : "text-cream"} underline underline-offset-4 decoration-1`
                      : scrolled
                        ? "text-ink-soft hover:text-imperial"
                        : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {code}
                </button>
              </span>
            ))}
          </div>

          <Button
            variant="pill-primary"
            size="pill"
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className="!px-[22px] !py-[10px] !text-[12px]"
          >
            {t("hero.btn.consultation")}
          </Button>
        </div>

        {/* Menu mobile (toggle + panneau) */}
        <MobileMenu scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Navbar;

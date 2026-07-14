import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  /** true quand la nav a défilé (au-dessus d'un fond crème) → icône encre */
  scrolled?: boolean;
}

/**
 * Audit du bug "menu fantôme" (v4) — causes confirmées présentes avant correction :
 *  - #6 (confirmée par mesure) : le panneau/overlay `fixed` était rendu DANS <header>,
 *    qui applique `backdrop-blur` une fois scrollé. Un backdrop-filter sur un ancêtre
 *    crée un containing block pour ses descendants `position:fixed` : l'overlay se
 *    retrouvait borné à la hauteur du header (mesuré 64px) au lieu du viewport entier,
 *    et son contenu (Navigation/Langue/CTA) débordait visiblement par-dessus la page.
 *    → Fix : portail React direct dans document.body, hors de l'arbre du header.
 *  - #3 : rien ne fermait le panneau sur un changement de route hors clic menu
 *    (ex. logo cliqué pendant que le menu est ouvert, retour navigateur sur la même
 *    route). → Fix : useEffect sur useLocation().pathname.
 *  - #4 : aucun verrouillage du scroll du body à l'ouverture. → Fix : useEffect dédié
 *    avec cleanup systématique (fermeture ET démontage).
 *  - #1, #2, #5 : déjà corrects (démontage complet `{isOpen && ...}`, pas d'enfant
 *    fixed isolé) ; `overflow-x` de sécurité ajouté sur html/body dans index.css.
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ scrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLanguage, language, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Filet de sécurité : ferme le panneau à tout changement de route (logo cliqué,
  // navigation programmatique, bouton retour du navigateur).
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Verrouille le scroll du body tant que le panneau est ouvert ; le cleanup couvre
  // aussi bien la fermeture normale que le démontage (navigation en cours d'ouverture).
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const go = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const items = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.philosophie"), path: "/philosophie" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.portfolio"), path: "/portfolio" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const langs: Array<"fr" | "en" | "it"> = ["fr", "en", "it"];

  return (
    <div className="xl:hidden">
      {/* Toggle */}
      <button
        type="button"
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
          isOpen
            ? "text-cream"
            : scrolled
              ? "text-ink hover:bg-ink/5"
              : "text-cream hover:bg-cream/10"
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay + panneau : portés dans document.body, jamais dans <header>
          (voir note d'audit ci-dessus) — se démonte entièrement à la fermeture. */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-ink border-l border-brass/25 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex min-h-full flex-col pt-24 px-8 pb-10">
                {/* Navigation */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-8 bg-brass/60" />
                    <span className="font-inter text-[11px] uppercase tracking-[0.22em] text-brass">
                      Navigation
                    </span>
                  </div>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => go(item.path)}
                        className="block w-full text-left font-cinzel text-lg text-cream/90 hover:text-cream transition-colors duration-300 py-2.5 border-b border-cream/10"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Langues */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-brass/60" />
                    <span className="font-inter text-[11px] uppercase tracking-[0.22em] text-brass">
                      Langue
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-inter text-sm tracking-[0.14em]">
                    {langs.map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLanguage(code);
                          setIsOpen(false);
                        }}
                        className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center uppercase transition-colors duration-300 ${
                          language === code
                            ? "text-cream underline underline-offset-4 decoration-1"
                            : "text-cream/50 hover:text-cream"
                        }`}
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="pill-cream"
                  size="pill"
                  className="w-full"
                  onClick={() => go("/contact")}
                >
                  {t("hero.btn.consultation")}
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default MobileMenu;

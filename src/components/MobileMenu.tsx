import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const [showLanguages, setShowLanguages] = useState(false);
  const { setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const handleLanguageChange = (lang: 'fr' | 'en' | 'it') => {
    setLanguage(lang);
    setShowLanguages(false);
    setIsOpen(false);
  };

  const navigationItems = [
    { name: t('nav.philosophie'), path: "/philosophie" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.portfolio'), path: "/portfolio" },
    { name: t('nav.contact'), path: "/contact" }
  ];

  const languages: Array<{ code: 'fr' | 'en' | 'it', name: string, flag: JSX.Element }> = [
    { code: 'fr' as const, name: 'Français', flag: (
      <svg width="24" height="16" viewBox="0 0 24 16" className="border border-gray-400">
        <rect width="8" height="16" fill="#0055A4"/>
        <rect x="8" width="8" height="16" fill="#FFFFFF"/>
        <rect x="16" width="8" height="16" fill="#EF4135"/>
      </svg>
    )},
    { code: 'en' as const, name: 'English', flag: (
      <svg width="24" height="16" viewBox="0 0 24 16" className="border border-gray-400">
        <rect width="24" height="16" fill="#012169"/>
        <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFFFFF" strokeWidth="2"/>
        <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1"/>
        <rect x="10" width="4" height="16" fill="#FFFFFF"/>
        <rect width="24" height="3" y="6.5" fill="#FFFFFF"/>
        <rect x="11" width="2" height="16" fill="#C8102E"/>
        <rect width="24" height="1.5" y="7.25" fill="#C8102E"/>
      </svg>
    )},
    { code: 'it' as const, name: 'Italiano', flag: (
      <svg width="24" height="16" viewBox="0 0 24 16" className="border border-gray-400">
        <rect width="8" height="16" fill="#009246"/>
        <rect x="8" width="8" height="16" fill="#FFFFFF"/>
        <rect x="16" width="8" height="16" fill="#CE2B37"/>
      </svg>
    )}
  ];

  return (
    <div className="sm:hidden">
      {/* Menu Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-12 left-8 z-50 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/20"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-deep-charcoal to-midnight-blue border-l border-whisper-gold/20 shadow-2xl">
            <div className="flex flex-col h-full pt-20 px-6">
              
              {/* Navigation Items */}
              <div className="space-y-6 mb-8">
                <h3 className="font-cinzel-decorative text-lg font-semibold text-whisper-gold mb-4">
                  Navigation
                </h3>
                {navigationItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="block w-full text-left font-cinzel-decorative text-base font-medium text-white hover:text-whisper-gold transition-all duration-300 py-2 border-b border-whisper-gold/10 hover:border-whisper-gold/30"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Language Section */}
              <div className="border-t border-whisper-gold/20 pt-6">
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="flex items-center justify-between w-full font-cinzel-decorative text-lg font-semibold text-whisper-gold mb-4"
                >
                  <span className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Langue
                  </span>
                  <span className={`transform transition-transform ${showLanguages ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {showLanguages && (
                  <div className="space-y-3 ml-4">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="flex items-center space-x-3 w-full text-left font-cinzel text-sm text-white hover:text-whisper-gold transition-colors duration-300 py-2"
                      >
                        {lang.flag}
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Logo */}
              <div className="flex-1 flex items-end justify-center pb-8">
                <img 
                  src="/lovable-uploads/6696fecd-a03f-41e2-9652-937af241728a.png" 
                  alt="Imperium Hortis"
                  className="w-16 h-16 object-contain opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
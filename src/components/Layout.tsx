import React, { useState, useEffect } from "react";
import LogoHeader from "@/components/LogoHeader";
import MobileMenu from "@/components/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
  showDesktopNav?: boolean;
  navTheme?: 'default' | 'gold';
  showLogo?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showDesktopNav = true, 
  navTheme = 'default',
  showLogo = true
}) => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getNavLinkClasses = () => {
    const baseClasses = "font-cinzel-decorative text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 tracking-wider relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-right sm:text-left";
    
    // Détection de la page actuelle
    const isHomePage = location.pathname === '/';
    
    if (navTheme === 'gold') {
      return `${baseClasses} text-soft-white/90 hover:text-whisper-gold after:bg-whisper-gold`;
    }
    
    // Page d'accueil : blanc sur desktop
    if (isHomePage) {
      return `${baseClasses} text-white lg:text-white hover:text-whisper-gold after:bg-whisper-gold`;
    }
    
    // Autres pages : noir sur desktop uniquement
    return `${baseClasses} text-white lg:!text-black hover:text-whisper-gold lg:hover:!text-gray-700 after:bg-whisper-gold lg:after:bg-black`;
  };

  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const shouldShowMobileMenu = windowWidth < 1280; // Show mobile menu on mobile and tablet

  return (
    <div className="min-h-screen">
      {showLogo && <LogoHeader isVisible={!isMenuOpen} />}
      {shouldShowMobileMenu && <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}
      
      {/* Desktop Navigation - Visible on desktop only, hidden on tablet and mobile */}
      {showDesktopNav && (
        <nav className="absolute top-16 2xl:top-8 right-2 2xl:right-8 z-30 hidden xl:block">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
            {[
              { name: t('nav.philosophie'), path: "/philosophie" },
              { name: t('nav.services'), path: "/services" },
              { name: t('nav.portfolio'), path: "/portfolio" },
              { name: t('nav.contact'), path: "/contact" }
            ].map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={getNavLinkClasses()}
                style={{ 
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
      
      {children}
    </div>
  );
};

export default Layout;
import React, { useState } from "react";
import LogoHeader from "@/components/LogoHeader";
import MobileMenu from "@/components/MobileMenu";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
  showDesktopNav?: boolean;
  navTheme?: 'default' | 'gold';
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showDesktopNav = true, 
  navTheme = 'default' 
}) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkClasses = () => {
    const baseClasses = "font-cinzel-decorative text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 tracking-wider relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-right sm:text-left";
    
    if (navTheme === 'gold') {
      return `${baseClasses} text-soft-white/90 hover:text-whisper-gold after:bg-whisper-gold`;
    }
    
    return `${baseClasses} text-white hover:text-whisper-gold after:bg-whisper-gold`;
  };

  return (
    <div className="min-h-screen">
      <LogoHeader isVisible={!isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      
      {/* Desktop Navigation */}
      {showDesktopNav && (
        <nav className="absolute top-16 sm:top-8 right-2 sm:right-8 z-30 hidden sm:block">
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
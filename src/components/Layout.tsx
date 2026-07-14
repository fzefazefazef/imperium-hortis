import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  /** conservés pour compat ; la nav v2 est unifiée et gère elle-même son thème au scroll */
  showDesktopNav?: boolean;
  navTheme?: "default" | "gold";
  showLogo?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

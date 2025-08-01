import { Link } from "react-router-dom";
import oliveTreeLogo from "@/assets/olive-tree-logo.png";

interface LogoHeaderProps {
  isVisible?: boolean;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ isVisible = true }) => {
  return (
    <div className={`absolute top-4 left-4 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Link to="/" className="block">
        <img 
          src={oliveTreeLogo} 
          alt="Imperium Hortis - Olivier"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:scale-105 transform transition-transform"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </Link>
    </div>
  );
};

export default LogoHeader;
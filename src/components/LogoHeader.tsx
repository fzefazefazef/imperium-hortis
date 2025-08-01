import { Link } from "react-router-dom";

interface LogoHeaderProps {
  isVisible?: boolean;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ isVisible = true }) => {
  return (
    <div className={`absolute top-8 left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Link to="/" className="block">
        <img 
          src="/lovable-uploads/6696fecd-a03f-41e2-9652-937af241728a.png" 
          alt="Imperium Hortis"
          className="w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:scale-105 transform transition-transform"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </Link>
    </div>
  );
};

export default LogoHeader;
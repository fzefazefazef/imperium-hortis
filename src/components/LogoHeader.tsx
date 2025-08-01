import { Link } from "react-router-dom";

interface LogoHeaderProps {
  isVisible?: boolean;
}

const LogoHeader: React.FC<LogoHeaderProps> = ({ isVisible = true }) => {
  return (
    <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 lg:left-8 lg:transform-none lg:translate-x-0 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Link to="/" className="block">
        <img 
          src="/lovable-uploads/6696fecd-a03f-41e2-9652-937af241728a.png" 
          alt="Imperium Hortis"
          className="w-16 h-16 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:scale-105 transform transition-transform"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </Link>
    </div>
  );
};

export default LogoHeader;
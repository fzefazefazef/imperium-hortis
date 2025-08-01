import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <div className="absolute top-4 left-4 z-50">
      <Link to="/" className="block">
        <img 
          src="/lovable-uploads/6696fecd-a03f-41e2-9652-937af241728a.png" 
          alt="Imperium Hortis"
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
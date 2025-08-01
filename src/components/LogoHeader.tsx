import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <div className="absolute top-4 left-12 z-50">
      <Link to="/" className="block">
        <img 
          src="/lovable-uploads/6696fecd-a03f-41e2-9652-937af241728a.png" 
          alt="Imperium Hortis"
          className="w-36 h-36 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:scale-105 transform transition-transform"
        />
      </Link>
    </div>
  );
};

export default LogoHeader;
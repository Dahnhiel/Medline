import { Link } from 'react-router-dom';

export default function Logo({ className = '' }) {

  return (
    <Link to="/" className={`flex items-center gap-3 group transition-opacity hover:opacity-90 ${className}`}>
      {/* The Logo Image Container */}
      <div className="relative">
        <div className={`w-20 h-auto flex items-center justify-center`}>
          <img 
            src="https://static.wixstatic.com/media/1c999c_1706692751224de5bfee97d14833ed7a~mv2.png/v1/fill/w_145,h_79,al_c,q_85,enc_avif,quality_auto/Medline_Logo-removebg-preview.png" 
            alt="Medline Logo Icon" 
            className="w-10 h-auto object-contain"
          />
        </div>
      </div>
    </Link>
  );
}
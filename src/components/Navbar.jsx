import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Our Team' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/resources', label: 'Resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-teal-50' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <Logo variant={scrolled ? 'default' : 'light'} />
        </Link>

        {/* Desktop Nav - Using custom CSS classes defined in index.css */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `
                px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300
                ${isActive 
                  ? 'text-[#0B6E6E] bg-teal-50' 
                  : 'text-slate-600 hover:text-[#0B6E6E] hover:bg-teal-50/50'}
              `}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Section */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:4044646925" className="group flex items-center gap-2 text-sm font-bold text-[#063d3d] hover:text-[#0B6E6E] transition-colors">
            <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
              <i className="fa-solid fa-phone text-xs text-[#0B6E6E]"></i>
            </div>
            <span className="font-dm-sans">404.464.6925</span>
          </a>
          <Link 
            to="/contact" 
            className="px-6 py-2.5 bg-[#0B6E6E] text-white text-sm font-bold rounded-full shadow-lg shadow-teal-900/10 hover:bg-[#085a5a] hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-teal-50 text-[#0B6E6E]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-teal-50 transition-all duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `
                text-lg font-bold py-2 border-b border-slate-50
                ${isActive ? 'text-[#0B6E6E]' : 'text-slate-600'}
              `}
            >
              {label}
            </NavLink>
          ))}
          <div className="mt-4 flex flex-col gap-4">
             <Link to="/contact" className="w-full py-4 bg-[#0B6E6E] text-white text-center font-bold rounded-xl" onClick={() => setMenuOpen(false)}>
                Contact Us
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
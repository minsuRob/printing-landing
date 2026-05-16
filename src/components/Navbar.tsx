import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: '홈', href: '/' },
    { label: '티셔츠', href: '/tshirt-printing' },
    { label: '신발', href: '/sneaker-printing' },
    { label: '마스크', href: '/mask-printing' },
    { label: '모자', href: '/hat-printing' },
    { label: '가방', href: '/bag-printing' },
    { label: '필름', href: '/film-printing' },
    { label: '포트폴리오', href: '/portfolio' },
    { label: '제작 가이드', href: '/production-guide' },
  ];

  return (
    <>
      <header className="glass-nav sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm w-full">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-20 w-full">
          {/* Logo */}
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="font-h3 text-h3 font-bold text-primary tracking-tight hover:opacity-85 transition-opacity"
            >
              <img 
                alt="Shinui Deco Printing Logo" 
                className="h-10 w-auto object-contain" 
                src="/printing-landing/assets/logo.png" 
              />
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-bold transition-all hover:text-primary ${location.pathname === link.href ? 'text-primary' : 'text-on-surface-variant'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-all duration-300 active:scale-95">
              <span className="material-symbols-outlined text-on-surface">account_circle</span>
            </button>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 hover:bg-surface-container-low rounded-full transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-on-surface">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-outline-variant/20 animate-fadeIn">
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-on-surface hover:text-primary transition-colors font-bold py-2 ${location.pathname === link.href ? 'text-primary' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '홈', href: '#/' },
    { label: '쇼핑', href: '#/' },
    { label: '맞춤 주문', href: '#/' },
    { label: '갤러리', href: '#/' },
    { label: '커뮤니티', href: '#/' },
    { label: '고객 지원', href: '#/' },
  ];

  return (
    <>
      <CartDrawer />
      <header className="glass-nav sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm w-full">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center h-20 w-full">
          {/* Logo */}
          <div className="flex items-center gap-10">
            <a
              href="#/"
              className="font-h3 text-h3 font-bold text-primary dark:text-inverse-primary tracking-tight hover:opacity-85 transition-opacity"
            >
              <img 
                alt="Shinui Deco Printing Logo" 
                className="h-12 w-auto object-contain" 
                src="/printing-landing/assets/logo.png" 
              />
            </a>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#/" className="text-primary border-b-2 border-primary pb-0.5 font-semibold text-sm transition-colors">홈</a>
              <a href="#/tshirt-printing" className="text-on-surface-variant hover:text-primary transition-colors text-sm">쇼핑</a>
              <a href="#/" className="text-on-surface-variant hover:text-primary transition-colors text-sm">맞춤 주문</a>
              <a href="#/" className="text-on-surface-variant hover:text-primary transition-colors text-sm">갤러리</a>
              <a href="#/" className="text-on-surface-variant hover:text-primary transition-colors text-sm">커뮤니티</a>
              <a href="#/" className="text-on-surface-variant hover:text-primary transition-colors text-sm">고객 지원</a>
            </nav>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-surface-container-low rounded-full transition-all duration-300 active:scale-95"
            >
              <span className="material-symbols-outlined text-on-surface">shopping_cart</span>
              {totalItems > 0 && (
                <span className="cart-badge animate-cart-bounce">{totalItems}</span>
              )}
            </button>
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
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-on-surface hover:text-primary transition-colors font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;

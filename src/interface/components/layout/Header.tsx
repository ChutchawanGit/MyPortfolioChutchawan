import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { num: '01', name: 'TITLE', href: '#hero' },
    { num: '02', name: 'SPECS & ABOUT', href: '#about' },
    { num: '03', name: 'CHRONOLOGY', href: '#experience' },
    { num: '04', name: 'BLUEPRINTS', href: '#projects' },
    { num: '05', name: 'TRANSMIT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#072546]/95 backdrop-blur-md border-[var(--line)] shadow-[0_4px_24px_rgba(0,0,0,0.5)] py-2'
          : 'bg-[#0a3460]/90 backdrop-blur-sm border-[var(--ink-4)] py-3'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo / Engineering Drawing ID */}
          <a href="#hero" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-8 h-8 rounded-sm border border-[var(--cyan)] bg-[var(--paper-2)] flex items-center justify-center font-mono-code text-xs text-[var(--cyan)] font-bold group-hover:bg-[var(--cyan)] group-hover:text-[var(--paper-deep)] transition">
              CM
            </div>
            <div className="flex flex-col">
              <span className="font-cond font-bold text-lg md:text-xl tracking-wider text-[var(--ink)] uppercase leading-none">
                CHUTCHAWAN MEESRIMATUPOJ
              </span>
              <span className="font-mono-code text-[10px] tracking-[0.18em] text-[var(--cyan)] uppercase">
                DWG SET · FULL-STACK &amp; BACKEND
              </span>
            </div>
          </a>

          {/* Desktop Drawing Tabs */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono-code text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 border border-transparent hover:border-[var(--cyan)] hover:bg-[rgba(127,220,255,0.08)] text-[var(--ink-2)] hover:text-[var(--cyan)] transition rounded-sm flex items-center gap-1.5"
              >
                <span className="text-[10px] text-[var(--amber)] opacity-80">{link.num}</span>
                <span>{link.name}</span>
              </a>
            ))}
            <div className="pl-4 ml-2 border-l border-[var(--ink-4)] flex items-center gap-2 text-[11px] text-[var(--amber)]">
              <span className="w-2 h-2 rounded-full bg-[var(--amber)] animate-pulse"></span>
              <span>REV B · 2026</span>
            </div>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 border border-[var(--cyan)] bg-[rgba(127,220,255,0.08)] text-[var(--cyan)] rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-sm`}></i>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[var(--ink-4)] pb-3">
            <div className="grid grid-cols-1 gap-2 font-mono-code text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 border border-[var(--ink-4)] bg-[var(--paper-2)] hover:border-[var(--cyan)] text-[var(--ink)] hover:text-[var(--cyan)] flex items-center justify-between transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[var(--amber)]">{link.num}</span>
                    <span>{link.name}</span>
                  </span>
                  <i className="fas fa-arrow-right text-[10px] text-[var(--cyan)]"></i>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

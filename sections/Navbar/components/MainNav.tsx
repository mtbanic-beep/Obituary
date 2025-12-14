import { useState, useEffect } from "react";
import { Logo } from "@/sections/Navbar/components/Logo";
import { NavMenu } from "@/sections/Navbar/components/NavMenu";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const MainNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-3 lg:py-5 px-4 lg:px-8 relative transition-all duration-300 ${
      mobileMenuOpen 
        ? 'bg-[#5d6142]' 
        : isScrolled 
        ? 'bg-[#5d6142] shadow-lg' 
        : 'bg-[rgba(39,42,48,0.24)] backdrop-blur-sm'
    }`}>
      <div className="max-w-[1650px] mx-auto">
        <div className="flex items-center justify-between gap-4">
          <Logo />

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

          <NavMenu />
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

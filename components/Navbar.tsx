
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio', icon: 'fa-house' },
    { name: 'MARCAS', href: '#unidades-de-negocio', id: 'unidades-de-negocio', icon: 'fa-layer-group' },
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros', icon: 'fa-users' },
    { name: 'Contacto', href: '#contacto', id: 'contacto', icon: 'fa-paper-plane' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      setShowBackToTop(currentScroll > 500);

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: '-85px 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-[3px] bg-[#D92121] z-[10001] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <nav 
        className={`fixed top-0 left-0 w-full transition-all duration-500 z-[9999] transform-gpu ${
          scrolled || isMobileMenuOpen 
            ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-[0_8px_32px_rgba(0,0,0,0.05)]' 
            : 'py-5 md:py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-5 md:px-8 flex justify-between items-center">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')} 
            className="flex items-center gap-3 group relative z-[10000]"
          >
            <img 
              src="/images/logo_de_esbasa.png" 
              alt="Logo Grupo ESBASA" 
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-[10px] font-black uppercase tracking-wider transition-all duration-300 group rounded-lg ${
                    isActive ? 'text-[#D92121] bg-[#D92121]/5' : 'text-blue-950 hover:bg-slate-50'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <i className={`fa-solid ${link.icon} text-[13px] ${isActive ? 'opacity-100' : 'opacity-30'}`}></i>
                    <span>{link.name}</span>
                  </span>
                </a>
              );
            })}
          </div>


          <div className="flex lg:hidden items-center gap-3">
            <button 
              onClick={toggleMobileMenu}
              className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all shadow-lg relative z-[10000] ${
                isMobileMenuOpen ? 'bg-[#D92121] text-white' : 'bg-blue-950 text-white'
              }`}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
              </div>
            </button>
          </div>


        </div>
      </nav>

      {/* Botón de Ir Arriba */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-2xl z-[9995] flex items-center justify-center text-blue-950 transition-all duration-500 hover:bg-blue-950 hover:text-white hover:-translate-y-2 border-4 border-white ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <i className="fa-solid fa-arrow-up text-xl md:text-2xl"></i>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[9998] lg:hidden transition-all duration-700 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-md" onClick={closeMobileMenu}></div>
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-700 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full flex flex-col p-8 pt-24">
            <div className="space-y-2 mb-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 text-blue-950 text-base font-black uppercase tracking-tight"
                >
                  <i className={`fa-solid ${link.icon} w-8 text-lg opacity-40`}></i>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

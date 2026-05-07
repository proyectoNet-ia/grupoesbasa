
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-32 md:pt-44 pb-20 md:pb-32">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Textiles de Alta Gama ESBASA" 
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/10 to-white"></div>
        <div className="absolute inset-0 bg-marble opacity-10 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div 
          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 mb-8 md:mb-10 border border-blue-900/10 rounded-full bg-white/40 backdrop-blur-xl shadow-lg"
          data-aos="fade-down"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
          </span>
          <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-blue-950">
            Líderes en Soluciones Textiles
          </span>
        </div>
        
        <h1 
          className="text-[2.2rem] sm:text-[3rem] md:text-[4.15rem] lg:text-[5.75rem] font-black mb-6 md:mb-8 tracking-tighter leading-[0.9] text-blue-950 px-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          CALIDAD TEXTIL<br />
          <span className="relative inline-block text-[#D92121] italic font-serif group">
            A TU MEDIDA.
            <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-blue-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left hidden md:block"></span>
          </span>
        </h1>
        
        <div className="max-w-3xl mx-auto mb-10 md:mb-14">
          <p 
            className="text-[0.85rem] md:text-[1.15rem] text-slate-700 font-semibold leading-relaxed px-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            En <span className="text-blue-950 font-extrabold underline decoration-[#D92121] decoration-2 md:decoration-4">Grupo ESBASA</span>, fusionamos la elegancia de la alta costura con la robustez de la manufactura industrial. 
            Calidad mexicana de clase mundial.
          </p>
        </div>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a 
            href="#unidades-de-negocio" 
            onClick={handleScrollClick}
            className="group relative w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-blue-950 text-white font-black rounded-full transition-all hover:bg-[#D92121] shadow-xl uppercase tracking-widest text-[10px] md:text-[11px] overflow-hidden btn-premium-loop"
          >
            <span className="relative z-10">Explorar Marcas</span>
          </a>
          <a 
            href="#nosotros" 
            onClick={handleScrollClick}
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 border-2 border-blue-950/10 text-blue-950 font-black rounded-full hover:bg-blue-50 transition-all uppercase tracking-widest text-[10px] md:text-[11px] backdrop-blur-md"
          >
            Nuestra Historia
          </a>
        </div>
      </div>

      <a 
        href="#unidades-de-negocio"
        onClick={handleScrollClick}
        className="hidden md:flex absolute bottom-12 left-0 right-0 flex-col items-center justify-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 animate-bounce cursor-pointer group"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-950 to-transparent group-hover:from-[#D92121] transition-colors duration-300"></div>
        <span className="text-[9px] uppercase font-black tracking-[0.5em] text-blue-950 group-hover:text-[#D92121] transition-colors duration-300">Deslizar</span>
      </a>
    </div>
  );
};

export default Hero;

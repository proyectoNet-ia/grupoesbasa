
import React, { useState } from 'react';

const BrandExperience: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<'none' | 'ceremony' | 'uniforms'>('none');

  return (
    <section id="unidades-de-negocio" className="w-full bg-white">
      {/* Hero Split Section */}
      <div className="flex flex-col md:flex-row min-h-[60vh] w-full overflow-hidden border-b border-slate-100">
        {/* Ceremonias Arcángel Side */}
        <div 
          className="group relative flex-1 min-h-[30vh] md:min-h-0 overflow-hidden transition-[flex] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:flex-[1.4] cursor-pointer border-b md:border-b-0 md:border-r border-blue-50 will-change-[flex] transform-gpu"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://img.freepik.com/free-photo/portrait-child-getting-ready-their-first-communion_23-2149378008.jpg" 
              alt="Ceremonias Arcángel Background" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] md:group-hover:scale-110 grayscale-[30%] md:group-hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-[#FDF8F1]/95 via-[#FDF8F1]/80 to-transparent"></div>
          <div className="relative z-20 h-full flex flex-col items-start justify-center p-8 md:p-16 max-w-2xl">
            <span className="block text-[#8D6E63] font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4">Colección 2026</span>
            <div className="mb-6">
              <img 
                src="https://uijtnyffwfzbpclxiyzs.supabase.co/storage/v1/object/public/catalog/branding/1773161966388_5t3r3e.png" 
                alt="Ceremonias Arcángel" 
                className="h-[70px] md:h-[120px] w-auto object-contain transition-all duration-700"
              />
            </div>
            <div className="w-12 h-1 bg-[#C2B280] mb-6 transition-all duration-700 md:group-hover:w-32"></div>
            <p className="text-[#5D4037] text-xs md:text-sm lg:text-base font-medium max-w-sm mb-8 leading-relaxed">
              En Arcángel Ceremonias llevamos más de tres décadas en el ramo textil, fabricando y manufacturando productos ceremoniales con la dedicación y talento de muchas personas comprometidas con la calidad.
            </p>
            <a 
              href="https://www.ceremoniasarcangel.com/catalogo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-[#3E2723] font-black uppercase text-[9px] tracking-widest hover:text-[#C2B280] transition-colors"
            >
              Explorar Colección <i className="fa-solid fa-arrow-right-long text-[#C2B280]"></i>
            </a>
          </div>
        </div>

        {/* Uniformes ESBASA Side */}
        <div 
          className="group relative flex-1 min-h-[30vh] md:min-h-0 overflow-hidden transition-[flex] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:flex-[1.4] bg-blue-950 cursor-pointer will-change-[flex] transform-gpu"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://img.freepik.com/free-photo/portrait-successful-warehouse-worker-supervisor-with-crossed-arms-standing-large-storage-distribution-area_342744-1521.jpg" 
              alt="ESBASA Uniformes Background" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] md:group-hover:scale-110 opacity-60 grayscale-[50%] md:group-hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-l from-blue-950/95 via-blue-950/80 to-transparent"></div>
          <div className="relative z-20 h-full flex flex-col items-end justify-center p-8 md:p-16 text-right ml-auto max-w-2xl">
            <span className="block text-[#D92121] font-black text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4">Soluciones Corporativas</span>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none italic">
              ESBASA<br />
              <span className="text-[#D92121] not-italic">Uniformes</span>
            </h2>
            <div className="w-12 h-1 bg-white mb-6 transition-all duration-700 md:group-hover:w-32 ml-auto"></div>
            <p className="text-blue-100 text-xs md:text-base font-medium max-w-xs mb-8">
              Potenciamos la identidad de su institución con uniformes de alto rendimiento.
            </p>
            <div className="flex items-center gap-4 text-white/50 font-black uppercase text-[9px] tracking-widest">
              Sitio web próximamente
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};


export default BrandExperience;

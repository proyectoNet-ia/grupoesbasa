
import React from 'react';

interface BrandSplitProps {
  onSelect: (brand: 'none' | 'ceremony' | 'uniforms') => void;
}

const BrandSplit: React.FC<BrandSplitProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-[50vh] md:min-h-[60vh] w-full overflow-hidden bg-white">
      {/* Ceremonias Arcángel */}
      <a 
        href="#arcangel"
        data-aos="fade-right"
        className="group relative flex-1 min-h-[30vh] md:min-h-0 overflow-hidden transition-[flex] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:flex-[1.6] cursor-pointer border-b md:border-b-0 md:border-r border-blue-50 will-change-[flex] transform-gpu"
        onMouseEnter={() => onSelect('ceremony')}

      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.freepik.com/free-photo/portrait-child-getting-ready-their-first-communion_23-2149378008.jpg?t=st=1770752784~exp=1770756384~hmac=df63763abf9d9f0c22092c1948924b21088b4da0211b3038c19037e2daf7998d" 
            alt="Ceremonias Arcángel" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] md:group-hover:scale-110 grayscale-[30%] md:group-hover:grayscale-0"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-[#FDF8F1]/95 via-[#FDF8F1]/80 to-transparent"></div>
        <div className="relative z-20 h-full flex flex-col items-start justify-center p-8 md:p-24 max-w-2xl">
          <span className="block text-[#8D6E63] font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4">
            División Infantil Premium
          </span>
          <div className="mb-6">
            <img 
              src="https://uijtnyffwfzbpclxiyzs.supabase.co/storage/v1/object/public/catalog/branding/1773161966388_5t3r3e.png" 
              alt="Ceremonias Arcángel" 
              className="h-16 md:h-28 w-auto object-contain brightness-0 grayscale opacity-80 group-hover:brightness-100 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
          <div className="w-12 h-1 bg-red-600 mb-6 md:mb-8 transition-all duration-700 md:group-hover:w-32"></div>
          <p className="text-[#5D4037] text-sm md:text-lg font-medium max-w-md mb-8 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
            Vestir momentos sagrados con la pureza y elegancia que tu familia merece.
          </p>
          <div className="flex items-center gap-4 text-[#3E2723] font-black uppercase text-[9px] md:text-[10px] tracking-widest">
            Explorar Colección <i className="fa-solid fa-arrow-right-long text-red-600"></i>
          </div>
        </div>
      </a>

      {/* Uniformes ESBASA */}
      <a 
        href="#esbasa-uniformes"
        data-aos="fade-left"
        className="group relative flex-1 min-h-[30vh] md:min-h-0 overflow-hidden transition-[flex] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hover:flex-[1.6] bg-blue-950 cursor-pointer will-change-[flex] transform-gpu"
        onMouseEnter={() => onSelect('uniforms')}

      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.freepik.com/free-photo/portrait-successful-warehouse-worker-supervisor-with-crossed-arms-standing-large-storage-distribution-area_342744-1521.jpg?t=st=1770760639~exp=1770764239~hmac=d4320c9e702488b470b7bdb0d589ff6df05338742b8e750099406675e135ae42" 
            alt="ESBASA Uniformes" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] md:group-hover:scale-110 opacity-60 grayscale-[50%] md:group-hover:grayscale-0"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-l from-blue-950/95 via-blue-950/80 to-transparent"></div>
        <div className="relative z-20 h-full flex flex-col items-end justify-center p-8 md:p-24 text-right ml-auto max-w-2xl">
          <span className="block text-red-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4">
            Soluciones Corporativas
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none italic">
            ESBASA<br />
            <span className="text-red-600 not-italic">Uniformes</span>
          </h2>
          <div className="w-12 h-1 bg-white mb-6 md:mb-8 transition-all duration-700 md:group-hover:w-32 ml-auto"></div>
          <p className="text-blue-100 text-sm md:text-lg font-medium max-w-md mb-8 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
            Potenciamos la identidad de su institución con uniformes de alto rendimiento.
          </p>
          <div className="flex items-center gap-4 text-white font-black uppercase text-[9px] md:text-[10px] tracking-widest">
            <i className="fa-solid fa-arrow-left-long text-red-600"></i> Ver Catálogo
          </div>
        </div>
      </a>
    </div>
  );
};

export default BrandSplit;

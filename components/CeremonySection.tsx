
import React from 'react';

const CeremonySection: React.FC = () => {
  const products = [
    { 
      title: 'Primera Comunión', 
      subtitle: 'VESTIDOS DE GALA', 
      img: 'https://img.freepik.com/free-photo/portrait-child-getting-ready-their-first-communion_23-2149377998.jpg?t=st=1770760950~exp=1770764550~hmac=8302491f57289445d34eb32c36db9923be7930000af33adb9896e93f6701df2c' 
    },
    { 
      title: 'Bautizos', 
      subtitle: 'ROPONES FINOS', 
      img: 'https://img.freepik.com/free-photo/top-view-cute-baby-laying-bed_23-2149453505.jpg?t=st=1770761043~exp=1770764643~hmac=f6dc230dbc7a335cbcdc012766f5b87ddab7051e3c6f95b5d52e15888e5f315b' 
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-[#FDF8F1] relative overflow-hidden border-t border-[#E8D5C4]">
      <div className="absolute inset-0 bg-marble opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20" data-aos="fade-up">
          <span className="inline-block text-[#8D6E63] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4">Arte Ceremonial</span>
          <div className="flex justify-center mb-8">
            <a 
              href="https://www.ceremoniasarcangel.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://uijtnyffwfzbpclxiyzs.supabase.co/storage/v1/object/public/catalog/branding/1773161966388_5t3r3e.png" 
                alt="Ceremonias Arcángel Logo" 
                className="h-20 md:h-32 w-auto object-contain"
              />
            </a>
          </div>
          <p className="text-[#5D4037]/70 text-sm md:text-lg leading-relaxed font-light italic px-4">
            "Piezas auténticas que visten los momentos más importantes de tu vida. Como parte integral de <strong>Grupo ESBASA</strong>, con más de 30 años de tradición, cada prenda es fabricada con dedicación y talento artesanal."
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20">
          {products.map((p, i) => (
            <div 
              key={i} 
              className="group cursor-pointer" 
              data-aos="fade-up" 
              data-aos-delay={i * 200}
            >
              <div className="relative overflow-hidden aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] shadow-xl mb-6 bg-[#F5E6D3] border border-[#E8D5C4] transition-all duration-700">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover sepia-[0.1] md:sepia-[0.2] transition-all duration-[2000ms] group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-[#3E2723] mb-2">{p.title}</h4>
                <p className="text-[#A1887F] text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-black">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 flex flex-col items-center gap-6 px-4" data-aos="zoom-in">
          <button className="group relative w-full sm:w-auto px-10 md:px-16 py-4 md:py-5 bg-[#3E2723] text-white font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] rounded-full overflow-hidden shadow-2xl shadow-[#3E2723]/30 hover:scale-105 transition-transform">
            <span className="relative z-10">Descargar Catálogo Completo</span>
          </button>
          <p className="text-[#A1887F] text-[8px] md:text-[9px] font-bold uppercase tracking-widest italic opacity-60 text-center">Sastrería artesanal con entrega a domicilio</p>
        </div>
      </div>
    </div>
  );
};

export default CeremonySection;
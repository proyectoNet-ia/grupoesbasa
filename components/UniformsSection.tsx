
import React from 'react';

const UniformsSection: React.FC = () => {
  const categories = [
    { 
      name: 'Escolares', 
      desc: 'Diseñada para resistir el ritmo escolar diario y constante.', 
      icon: "fa-solid fa-graduation-cap",
      color: 'bg-blue-950' 
    },
    { 
      name: 'Empresariales', 
      desc: 'Comunica profesionalismo, elegancia e identidad corporativa.', 
      icon: "fa-solid fa-briefcase",
      color: 'bg-blue-950' 
    },
    { 
      name: 'Deportivos', 
      desc: 'Materiales de ventilación avanzada para alto desempeño.', 
      icon: "fa-solid fa-person-running",
      color: 'bg-blue-950' 
    },
  ];

  return (
    <div className="py-20 md:py-32 bg-white border-t border-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 w-full text-center lg:text-left" data-aos="fade-right">
            <span className="text-blue-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 inline-block">División Industrial</span>
            <h2 className="text-3xl md:text-6xl font-black text-blue-950 mb-6 md:mb-8 tracking-tighter leading-none italic">
              UNIFORMES <span className="text-red-600 not-italic">ESBASA</span>
            </h2>
            <p className="text-blue-900/60 text-sm md:text-lg mb-10 md:mb-12 leading-relaxed font-medium px-2 md:px-0">
              Ofrecemos soluciones integrales de vestuario para instituciones que buscan calidad inigualable y una imagen impecable.
            </p>
            
            <div className="grid gap-4 md:gap-6 text-left">
              {categories.map((cat, i) => (
                <div 
                  key={i} 
                  data-aos="fade-up" 
                  data-aos-delay={200 + (i * 150)}
                  className="group flex items-center md:items-start gap-4 md:gap-6 p-5 md:p-6 bg-blue-50/30 rounded-2xl border border-blue-100/50 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl ${cat.color} text-white shrink-0 shadow-lg shadow-blue-900/10 group-hover:bg-red-600 transition-colors`}>
                    <i className={`${cat.icon} text-base md:text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-blue-950 mb-1">{cat.name}</h4>
                    <p className="text-blue-900/50 text-[11px] md:text-sm leading-tight md:leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative mt-12 lg:mt-0" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg bg-blue-50" data-aos="zoom-in" data-aos-delay="300">
                  <img 
                    src="https://img.freepik.com/free-photo/supervisor-manager-male-engineer-worker-wears-uniform-working-hand-use-laptop-stock-checking-store-warehouse-shipping-industrial-team-with-safety-uniform-checking-quantity-product-shelf_609648-593.jpg?t=st=1770761255~exp=1770764855~hmac=11ba7f8ae316759e67ef1a1b45087863465f87da9e9317a69a79e68589cae8bd" 
                    alt="Industrial ESBASA" 
                    className="w-full h-44 md:h-64 object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg bg-blue-50" data-aos="zoom-in" data-aos-delay="500">
                  <img 
                    src="https://img.freepik.com/free-photo/medium-shot-woman-repairing-fashion-goods_23-2150627946.jpg?t=st=1770761529~exp=1770765129~hmac=eb8f175368f74fc3e2e876cb04a2af393c8284602382cf6d42084d66ffffbd89" 
                    alt="Producción Textil ESBASA" 
                    className="w-full h-44 md:h-64 object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg bg-blue-50" data-aos="zoom-in" data-aos-delay="400">
                  <img 
                    src="https://img.freepik.com/free-photo/confident-soccer-player-with-ball-play-football_176420-16458.jpg?t=st=1770761396~exp=1770764996~hmac=790b8a277236b13e0a306dc94268c3c26531fcc29a80f476593ea98cd0da8cc3" 
                    alt="Deportivos ESBASA" 
                    className="w-full h-44 md:h-64 object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg bg-blue-50" data-aos="zoom-in" data-aos-delay="600">
                  <img 
                    src="https://img.freepik.com/free-photo/portrait-young-girl-student-school-uniform_23-2150282547.jpg?t=st=1770761473~exp=1770765073~hmac=f3fcedf6419ef66d2b87dfc20c8794dfaddd1045087dd39c5a7d1380aedd9027" 
                    alt="Escolares ESBASA" 
                    className="w-full h-44 md:h-64 object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniformsSection;
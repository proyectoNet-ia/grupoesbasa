
import React from 'react';

const AboutUs: React.FC = () => {
  const pillars = [
    { 
      title: '30 Años de Tradición', 
      desc: 'Manufactura textil con dedicación y talento artesanal desde hace tres décadas.', 
      icon: "fa-solid fa-medal"
    },
    { 
      title: 'Tecnología Textil', 
      desc: 'Maquinaria de última generación para acabados extremos.', 
      icon: "fa-solid fa-gears"
    },
    { 
      title: 'Compromiso Humano', 
      desc: 'Talento mexicano de clase mundial en cada puntada.', 
      icon: "fa-solid fa-handshake-angle"
    }
  ];

  return (
    <div className="py-20 md:py-32 bg-slate-50 relative overflow-hidden w-full">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[120px] opacity-20 -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-100 rounded-full blur-[120px] opacity-20 -z-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        {/* Encabezado Principal */}
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 mb-20 md:mb-32">
          <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up">
            <div className="inline-block px-4 py-1 mb-6 rounded-lg bg-blue-950 text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em]">
              Grupo Espinoza Báez S.A. de C.V.
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-blue-950 mb-6 md:mb-8 tracking-tighter leading-[1] md:leading-[0.9] break-words">
              Más de 30 Años <br />
              <span className="text-[#D92121] italic font-serif">de Tradición.</span>
            </h2>
            <div className="space-y-6 mb-10">
              <p className="text-xs md:text-lg text-slate-600 leading-relaxed font-bold px-2 md:px-0 text-justify md:text-left">
                En Grupo ESBASA creemos que cada hilo representa compromiso, identidad y excelencia. Con más de 30 años de trayectoria en la industria textil, nos hemos consolidado como un corporativo sólido y visionario, integrado por diferentes marcas especializadas que comparten una misma filosofía: calidad, innovación y confianza en cada detalle.
              </p>
              <p className="text-xs md:text-base text-slate-500 leading-relaxed font-medium px-4 md:px-0 opacity-80 text-justify md:text-left">
                Nuestra experiencia abarca desde prendas para ceremonias y ocasiones especiales, hasta uniformes institucionales diseñados para proyectar profesionalismo y fortalecer la imagen de cada organización. Cada colección refleja la combinación perfecta entre tradición textil, diseño funcional y altos estándares de manufactura.
              </p>
              <p className="text-xs md:text-base text-slate-500 leading-relaxed font-medium px-4 md:px-0 opacity-80 text-justify md:text-left">
                Contamos con una infraestructura de producción de alto nivel, procesos de vanguardia y estrictos controles de calidad en cada etapa, lo que nos permite ofrecer soluciones textiles duraderas, elegantes y competitivas. En Grupo ESBASA trabajamos con pasión, precisión y visión empresarial para convertirnos en el aliado estratégico de instituciones, distribuidores y marcas que buscan excelencia, respaldo y prestigio en cada prenda.
              </p>
              <p className="text-xs md:text-base text-slate-500 leading-relaxed font-bold px-4 md:px-0 text-justify md:text-left">
                Más que fabricar textiles, construimos relaciones de confianza que trascienden generaciones.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative z-10 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl w-full max-w-md">
              <img 
                src="/images/hero-bg.jpg" 
                alt="Proceso Textil ESBASA" 
                className="w-full aspect-square md:aspect-none md:h-[750px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                <p className="text-lg md:text-3xl font-black italic">Tu éxito, a tu medida.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 md:mb-32">
          <div 
            className="group p-8 md:p-14 bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            data-aos="fade-right"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-blue-950 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <i className="fa-solid fa-bullseye text-2xl"></i>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-blue-950 mb-6 tracking-tight">Nuestra Misión</h3>
            <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium">
              Ser líderes en la fabricación y manufactura de productos para las nuevas generaciones, satisfaciendo las necesidades de nuestros clientes. Creemos firmemente en el comercio justo y en la vocación de servir con valores fundamentales: calidad, honradez, amabilidad y especial atención a los detalles.
            </p>
          </div>

          <div 
            className="group p-8 md:p-14 bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            data-aos="fade-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-[#D92121] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <i className="fa-solid fa-eye text-2xl"></i>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-blue-950 mb-6 tracking-tight">Nuestra Visión</h3>
            <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium">
              Ser el referente global de excelencia textil mexicana, reconocidos por nuestra capacidad de innovación, sostenibilidad y compromiso social, expandiendo nuestras marcas.
            </p>
          </div>
        </div>

        {/* Pilares de la Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((p, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={i * 200}
              className="group p-8 md:p-12 bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-100 hover:border-red-500/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-950 mb-6 md:mb-10 group-hover:bg-[#D92121] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <i className={`${p.icon} text-xl md:text-2xl`}></i>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-blue-950 mb-3 md:mb-4 tracking-tight">{p.title}</h3>
              <p className="text-sm md:text-slate-500 leading-relaxed font-medium">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

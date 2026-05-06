
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "525558921234"; // Reemplazar con el número real
  const message = encodeURIComponent("Hola Grupo ESBASA, me gustaría solicitar una cotización.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-28 right-8 z-[9990] flex flex-row-reverse items-center gap-4 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all duration-500 hover:scale-110 hover:-rotate-6 active:scale-95 overflow-hidden border-4 border-white"
      >
        <i className="fa-brands fa-whatsapp text-2xl md:text-3xl"></i>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </a>
      
      <div className="hidden md:flex flex-col bg-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-100 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Ventas</p>
        <p className="text-sm font-bold text-blue-950 whitespace-nowrap">¿En qué podemos ayudarte?</p>
      </div>

      {/* Sutil Glow en lugar de punto rojo sólido */}
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white"></span>
      </span>
    </div>
  );
};

export default WhatsAppButton;

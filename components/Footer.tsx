
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <a href="#inicio" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-800 to-[#D92121] rounded flex items-center justify-center text-white font-bold italic shadow-lg group-hover:scale-110 transition-transform">
              E
             </div>
            <span className="text-lg font-extrabold tracking-tighter">
              GRUPO <span className="text-[#D92121]">ESBASA</span>
            </span>
          </a>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            <a href="#nosotros" className="hover:text-[#D92121] transition-colors">Nosotros</a>
            <a href="#unidades-de-negocio" className="hover:text-[#D92121] transition-colors">Marcas</a>
            <a href="#contacto" className="hover:text-[#D92121] transition-colors">Contacto</a>
          </div>

          <div className="text-sm text-blue-300/60 italic text-center md:text-right">
            © {new Date().getFullYear()} Grupo ESBASA. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

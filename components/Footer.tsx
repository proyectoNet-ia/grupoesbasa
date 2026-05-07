
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-sm text-blue-200">
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#unidades-de-negocio" className="hover:text-white transition-colors">Marcas</a>
            <a 
              href="https://www.ceremoniasarcangel.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Ceremonias Arcángel
            </a>
            <span className="opacity-50 cursor-default">Uniformes ESBASA</span>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="text-sm text-blue-300/60 italic text-center md:text-right">
            © 2026. Grupo Espinoza Baez S.A. de C.V. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

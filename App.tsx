
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BrandExperience from './components/BrandExperience';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Extend window for AOS global variable
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<'none' | 'ceremony' | 'uniforms'>('none');

  useEffect(() => {
    // Inicialización optimizada de AOS
    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-out-quad',
          offset: 80,
          touchGesture: true,
          mirror: false
        });
      }
    };

    // Esperar a que el DOM esté listo
    if (document.readyState === 'complete') {
      initAOS();
    } else {
      window.addEventListener('load', initAOS);
      return () => window.removeEventListener('load', initAOS);
    }
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-red-600 selection:text-white">
      <Navbar />
      {/* <WhatsAppButton /> */}
      
      <main className="w-full overflow-x-hidden">
        {/* Seccion Inicio */}
        <section id="inicio" className="scroll-mt-0 w-full overflow-hidden">
          <Hero />
        </section>

        {/* Experiencia de Marcas (Fusionada) */}
        <BrandExperience />

        {/* Seccion Nosotros (Incluye Misión y Visión) */}
        <section 
          id="nosotros" 
          className="scroll-mt-24 w-full overflow-hidden"
        >
          <AboutUs />
        </section>

        {/* Sección de Estadísticas (Aparecen abajo de Nosotros para validar el impacto) */}
        <Stats />

        {/* Seccion Contacto */}
        <section 
          id="contacto" 
          className="scroll-mt-24 w-full overflow-hidden"
        >
          <Contact />
        </section>
      </main>


      <Footer />
    </div>
  );
};

export default App;

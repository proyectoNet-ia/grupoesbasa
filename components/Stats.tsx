
import React, { useEffect, useState } from 'react';

interface StatItemProps {
  number: number;
  suffix: string;
  label: string;
  icon: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, suffix, label, icon, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div 
      className="flex flex-col items-center text-center p-6"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-red-500 mb-6 border border-white/10 shadow-xl backdrop-blur-md">
        <i className={`fa-solid ${icon} text-2xl`}></i>
      </div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] text-blue-200 opacity-70">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { number: 20, suffix: '+', label: 'Años de Historia', icon: 'fa-calendar-check' },
    { number: 500, suffix: '+', label: 'Clientes Felices', icon: 'fa-handshake' },
    { number: 1, suffix: 'M+', label: 'Prendas Anuales', icon: 'fa-shirt' },
    { number: 50, suffix: '+', label: 'Expertos Textiles', icon: 'fa-user-gear' },
  ];

  return (
    <section className="relative py-20 bg-blue-950 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-marble"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full blur-[150px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              {...stat} 
              delay={index * 150} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

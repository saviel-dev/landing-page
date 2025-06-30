import React from 'react';
import { useEffect, useState } from 'react';

const CLIENTS = [
  { 
    id: 1, 
    name: 'Draculotto', 
    logo: '/img/clientes/Draculotto.png',
    description: 'Juegos de azar y entretenimiento'
  },
  { 
    id: 2, 
    name: 'Ferro Metales', 
    logo: '/img/clientes/FerroMetales.png',
    description: 'Materiales y soluciones metálicas'
  },
  { 
    id: 3, 
    name: 'Mi Emisora', 
    logo: '/img/clientes/Mi emisora.png',
    description: 'Tu conexión con la música'
  },
  { 
    id: 4, 
    name: 'Mi Caserita', 
    logo: '/img/clientes/miCaserita.png',
    description: 'Mercados y variedades'
  },
];

// Add styles to document head
const useAnimationStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
};

const ClientsCarousel = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize animations
  useAnimationStyles();
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  if (!isMounted) return null;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Empresas que han confiado en nuestros servicios y soluciones innovadoras
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {CLIENTS.map((client, index) => (
            <div 
              key={client.id}
              className="bg-card rounded-xl shadow-sm hover:shadow-md border border-border/50 flex flex-col items-center justify-center p-6 hover:bg-card/90 transition-all duration-300 transform hover:-translate-y-1 h-64"
            >
              <div className="w-32 h-20 mb-4 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22128%22%20height%3D%2280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22128%22%20height%3D%2280%22%20fill%3D"%23f3f4f6"%2F%3E%3Ctext%20x%3D%2264%22%20y%3D%2245%22%20font-family%3D"Arial"%20font-size%3D"14"%20text-anchor%3D"middle"%20alignment-baseline%3D"middle"%20fill%3D"%236b7280"%3E{client.name}%3C%2Ftext%3E%3C%2Fsvg%3E';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 text-center">{client.name}</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">{client.description}</p>
              <div className="w-12 h-1 bg-primary/20 rounded-full my-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;

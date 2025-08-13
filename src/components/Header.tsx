
import { useState } from "react";
import { AlignRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#clientes", label: "Clientes" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-blue-500/90 backdrop-blur-md border-b border-blue-400/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Profile Image */}
          <a href="#inicio" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/logoSimple.png" 
              alt="Julian Herrera Logo" 
              className="h-10 w-auto md:h-12"
              style={{ maxWidth: 'none' }}
            />
            <span className="text-white text-lg md:text-xl font-bold tracking-tight">Julian Herrera</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white transition-all duration-200 font-medium px-3 py-1.5 rounded-md hover:outline hover:outline-2 hover:outline-blue-300/60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              className="bg-white text-blue-500 font-medium px-6 py-2 rounded-md border-2 border-transparent 
              hover:bg-transparent hover:text-white hover:border-white hover:scale-105 
              transform transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg"
              onClick={() => {
                const contactoSection = document.getElementById('contacto');
                if (contactoSection) {
                  contactoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Cotizar Proyecto
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-blue-600/80 h-14 w-14 flex items-center justify-center rounded-full transition-all duration-200 shadow-lg hover:shadow-blue-400/30"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 transform transition-transform duration-200 hover:scale-110" />
              ) : (
                <AlignRight className="h-7 w-7 transform transition-transform duration-200 hover:scale-110" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 py-3 space-y-2 bg-blue-500/90 backdrop-blur-md border-t border-blue-400/30 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-full max-w-xs text-center px-4 py-3 text-base text-white/90 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 active:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="w-full max-w-xs bg-white text-blue-500 hover:bg-transparent hover:text-white hover:border-white border-2 border-transparent mt-2"
              onClick={() => {
                setIsMenuOpen(false);
                const contactoSection = document.getElementById('contacto');
                if (contactoSection) {
                  contactoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Cotizar Proyecto
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

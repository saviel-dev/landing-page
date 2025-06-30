
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="fixed w-full top-0 z-50 bg-blue-900/80 backdrop-blur-md border-b border-blue-300/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Profile Image */}
          <a href="#inicio" className="flex items-center">
            <img 
              src="/img/julio.png" 
              alt="Julio Herrera" 
              className="h-10 w-auto md:h-12"
              style={{ maxWidth: 'none' }}
            />
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
              className="bg-blue-gradient hover:opacity-90 text-white"
              onClick={() => {
                const clientesSection = document.getElementById('clientes');
                if (clientesSection) {
                  clientesSection.scrollIntoView({ behavior: 'smooth' });
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
              className="text-white hover:bg-white/10 h-10 w-10 flex items-center justify-center"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-4 py-3 space-y-2 bg-blue-900/95 backdrop-blur-md border-t border-blue-300/30">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base text-white/90 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10 active:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <Button 
                className="w-full bg-blue-gradient text-white py-3 text-base font-medium"
                onClick={() => {
                  setIsMenuOpen(false);
                  const clientesSection = document.getElementById('clientes');
                  if (clientesSection) {
                    clientesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Cotizar Proyecto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

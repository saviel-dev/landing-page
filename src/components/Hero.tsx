
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 pb-20 bg-blue-gradient-light overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          {/* Entrance Annotation */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            Transformamos tus ideas en realidad digital
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Desarrollo Web
            <span className="block text-blue-gradient">Profesional</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Creamos sitios web modernos, rápidos y seguros que impulsan tu negocio. 
            Desde páginas web básicas hasta soluciones empresariales complejas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-gradient hover:opacity-90 text-white text-lg px-8 py-4">
              Ver Planes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-blue-600 border-blue-300 hover:bg-blue-50 text-lg px-8 py-4">
              Ver Portfolio
            </Button>
          </div>

          {/* Features Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-left">
              <Code className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Código Limpio</h3>
              <p className="text-gray-600">Desarrollamos con las mejores prácticas y estándares modernos.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Zap className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Alta Performance</h3>
              <p className="text-gray-600">Sitios web optimizados para velocidad y experiencia de usuario.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-right">
              <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Seguro</h3>
              <p className="text-gray-600">Implementamos las mejores medidas de seguridad y protección.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="animate-fade-in-up">
            {/* Entrance Annotation */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="h-4 w-4" />
              Transformamos tus ideas en realidad digital
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Redefiniendo el
              <span className="block text-blue-gradient">desarrollo web</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-600 font-normal mt-2">
                a través de la tecnología
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              Combinando la experiencia offline y online en un canal único de experiencia 
              unificada con flexibilidad de entrega y retiro pensada en soluciones modernas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-gradient hover:opacity-90 text-white text-lg px-8 py-4">
                Comenzar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-blue-600 border-blue-300 hover:bg-blue-50 text-lg px-8 py-4">
                Ver Portfolio
              </Button>
            </div>

            {/* Features Cards - Horizontal */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <Code className="h-8 w-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Código Limpio</h3>
                  <p className="text-xs text-gray-600">Estándares modernos</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <Zap className="h-8 w-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Alta Performance</h3>
                  <p className="text-xs text-gray-600">Velocidad optimizada</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                <Shield className="h-8 w-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">100% Seguro</h3>
                  <p className="text-xs text-gray-600">Máxima protección</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              {/* Main illustration container */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                {/* Character illustration */}
                <div className="flex justify-center items-center mb-8">
                  <div className="relative">
                    {/* Person pushing cart */}
                    <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center relative">
                      <div className="w-16 h-20 bg-red-600 rounded-t-full"></div>
                      <div className="absolute top-8 left-8 w-6 h-6 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-12 left-10 w-2 h-1 bg-gray-600 rounded"></div>
                    </div>
                    {/* Arms */}
                    <div className="absolute top-16 -left-8 w-16 h-4 bg-orange-300 rounded-full transform -rotate-12"></div>
                    <div className="absolute top-16 -right-8 w-16 h-4 bg-orange-300 rounded-full transform rotate-12"></div>
                    {/* Legs */}
                    <div className="absolute top-28 left-4 w-8 h-16 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-28 right-4 w-8 h-16 bg-blue-400 rounded-full"></div>
                  </div>
                </div>

                {/* Shopping cart */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-16 border-4 border-gray-800 rounded-lg relative">
                    <div className="absolute -bottom-4 left-2 w-4 h-4 bg-gray-800 rounded-full"></div>
                    <div className="absolute -bottom-4 right-2 w-4 h-4 bg-gray-800 rounded-full"></div>
                    <div className="absolute -left-8 top-2 w-8 h-2 bg-gray-800 rounded"></div>
                  </div>
                </div>

                {/* Product icons grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-400 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 left-0 w-8 h-8 bg-blue-200 rounded-full opacity-30 transform -translate-x-1/2"></div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

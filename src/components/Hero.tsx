
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

          {/* Right Side - More Attractive Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              {/* Main illustration container with modern web development theme */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                {/* Modern laptop/coding illustration */}
                <div className="flex justify-center items-center mb-8">
                  <div className="relative">
                    {/* Laptop screen */}
                    <div className="w-48 h-32 bg-gray-900 rounded-lg flex items-center justify-center relative border-4 border-gray-700">
                      {/* Code lines on screen */}
                      <div className="space-y-2 w-40">
                        <div className="h-2 bg-green-400 rounded w-3/4"></div>
                        <div className="h-2 bg-blue-400 rounded w-full"></div>
                        <div className="h-2 bg-yellow-400 rounded w-2/3"></div>
                        <div className="h-2 bg-purple-400 rounded w-5/6"></div>
                        <div className="h-2 bg-red-400 rounded w-1/2"></div>
                        <div className="h-2 bg-cyan-400 rounded w-4/5"></div>
                      </div>
                    </div>
                    {/* Laptop base */}
                    <div className="w-52 h-4 bg-gray-300 rounded-b-xl -mt-1 mx-auto"></div>
                  </div>
                </div>

                {/* Floating elements around laptop */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center animate-bounce">
                  <Code className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute top-16 right-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                
                <div className="absolute bottom-20 left-12 w-14 h-14 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>

                {/* Technology stack icons */}
                <div className="flex justify-center space-x-4 mt-8">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">JS</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">TS</span>
                  </div>
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CSS</span>
                  </div>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">API</span>
                  </div>
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


import { Check, Star, Crown, Rocket, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingPlans = () => {
  const plans = [
    {
      name: "Básico",
      icon: <Star className="h-6 w-6" />,
      price: "$299",
      period: "pago único",
      description: "Perfecto para emprendedores y pequeños negocios",
      popular: false,
      features: [
        "Página web de hasta 5 secciones",
        "Diseño responsivo",
        "Formulario de contacto",
        "Integración redes sociales",
        "SEO básico",
        "1 mes de soporte",
      ],
    },
    {
      name: "Profesional",
      icon: <Rocket className="h-6 w-6" />,
      price: "$599",
      period: "pago único",
      description: "Ideal para negocios establecidos",
      popular: true,
      features: [
        "Página web hasta 10 secciones",
        "Diseño personalizado",
        "Blog/Noticias",
        "Galería de imágenes",
        "Chat en vivo",
        "SEO avanzado",
        "3 meses de soporte",
        "Certificado SSL",
      ],
    },
    {
      name: "Premium",
      icon: <Crown className="h-6 w-6" />,
      price: "$999",
      period: "pago único",
      description: "Para negocios que buscan destacar",
      popular: false,
      features: [
        "Página web ilimitada",
        "E-commerce básico (hasta 50 productos)",
        "Panel de administración",
        "Integraciones API",
        "Analytics avanzado",
        "Backup automático",
        "6 meses de soporte",
        "Hosting incluido (1 año)",
      ],
    },
    {
      name: "E-commerce",
      icon: <Building className="h-6 w-6" />,
      price: "$1,499",
      period: "pago único",
      description: "Tienda online completa",
      popular: false,
      features: [
        "Tienda online profesional",
        "Productos ilimitados",
        "Pasarelas de pago integradas",
        "Gestión de inventario",
        "Panel de ventas",
        "Marketing por email",
        "12 meses de soporte",
        "Hosting premium incluido",
      ],
    },
    {
      name: "Empresarial",
      icon: <Building className="h-6 w-6" />,
      price: "Cotizar",
      period: "proyecto",
      description: "Soluciones a medida para grandes empresas",
      popular: false,
      features: [
        "Desarrollo completamente personalizado",
        "Múltiples idiomas",
        "Integraciones complejas",
        "Bases de datos avanzadas",
        "Aplicaciones web complejas",
        "Soporte 24/7",
        "Mantenimiento incluido",
        "Infraestructura escalable",
      ],
    },
  ];

  return (
    <section id="planes" className="py-20 bg-blue-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Entrance Annotation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="h-4 w-4" />
            Planes diseñados para cada etapa de tu negocio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-blue-gradient">Planes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde soluciones económicas hasta desarrollos empresariales. 
            Encuentra el plan perfecto para tu proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-gradient text-white">
                  Más Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <div className="text-blue-500 mb-3 flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-gradient text-white hover:opacity-90' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.price === "Cotizar" ? "Solicitar Cotización" : "Elegir Plan"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

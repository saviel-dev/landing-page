
import { Monitor, Smartphone, Globe, Settings, Palette, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Desarrollo Web",
      description: "Sitios web personalizados, responsivos y optimizados para conversión.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Aplicaciones Móviles",
      description: "Apps nativas y híbridas para iOS y Android con diseño intuitivo.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago integradas.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Mantenimiento",
      description: "Soporte técnico y actualizaciones continuas para tu sitio web.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Diseño UI/UX",
      description: "Interfaces atractivas y experiencias de usuario excepcionales.",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Optimización para motores de búsqueda y mejor posicionamiento.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Entrance Annotation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="h-4 w-4" />
            Servicios especializados para tu éxito
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-blue-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de desarrollo web adaptadas a las necesidades 
            específicas de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-blue-500 mb-4 group-hover:text-blue-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

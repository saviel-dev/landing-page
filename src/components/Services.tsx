
import { Monitor, Laptop, Globe, Settings, BarChart, Search, Palette, Calculator } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  // Categorías de servicios con colores únicos
  const categories = {
    desarrollo: {
      bg: 'from-blue-50 to-blue-100',
      iconBg: 'from-blue-500 to-blue-600',
      border: 'border-blue-100',
      icon: <Monitor className="h-6 w-6" />
    },
    software: {
      bg: 'from-purple-50 to-purple-100',
      iconBg: 'from-purple-500 to-purple-600',
      border: 'border-purple-100',
      icon: <Laptop className="h-6 w-6" />
    },
    ecommerce: {
      bg: 'from-emerald-50 to-emerald-100',
      iconBg: 'from-emerald-500 to-emerald-600',
      border: 'border-emerald-100',
      icon: <Globe className="h-6 w-6" />
    },
    diseno: {
      bg: 'from-pink-50 to-pink-100',
      iconBg: 'from-pink-500 to-pink-600',
      border: 'border-pink-100',
      icon: <Palette className="h-6 w-6" />
    },
    contabilidad: {
      bg: 'from-amber-50 to-amber-100',
      iconBg: 'from-amber-500 to-amber-600',
      border: 'border-amber-100',
      icon: <Calculator className="h-6 w-6" />
    },
    soporte: {
      bg: 'from-indigo-50 to-indigo-100',
      iconBg: 'from-indigo-500 to-indigo-600',
      border: 'border-indigo-100',
      icon: <Settings className="h-6 w-6" />
    },
    marketing: {
      bg: 'from-rose-50 to-rose-100',
      iconBg: 'from-rose-500 to-rose-600',
      border: 'border-rose-100',
      icon: <BarChart className="h-6 w-6" />
    },
    seo: {
      bg: 'from-green-50 to-green-100',
      iconBg: 'from-green-500 to-green-600',
      border: 'border-green-100',
      icon: <Search className="h-6 w-6" />
    }
  };

  const services = [
    {
      icon: categories.desarrollo.icon,
      title: "Desarrollo Web",
      description: "Sitios web personalizados, responsivos y optimizados para conversión.",
      category: 'desarrollo',
      features: ["Diseño responsivo", "Optimización SEO", "Rendimiento"],
    },
    {
      icon: categories.software.icon,
      title: "Aplicaciones de Computadora",
      description: "Software personalizado para Windows y macOS con interfaces intuitivas y funcionalidades a medida.",
      category: 'software',
      features: ["Windows & macOS", "Interfaz intuitiva", "Personalizado"],
    },
    {
      icon: categories.ecommerce.icon,
      title: "E-commerce",
      description: "Tiendas online completas con pasarelas de pago integradas.",
      category: 'ecommerce',
      features: ["Pasarelas de pago", "Gestión de inventario", "Seguridad"],
    },
    {
      icon: categories.diseno.icon,
      title: "Diseño Gráfico",
      description: "Soluciones creativas de diseño que fortalecen la identidad visual de tu marca.",
      category: 'diseno',
      features: ["Identidad visual", "Diseño UI/UX", "Materiales de marca"],
    },
    {
      icon: categories.contabilidad.icon,
      title: "Contabilidad",
      description: "Servicios contables integrales para mantener en orden las finanzas de tu negocio.",
      category: 'contabilidad',
      features: ["Finanzas", "Impuestos", "Asesoría fiscal"],
    },
    {
      icon: categories.soporte.icon,
      title: "Mantenimiento",
      description: "Soporte técnico y actualizaciones continuas para tu sitio web.",
      category: 'soporte',
      features: ["Soporte 24/7", "Actualizaciones", "Copias de seguridad"],
    },
    {
      icon: categories.marketing.icon,
      title: "Marketing Digital",
      description: "Estrategias personalizadas para aumentar la visibilidad de tu marca y generar más clientes potenciales.",
      category: 'marketing',
      features: ["Redes sociales", "Campañas", "Análisis"],
    },
    {
      icon: categories.seo.icon,
      title: "Optimización SEO",
      description: "Mejoramos el posicionamiento de tu sitio en buscadores para atraer tráfico orgánico de calidad.",
      category: 'seo',
      features: ["Palabras clave", "Enlaces", "Rendimiento"],
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Settings className="h-4 w-4" />
            Servicios especializados para tu éxito
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de desarrollo web adaptadas a las necesidades 
            específicas de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const category = categories[service.category as keyof typeof categories];
            return (
              <motion.div
                key={service.title}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${category.bg} border ${category.border} overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Efecto de brillo al hacer hover */}
                <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-all duration-500"></div>
                
                {/* Icono con gradiente */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.iconBg} text-white mb-6 shadow-md`}>
                  {service.icon}
                </div>
                
                {/* Título con gradiente */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Características con iconos */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs font-medium px-3 py-1 bg-white/50 rounded-full text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Efecto de borde inferior al hacer hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

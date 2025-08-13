import { MessageCircle, Users, ShoppingCart, Briefcase, Rocket, BarChart2, Code } from "lucide-react";

const ClientsGrid = () => {
  const clients = [
    {
      name: "Draculotto",
      position: "Página web de predicciones de loterías",
      testimonial: "Desarrollo de una plataforma web especializada en predicciones de loterías con interfaz intuitiva y resultados en tiempo real.",
      icon: <MessageCircle className="h-8 w-8" />,
      color: "blue",
      image: "/images/placeholder-client1.jpg"
    },
    {
      name: "Ferro Metales",
      position: "Aplicación de gestión de inventario",
      testimonial: "Solución de escritorio personalizada para el control de inventario y cálculo preciso de materiales metálicos.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "purple",
      image: "/images/placeholder-client2.jpg"
    },
    {
      name: "Mi Emisora",
      position: "Sistema de gestión radial",
      testimonial: "Aplicación interna para optimizar procesos operativos y gestión de programación en emisora de radio.",
      icon: <Users className="h-8 w-8" />,
      color: "emerald",
      image: "/images/placeholder-client3.jpg"
    },
    {
      name: "Mi Caserita",
      position: "E-commerce de supermercado",
      testimonial: "Plataforma de comercio electrónico completa para la venta de productos de supermercado con carrito de compras y pasarela de pago.",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "amber",
      image: "/images/placeholder-client4.jpg"
    },
    {
      name: "Gorila Craft",
      position: "Diseño de contenido digital",
      testimonial: "Creación de material visual atractivo y reels para redes sociales que incrementaron significativamente el engagement.",
      icon: <Rocket className="h-8 w-8" />,
      color: "rose",
      image: "/images/placeholder-client5.jpg"
    },
    {
      name: "Belén",
      position: "Herramienta de gráficos estadísticos",
      testimonial: "Aplicación de escritorio para la generación de gráficos estadísticos avanzados con funciones de función afín.",
      icon: <BarChart2 className="h-8 w-8" />,
      color: "indigo",
      image: "/images/placeholder-client6.jpg"
    },
    {
      name: "Luisa",
      position: "Asesoría y desarrollo de software",
      testimonial: "Servicios integrales de consultoría, soporte técnico y desarrollo de software personalizado.",
      icon: <Code className="h-8 w-8" />,
      color: "pink",
      image: "/images/placeholder-client7.jpg"
    }
  ];

  const colorClasses = {
    blue: { bg: 'from-blue-50 to-blue-100', iconBg: 'from-blue-500 to-blue-600', border: 'border-blue-100' },
    purple: { bg: 'from-purple-50 to-purple-100', iconBg: 'from-purple-500 to-purple-600', border: 'border-purple-100' },
    emerald: { bg: 'from-emerald-50 to-emerald-100', iconBg: 'from-emerald-500 to-emerald-600', border: 'border-emerald-100' },
    amber: { bg: 'from-amber-50 to-amber-100', iconBg: 'from-amber-500 to-amber-600', border: 'border-amber-100' },
    rose: { bg: 'from-rose-50 to-rose-100', iconBg: 'from-rose-500 to-rose-600', border: 'border-rose-100' },
    indigo: { bg: 'from-indigo-50 to-indigo-100', iconBg: 'from-indigo-500 to-indigo-600', border: 'border-indigo-100' },
    pink: { bg: 'from-pink-50 to-pink-100', iconBg: 'from-pink-500 to-pink-600', border: 'border-pink-100' }
  };

  return (
    <section id="clientes" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Testimonios de confianza
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-blue-600">Clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Client cards */}
          {clients.map((client, index) => {
            const colors = colorClasses[client.color as keyof typeof colorClasses];
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-sm p-6 border ${colors.border} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon with background */}
                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${colors.iconBg} text-white`}>
                  {client.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{client.name}</h3>
                
                {/* Position */}
                <p className="text-blue-600 text-sm font-medium mb-4">{client.position}</p>
                
                {/* Testimonial text */}
                <p className="text-gray-600 leading-relaxed">
                  {client.testimonial}
                </p>
                
                {/* Decorative element */}
                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${colors.iconBg}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsGrid;

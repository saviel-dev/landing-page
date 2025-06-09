
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-commerce Moda",
      description: "Tienda online completa con carrito de compras y pasarelas de pago",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "App Restaurante",
      description: "Sistema de reservas y pedidos online para restaurante",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "Firebase", "PWA"],
      link: "#",
      github: "#",
    },
    {
      title: "Portal Corporativo",
      description: "Sitio web corporativo con gestión de contenidos",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tech: ["WordPress", "PHP", "MySQL"],
      link: "#",
      github: "#",
    },
    {
      title: "App Fitness",
      description: "Aplicación móvil para seguimiento de ejercicios y nutrición",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      tech: ["React Native", "MongoDB", "Express"],
      link: "#",
      github: "#",
    },
    {
      title: "Plataforma Educativa",
      description: "LMS completo con cursos online y sistema de pagos",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      tech: ["Angular", "Django", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de control con métricas en tiempo real",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "D3.js", "WebSocket"],
      link: "#",
      github: "#",
    },
    {
      title: "Sistema Hospitalario",
      description: "Gestión completa de pacientes y citas médicas",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      tech: ["Laravel", "Vue.js", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Button>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ExternalLink className="h-4 w-4" />
              Proyectos destacados de nuestro portfolio
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Todos Nuestros <span className="text-blue-gradient">Proyectos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre la variedad de soluciones que hemos desarrollado para 
              diferentes industrias y necesidades empresariales.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in-up hover-scale"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="transform scale-95 group-hover:scale-100 transition-transform duration-200">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button size="sm" variant="secondary" className="transform scale-95 group-hover:scale-100 transition-transform duration-200">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full transform transition-transform duration-200 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="bg-blue-gradient-light p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Te gustó algún proyecto?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para desarrollar algo similar para tu negocio
            </p>
            <Button className="bg-blue-gradient text-white hover:opacity-90">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

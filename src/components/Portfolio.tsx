
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Draculotto - Web de Predicciones",
      description: "Plataforma de juegos de azar con sistema de predicciones en tiempo real",
      image: "/img/proyectos/Web de predicciones draculotto.png",
      tech: ["React", "Node.js", "WebSockets"],
      link: "https://casino-will-draculotto.netlify.app/",
      github: "https://github.com/saviel-dev/Draculotto-Tendencias",
    },
    {
      title: "Mi Caserita",
      description: "Sitio web para mercado local con catálogo de productos y pedidos en línea",
      image: "/img/proyectos/mi caserita.png",
      tech: ["Next.js", "MongoDB", "Stripe"],
      link: "https://micaserita.com.pe/",
      github: "#",
    },
    {
      title: "Ferro Metales",
      description: "Sitio web corporativo para empresa de materiales y soluciones metálicas",
      image: "/img/proyectos/web de ferro metales.png",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/username/ferro-metales",
      github: "https://github.com/username/ferro-metales",
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
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Entrance Annotation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ExternalLink className="h-4 w-4" />
            Proyectos que demuestran nuestra experiencia
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro <span className="text-blue-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora algunos de nuestros proyectos más destacados y descubre 
            cómo hemos ayudado a otros negocios a crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.title !== "Ferro Metales" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-white text-blue-700 hover:bg-blue-50"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </a>
                  ) : (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-white text-blue-700 hover:bg-blue-50"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Ver Código
                    </a>
                  )}
                  {project.github !== "#" && project.title !== "Ferro Metales" && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-white text-blue-700 hover:bg-blue-50"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-blue-gradient text-white hover:opacity-90"
            onClick={() => navigate('/projects')}
          >
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

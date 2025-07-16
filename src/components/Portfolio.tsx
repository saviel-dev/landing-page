
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
      title: "Landing para venta de juegos y streaming",
      description: "Página de aterrizaje para impulsar la venta de juegos digitales y plataformas de streaming.",
      image: "/img/proyectos/GameChange.png",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/saviel-dev/GameChange-web.git",
    },
    {
      title: "Gestión de cuentas por cobrar",
      description: "App de escritorio para mejorar el módulo de cuentas por cobrar y gestionar facturas sin conexión.",
      image: "/img/proyectos/cobrofacil.png",
      tech: ["Python", "Tkinter", "Pandas"],
      link: "#",
      github: "https://github.com/saviel-dev/CobroFacil",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center place-items-center">
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
                  {project.link !== "#" && (project.title === "Draculotto - Web de Predicciones" || project.title === "Mi Caserita") && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-white text-blue-700 hover:bg-blue-50"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </a>
                  )}
                  {project.title !== "Ferro Metales" && (project.title === "Landing para venta de juegos y streaming" || project.title === "Gestión de cuentas por cobrar") ? null : (
                    project.title === "Draculotto - Web de Predicciones" ? null : (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-white text-blue-700 hover:bg-blue-50"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Ver Código
                      </a>
                    )
                  )}
                  {project.github !== "#" && project.title !== "Ferro Metales" && project.title !== "Draculotto - Web de Predicciones" && (
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


      </div>
    </section>
  );
};

export default Portfolio;

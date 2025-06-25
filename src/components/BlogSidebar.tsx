import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSidebar = () => {
  return (
    <aside className="lg:w-4/12 space-y-8">
      {/* Ad widget 1 */}
      <div className="bg-blue-gradient text-white p-6 rounded-xl shadow-lg animate-fade-in-up">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">¿Necesitas un sitio web?</h3>
          <span className="text-xs bg-white text-blue-600 px-2 py-1 rounded-full">Anuncio</span>
        </div>
        <p className="mb-4">
          Diseñamos sitios web profesionales que convierten visitantes en clientes.
        </p>
        <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
          Solicitar Presupuesto
        </Button>
      </div>
      
      {/* Search widget */}
      <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in-up" style={{animationDelay: '0.1s'}}>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Buscar</h3>
        <div className="flex">
          <input 
            type="search"
            placeholder="Buscar artículos..."
            className="flex-1 px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
            Buscar
          </button>
        </div>
      </div>
      
      {/* Category widget */}
      <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in-up" style={{animationDelay: '0.15s'}}>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categorías</h3>
        <ul className="space-y-2">
          <li><a href="#" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">Desarrollo Web <span className="text-gray-500 text-sm">(12)</span></a></li>
          <li><a href="#" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">E-commerce <span className="text-gray-500 text-sm">(8)</span></a></li>
          <li><a href="#" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">SEO <span className="text-gray-500 text-sm">(5)</span></a></li>
          <li><a href="#" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">Marketing <span className="text-gray-500 text-sm">(7)</span></a></li>
          <li><a href="#" className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors">Diseño UX/UI <span className="text-gray-500 text-sm">(3)</span></a></li>
        </ul>
      </div>
      
      {/* Ad widget 2 */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">Aprende Desarrollo Web</h3>
          <span className="text-xs bg-white text-indigo-600 px-2 py-1 rounded-full">Anuncio</span>
        </div>
        <p className="mb-4">
          Curso online con las últimas tecnologías del desarrollo frontend y backend. ¡Oferta por tiempo limitado!
        </p>
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5" />
          <span className="text-sm">Certificado incluido</span>
        </div>
        <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50">
          <span>Ver Curso</span>
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </div>
      
      {/* Popular posts widget */}
      <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in-up" style={{animationDelay: '0.25s'}}>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Artículos Populares</h3>
        <div className="space-y-4">
          <a href="#" className="flex items-start gap-3 group">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
              alt="Miniatura del artículo" 
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="font-medium group-hover:text-blue-600 transition-colors">Las Mejores Herramientas para Desarrolladores 2025</h4>
              <p className="text-xs text-gray-500 mt-1">15 May, 2025</p>
            </div>
          </a>
          
          <a href="#" className="flex items-start gap-3 group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
              alt="Miniatura del artículo" 
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="font-medium group-hover:text-blue-600 transition-colors">Cómo Mejorar la Velocidad de tu Sitio Web</h4>
              <p className="text-xs text-gray-500 mt-1">2 May, 2025</p>
            </div>
          </a>
          
          <a href="#" className="flex items-start gap-3 group">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984" 
              alt="Miniatura del artículo" 
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="font-medium group-hover:text-blue-600 transition-colors">El Impacto de la IA en el Desarrollo Web</h4>
              <p className="text-xs text-gray-500 mt-1">22 Abr, 2025</p>
            </div>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;

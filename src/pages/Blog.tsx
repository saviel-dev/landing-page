import { useState } from 'react';
import { Heart, MessageSquare, Share2, Calendar, Clock, Bookmark, ThumbsUp, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPost from '@/components/BlogPost';
import BlogSidebar from '@/components/BlogSidebar';

const blogPosts = [
  {
    id: 'post1',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    imageAlt: 'Persona trabajando en una laptop',
    date: '12 Jun, 2025',
    readTime: '5 min lectura',
    title: '10 Tendencias en Desarrollo Web para 2025',
    excerpt: 'Descubre las principales tendencias en desarrollo web que dominarán el panorama tecnológico este año. Desde la inteligencia artificial aplicada hasta nuevos frameworks, todo lo que necesitas saber.',
    author: {
      name: 'Carlos Méndez',
      role: 'Desarrollador Senior',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    stats: {
      likes: 42,
      comments: 18
    }
  },
  {
    id: 'post2',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
    imageAlt: 'Diseño web y desarrollo',
    date: '5 Jun, 2025',
    readTime: '7 min lectura',
    title: 'Cómo Optimizar tu E-commerce para Aumentar las Ventas',
    excerpt: 'Aprende estrategias efectivas para mejorar la experiencia de usuario en tu tienda online y convertir más visitas en ventas. Desde técnicas de UX hasta optimización de procesos.',
    author: {
      name: 'Laura García',
      role: 'Especialista en E-commerce',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    stats: {
      likes: 28,
      comments: 9
    }
  },
  {
    id: 'post3',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    imageAlt: 'Marketing y análisis de datos',
    date: '28 May, 2025',
    readTime: '4 min lectura',
    title: '6 Estrategias SEO que Debes Implementar Ahora Mismo',
    excerpt: 'El SEO sigue evolucionando constantemente. Descubre las técnicas más efectivas que están funcionando ahora mismo para posicionar tu sitio web en los primeros resultados.',
    author: {
      name: 'Miguel Torres',
      role: 'Especialista SEO',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    stats: {
      likes: 15,
      comments: 12
    }
  }
];

const Blog = () => {
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    post1: 42,
    post2: 28,
    post3: 15
  });

  const handleLike = (postId: string) => {
    setLikes(prev => ({
      ...prev,
      [postId]: prev[postId] + 1
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Nuestro Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros artículos, consejos y las últimas tendencias en desarrollo web y tecnología.
          </p>
        </div>

        {/* Content layout with sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content - 8 columns width on large screens */}
          <main className="lg:w-8/12 space-y-10">
            {blogPosts.map((post, index) => (
              <BlogPost 
                key={post.id}
                post={post}
                index={index}
                likes={likes[post.id]}
                onLike={handleLike}
              />
            ))}
          </main>
          
          {/* Sidebar - 4 columns width on large screens */}
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;

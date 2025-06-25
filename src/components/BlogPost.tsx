import { Heart, MessageSquare, Share2, Calendar, Clock, Bookmark, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Author {
  name: string;
  role: string;
  avatar: string;
}

interface Stats {
  likes: number;
  comments: number;
}

interface BlogPostProps {
  post: {
    id: string;
    image: string;
    imageAlt: string;
    date: string;
    readTime: string;
    title: string;
    excerpt: string;
    author: Author;
    stats: Stats;
  };
  index: number;
  likes: number;
  onLike: (postId: string) => void;
}

const BlogPost = ({ post, index, likes, onLike }: BlogPostProps) => {
  return (
    <article 
      className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Featured image */}
      <img 
        src={post.image} 
        alt={post.imageAlt} 
        className="w-full h-64 object-cover"
      />
      
      {/* Post content */}
      <div className="p-6">
        {/* Meta info */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
          <a href="#">{post.title}</a>
        </h2>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-5">
          {post.excerpt}
        </p>
        
        {/* Author info */}
        <div className="flex items-center mb-6">
          <img 
            src={post.author.avatar} 
            alt={`Avatar de ${post.author.name}`} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{post.author.role}</p>
          </div>
        </div>
        
        {/* Facebook-like interaction bar */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-3">
              <Button 
                onClick={() => onLike(post.id)} 
                variant="ghost" 
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{likes}</span>
              </Button>
              <Button variant="ghost" className="flex items-center text-gray-700 hover:text-blue-600">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{post.stats.comments}</span>
              </Button>
              <Button variant="ghost" className="flex items-center text-gray-700 hover:text-blue-600">
                <Share2 className="h-4 w-4 mr-1" />
                <span>Compartir</span>
              </Button>
            </div>
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

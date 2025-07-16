import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    // Cargar Anime.js dinámicamente solo en esta página
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      // @ts-ignore
      if (window.anime) {
        // Animación para los números 404
        // @ts-ignore
        window.anime.timeline({
          easing: 'easeOutQuad',
          duration: 1200,
          delay: 200
        })
        .add({
          targets: '.number-404 span',
          opacity: [0, 1],
          scale: [0.5, 1],
          translateY: [50, 0],
          rotateX: [90, 0],
          delay: window.anime.stagger(150),
          endDelay: 200
        })
        .add({
          targets: '.n0a',
          scale: [1, 1.1, 1],
          rotate: ['-5deg', '5deg', '0deg'],
          duration: 800,
          easing: 'easeOutElastic(1, .7)',
        }, '-=600');
        // Animación para el mensaje, la descripción y el botón
        window.anime.timeline({
          easing: 'easeOutExpo',
          duration: 1000,
          delay: 1800
        })
        .add({
          targets: '.message',
          opacity: [0, 1],
          translateY: [30, 0]
        })
        .add({
          targets: '.description',
          opacity: [0, 1],
          translateY: [30, 0]
        }, '-=700')
        .add({
          targets: '.home-button',
          opacity: [0, 1],
          translateY: [30, 0],
          scale: [0.9, 1],
          easing: 'easeOutBack'
        }, '-=700');
      }
    };
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white overflow-hidden" style={{fontFamily: 'Inter, sans-serif'}}>
      <div className="container text-center p-10 bg-blue-50/80 backdrop-blur rounded-3xl shadow-2xl max-w-[90%] w-[550px] border border-blue-200">
        <div className="number-404 flex justify-center items-center text-[7rem] sm:text-[9rem] font-extrabold text-blue-600 leading-none mb-6 relative" style={{textShadow: '0 5px 15px rgba(37,99,235,0.2)'}}>
          <span className="n4 inline-block opacity-0" style={{transform: 'scale(0.5) translateY(50px) rotateX(90deg)'}}>4</span>
          <span className="n0a inline-block opacity-0" style={{transform: 'scale(0.5) translateY(50px) rotateX(90deg)'}}>0</span>
          <span className="n4b inline-block opacity-0" style={{transform: 'scale(0.5) translateY(50px) rotateX(90deg)'}}>4</span>
        </div>
        <h1 className="message text-[1.8rem] sm:text-[2.2rem] font-bold mb-7 text-blue-800 opacity-0" style={{transform: 'translateY(30px)'}}>¡Oops! Página No Encontrada</h1>
        <p className="description text-[1.1rem] sm:text-[1.2rem] text-blue-500 mb-10 opacity-0" style={{transform: 'translateY(30px)'}}>Parece que la página que buscas no existe o ha sido movida. ¡No te preocupes, puedes volver a casa!</p>
        <a href="/" className="home-button inline-block bg-orange-500 text-white py-4 px-10 rounded-full text-lg font-bold shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 opacity-0" style={{letterSpacing: '0.05em', boxShadow: '0 8px 15px rgba(249,115,22,0.4)', transform: 'translateY(30px) scale(0.9)'}}>Volver a la Página Principal</a>
      </div>
    </div>
  );
};

export default NotFound;

import { useEffect } from 'react';

const GlobalStyles = () => {
  useEffect(() => {
    // Prevenir desbordamiento horizontal
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Asegurar que el viewport se maneje correctamente en móviles
    const viewportMeta = document.querySelector('meta[name=viewport]');
    if (viewportMeta) {
      viewportMeta.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover'
      );
    }

    // Aplicar estilos al body
    document.body.style.width = '100%';
    document.body.style.position = 'relative';

    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.body.style.width = '';
      document.body.style.position = '';
    };
  }, []);

  return null;
};

export default GlobalStyles;

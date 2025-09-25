import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    // Calcula a posição do mouse relativa ao centro da div
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = currentTarget;

    const x = clientX - (offsetLeft + offsetWidth / 2);
    const y = clientY - (offsetTop + offsetHeight / 2);

    setMousePosition({ x: x / 20, y: y / 20 }); // Dividimos para um movimento mais sutil
  };

  const handleMouseLeave = () => {
    // Retorna a imagem para o centro quando o mouse sai
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <header className="portfolio-header">
      {/* Adiciona os eventos para detectar o movimento do mouse */}
      <div 
        className="hero-section" 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // Passa a posição do mouse para o CSS via variáveis de estilo
        style={{ '--move-x': `${mousePosition.x}px`, '--move-y': `${mousePosition.y}px` }}
      >
        <h1 className="hero-title">Natan Ramos</h1>
        <p className="hero-subtitle">Desenvolvedor Web Front-End Iniciante</p>
      </div>
    </header>
  );
}

export default Header;
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import videoSource from './anaoprogramando.mp4'; 
import profileImage from './minha-foto2.png';
import './Header.css';

function Header() {
  const imageRef = useRef(null);
  const headerRightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current || !headerRightRef.current) return;

      const { left, top, width, height } = headerRightRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (e.clientX - centerX) / (width / 2) * 5;
      const moveY = (e.clientY - centerY) / (height / 2) * 5;

      // 💥 CORREÇÃO 1: Adiciona 'translateY(-50%)' como base antes do translate3d.
      // Isso garante que a centralização vertical do CSS seja mantida DURANTE o efeito.
      imageRef.current.style.transform = 
        'translateY(-50%) translate3d(' + moveX + 'px, ' + moveY + 'px, 0)';
    };

    const handleMouseLeave = () => {
      if (imageRef.current) {
        // 💥 CORREÇÃO 2: Reseta para a posição base de centralização, não para 'none'.
        // Isso garante que a foto volte ao centro quando o mouse sair.
        imageRef.current.style.transform = 'translateY(-50%)';
      }
    };

    const currentHeaderRight = headerRightRef.current;
    if (currentHeaderRight) {
      currentHeaderRight.addEventListener('mousemove', handleMouseMove);
      currentHeaderRight.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (currentHeaderRight) {
        currentHeaderRight.removeEventListener('mousemove', handleMouseMove);
        currentHeaderRight.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <header className="header">
        
        {/* 1. SEÇÃO ESQUERDA: NOME e DESCRIÇÕES (Otimizado o JSX) */}
        <div className="header-left">
          <Link to="/" className="site-title">
            Natan Ramos
          </Link>
          <div className="header-details">
            <p className="detail-item">💻 Desenvolvedor</p>
            <p className="detail-item">🥁 Baterista</p>
            <p className="detail-item">🧙 Narrador de RPG</p>
            <p className="detail-item">😊 Um cara bom de lidar</p>
          </div>
        </div>

        {/* 2. SEÇÃO CENTRAL: VÍDEO */}
        <div className="video-container">
          <video id="header-video" autoPlay muted loop playsInline>
            <source src={videoSource} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>

        {/* 3. SEÇÃO DIREITA: FOTO DE PERFIL */}
        <div className="header-right" ref={headerRightRef}>
          <img
            src={profileImage}
            alt="Foto de Perfil"
            className="profile-image"
            ref={imageRef}
          />
        </div>
        
      </header>
    </>
  );
}

export default Header;
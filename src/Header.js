import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// 1. Importa a imagem de perfil
import profileImage from './minha-foto.jpg'; 

function Header() {
  const [isHovering, setIsHovering] = useState(false); 
  
  // Nota: Você pode remover o useState (acima) se não o estiver usando para hover ou tema.

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          {/* O logo volta para a Home Page (Rota "/") */}
          <Link to="/" className="nav-link">
            Natan Ramos
          </Link>
        </h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contato" className="nav-link">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* 2. Adiciona a imagem de perfil */}
      <div className="profile-photo-container">
        <img src={profileImage} alt="Foto de perfil de Natan" className="profile-photo"/>
      </div>

    </header>
  );
}

export default Header;
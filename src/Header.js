import React from 'react';
import './Header.css'; // Vamos criar este arquivo de CSS no próximo passo

function Header() {
  return (
    <header className="portfolio-header">
     <img src="/minha-foto.jpg" alt="Sua foto de perfil" className="profile-photo" />
      <h1>Natan Ramos</h1>
      <p>Desenvolvedor Web Front-End Iniciante</p>
    </header>
  );
}

export default Header;
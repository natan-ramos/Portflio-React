import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai'; // ⚡ NOVO: Ícone do GitHub
import './Footer.css';

function Footer() {
  return (
    // Aplicamos a classe 'footer' para estilização no CSS
    <footer className="footer">
      
      {/* COLUNA ESQUERDA: Links e GitHub */}
      <div className="footer-links-container">
        
        {/* ÍCONE DO GITHUB */}
        <a 
          href="https://github.com/natan-ramos" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-github-logo"
          title="Meu Perfil no GitHub"
        >
          <AiFillGithub size={30} /> 
        </a>

        {/* NAVEGAÇÃO HORIZONTAL */}
        <nav className="footer-nav">
          <Link to="/">Projetos</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>

      {/* COLUNA DIREITA: Direitos Autorais (Mantendo sua lógica de ano) */}
      <p className="footer-copyright">
        © {new Date().getFullYear()} Meu Portfólio. Desenvolvido com React.
      </p>
    </footer>
  );
}

export default Footer;
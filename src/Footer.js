import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Meu Portfólio. Desenvolvido com React.</p>
    </footer>
  );
}

export default Footer;
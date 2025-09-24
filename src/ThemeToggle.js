import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Vamos criar este arquivo

function ThemeToggle() {
  const [theme, setTheme] = useState('light'); // 1. O estado 'theme' começa como 'light'

  // 2. Um "ouvinte" que detecta a mudança de estado
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // 3. Função que muda o estado quando o botão é clicado
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark-mode' : 'light');
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
    </button>
  );
}

export default ThemeToggle;
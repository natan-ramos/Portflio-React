import React from 'react';
import Header from './Header';
import Skills from './Skills';
import ContactForm from './ContactForm'; // Importa o componente do formulário
import ThemeToggle from './ThemeToggle'; // Importa o novo componente

function App() {
  return (
    <div className="container">
      <ThemeToggle /> {/* Adiciona o botão de tema */}
      <Header />
      <Skills />
      <ContactForm /> {/* Usa o componente de formulário */}
    </div>
  );
}

export default App;
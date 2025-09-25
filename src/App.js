import React from 'react';
import Header from './Header';
import Skills from './Skills';
import ContactForm from './ContactForm';
import ThemeToggle from './ThemeToggle';
import ProjectList from './ProjectList'; // Importa o novo componente

function App() {
  return (
    <div className="container">
      <ThemeToggle />
      <Header />
      <Skills />
      <ProjectList /> {/* Adiciona a lista de projetos */}
      <ContactForm />
    </div>
  );
}

export default App;
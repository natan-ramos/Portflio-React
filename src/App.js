import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProjectList from './ProjectList';
import './App.css';
import ProjectDetail from './ProjectDetail';
import ContactForm from './ContactForm';

// Componente para a Rota Home (Página Inicial/Projetos)
function HomePage() {
  return (
    <main className="main-content">
      {/* Aqui a lista de projetos será renderizada */}
      <ProjectList />
    </main>
  );
}

// Componente para a Rota Contato
function ContactPage() {
  return (
    <main className="main-content">
      {/* Aqui o formulário de contato será renderizado */}
      <ContactForm />
    </main>
  );
}

// Componente Principal do Aplicativo
function App() {
  return (
    <div className="App">
      <Header />
      
      {/* O container deve envolver apenas o conteúdo roteável para não afetar Header/Footer */}
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/projetos/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

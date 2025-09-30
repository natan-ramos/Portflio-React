import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProjectList from './ProjectList';
import './App.css';
import ProjectDetail from './ProjectDetail';
import ContactForm from './ContactForm'; // ✅ Importando o formulário

// Componentes para as Rotas
function HomePage() {
  return (
    <main>
      <ProjectList />
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      {/* ⚡ A CORREÇÃO: Renderizando o formulário no lugar do texto ⚡ */}
      <ContactForm />
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
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
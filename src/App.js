import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProjectList from './ProjectList';
import './App.css';
import ProjectDetail from './ProjectDetail';

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
      <h1>Entre em Contato</h1>
      <p>Detalhes de contato virão aqui!</p>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* Este é o ÚNICO bloco <Routes> necessário! */}
       <Routes>
  {/* Rota 1: Home Page */}
  <Route path="/" element={<HomePage />} />
  
  {/* Rota 2: Contato */}
  <Route path="/contato" element={<ContactPage />} />
  
  {/* Rota 3: APENAS a linha que chama o componente ProjectDetail */}
  <Route path="/projetos/:id" element={<ProjectDetail />} />
</Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
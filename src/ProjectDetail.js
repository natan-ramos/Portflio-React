import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './data/projects.json';
import './ProjectDetail.css'; // 1. Importa os estilos que criamos

function ProjectDetail() {
  // Pega o parâmetro 'id' da URL (que definimos como /projetos/:id)
  const { id } = useParams();

  // 2. Busca o projeto correspondente no JSON (convertendo a string 'id' para número)
  const project = projects.find(p => p.id === parseInt(id)); 

  // Se o projeto não for encontrado, exibe uma mensagem de erro estilizada
  if (!project) {
    return (
      <main className="project-detail">
        <h1>Projeto Não Encontrado</h1>
        <p>Verifique o endereço digitado. Não existe um projeto com este ID.</p>
      </main>
    );
  }

  // Se o projeto for encontrado, exibe as informações estilizadas
  return (
    <main className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      
      <h2>Detalhes Adicionais</h2>
      <p>O ID do projeto é: {project.id}</p>
      <p>Esta página está pronta para receber mais conteúdo visual e técnico!</p>
      
    </main>
  );
}

export default ProjectDetail;
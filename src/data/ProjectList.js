import React from 'react';
import projects from './data/projects.json';
import './ProjectList.css';

// Importa as imagens diretamente do local onde elas estão salvas
import portfolioImage from './images/portfolio-react.png';
import todoAppImage from './images/todo-app.png';

// Mapeia os links do JSON para as imagens importadas
const images = {
  '/images/portfolio-react.png': portfolioImage,
  '/images/todo-app.png': todoAppImage
};

function ProjectList() {
  return (
    <section>
      <h2>Meus Projetos</h2>
      <div className="project-list-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            {/* O "src" da imagem agora usa a variável que você importou */}
           <img
            src={images[project.image]}
            alt={project.title}
            // Adiciona condicionalmente a classe grayscale-faded
            className={`project-image ${project.id === 2 ? 'grayscale-faded' : ''}`}
/>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
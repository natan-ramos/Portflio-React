import React from 'react';
import projects from './data/projects.json';
import './ProjectList.css';

import portfolioImage from './images/portfolio-react.png';
import todoAppImage from './images/todo-app.png';

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
            <img
              src={images[project.image]}
              alt={project.title}
              // Nova condição para aplicar o contraste apenas ao projeto 1
              className={`project-image ${project.id === 1 
                || project.id === 2 ? 'grayscale-faded zoomed-image' : ''}`}
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
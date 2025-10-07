import React from 'react';
import { Link } from 'react-router-dom';
import projects from './data/projects.json';
import './ProjectList.css';

// 1. As imagens são importadas da pasta 'src/images/'
import portfolioImage from './images/portfolio-react.png';
import todoAppImage from './images/todo-app.png';
import pomodoroImage from './images/pomodoro-timer.png'; // <-- NOVA IMPORTAÇÃO

// 2. O objeto 'images' usa a string do JSON como chave
const images = {
  // ATENÇÃO: Essas chaves devem ser iguais à string "image" do seu projects.json
  '/images/portfolio-react.png': portfolioImage,
  '/images/todo-app.png': todoAppImage,
  '/images/pomodoro-timer.png': pomodoroImage // <-- NOVO MAPEAMENTO
};

function ProjectList() {
  return (
    <section>
      <h2>Meus Projetos</h2>
      <div className="project-list-container">
        {projects.map(project => (
          <Link to={`/projetos/${project.id}`} key={project.id} className="project-card-link">
            <div className="project-card">
              <img
                src={images[project.image]} // Aqui a chave do JSON é usada para buscar a imagem
                alt={project.title}
                className={`project-image ${project.id === 1 || project.id === 2 ? 'grayscale-faded zoomed-image' : ''} ${project.id === 1 ? 'contrast-enhanced' : ''}`}
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
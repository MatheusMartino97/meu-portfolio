import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import projectsList from '../data';
import projectsContext from '../context/projectsContext';

function FrontEnd() {
  const { frontend: { javascript, react } } = projectsList;
  const { chooseTheStack } = useContext(projectsContext);

  return (
    <div className="portfolio-page page-content">
      <NavBar />
      <header className="page-header">
        <h1>Front-End</h1>
      </header>
      <main className="page-main">
        <section className="projects-container">
          <h2>React</h2>
          <div className="projects-grid">
            {Object.values(react).map((project) => (
              <ProjectCard projectInfo={project} />
            ))}
          </div>
        </section>
        <section className="projects-container">
          <h2>HTML, JavaScript, CSS</h2>
          <div className="projects-grid">
            {Object.values(javascript).map((project) => (
              <ProjectCard projectInfo={project} />
            ))}
          </div>
        </section>
        <button className="choose-stack-button" onClick={ () => { chooseTheStack('back') } }>Ver projetos de Back-End</button>
      </main>
    </div>
  );
}

export default FrontEnd;

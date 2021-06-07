import React, { useContext } from 'react';
import NavBar from './NavBar';
import ProjectCard from './ProjectCard';
import projectsList from '../data';
import projectsContext from '../context/projectsContext';

function BackEnd() {
  const { backend } = projectsList;
  const { chooseTheStack } = useContext(projectsContext);

  return(
    <div className="portfolio-page page-content">
      <NavBar />
      <header className="page-header">
        <h1>Back-End</h1>
      </header>
      <main className="page-main">
        <section className="projects-container">
          {/* <h2>Back-End</h2> */}
          <div className="projects-grid">
            {Object.values(backend).map((project) => (
              <ProjectCard projectInfo={project} />
            ))}
          </div>
        </section>
        <button className="choose-stack-button" onClick={ () => { chooseTheStack('frontend') } }>Ver projetos de Front-End</button>
      </main>
    </div>
  );
}

export default BackEnd;

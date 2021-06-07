import React, { useContext, useState } from 'react';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import projectsList from '../data';
import projectsContext from '../context/projectsContext';

function FrontEnd() {
  const { frontend } = projectsList;
  const arrayOfProjects = Object.values(frontend);
  const [useFilteredProjects, setFilteredProjects] = useState(arrayOfProjects);
  const { chooseTheStack } = useContext(projectsContext);

  const handleChange = ({ target: { value } }) => {
    const filteredProjects = arrayOfProjects.filter(
      ({
        name,
        translation,
        descriptions: {
          short,
          long: { paragraphs },
        },
        technologies,
      }) => {
        const longDescription = Object.values(paragraphs).join(' ');
        if (name.toLowerCase().includes(value.toLowerCase())) return true;
        if (translation.toLowerCase().includes(value.toLowerCase()))
          return true;
        if (short.toLowerCase().includes(value.toLowerCase())) return true;
        if (longDescription.toLowerCase().includes(value.toLowerCase()))
          return true;
        if (technologies.includes(value.toLowerCase())) return true;
      }
    );

    setFilteredProjects(filteredProjects);
  };

  return (
    <div className="portfolio-page page-content">
      <NavBar />
      <header className="page-header">
        <h1>Front-End</h1>
      </header>
      <main className="page-main">
        <section className="projects-container">
          <div className="filter-container">
            <input type="text" onChange={(event) => handleChange(event)} />
          </div>
          <div className="projects-grid">
            {useFilteredProjects.map((project) => (
              <ProjectCard projectInfo={project} />
            ))}
          </div>
        </section>
        <button
          className="choose-stack-button"
          onClick={() => {
            chooseTheStack('back');
          }}
        >
          Ver projetos de Back-End
        </button>
      </main>
    </div>
  );
}

export default FrontEnd;

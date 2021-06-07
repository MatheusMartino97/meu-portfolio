import React, { useContext, useState } from 'react';
import NavBar from './NavBar';
import ProjectCard from './ProjectCard';
import projectsList from '../data';
import projectsContext from '../context/projectsContext';

function ProjectsFront({ stack }) {
  console.log(stack);
  const arrayOfProjects = Object.values(projectsList[stack]);
  const [useFilteredProjects, setFilteredProjects] = useState(arrayOfProjects);
  const [useIsOnFocus, setIsOnFocus] = useState(false);
  const { chooseTheStack } = useContext(projectsContext);

  console.log(useFilteredProjects);
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

        return false;
      }
    );

    setFilteredProjects(filteredProjects);
  };

  return (
    <div className="portfolio-page page-content">
      <NavBar />
      <header className="page-header">
        <h1>{stack === 'frontend' ? 'Front-End' : 'Back-End'}</h1>
      </header>
      <main className="page-main">
        <section className="projects-container">
          <div className="projects-wrapper">
            <div
              id="filter-container"
              className={useIsOnFocus ? 'focus' : undefined}
            >
              <input
                type="text"
                onFocus={() => setIsOnFocus(true)}
                onBlur={() => setIsOnFocus(false)}
                onChange={(event) => handleChange(event)}
                placeholder="Pequise por título, descrição, tecnologias..."
              />
              <i className="material-icons">search</i>
            </div>
            <div>
              <div className="projects-grid">
                {useFilteredProjects.map((project, index) => (
                  <ProjectCard key={index} projectInfo={project} />
                ))}
              </div>
            </div>
            <button
          className="choose-stack-button"
          onClick={() => {
            chooseTheStack(stack === 'frontend' ? 'backend' : 'frontend');
            setFilteredProjects(arrayOfProjects);
            window.scrollTo(0, 0)
          }}
        >
          {`Ver projetos de ${stack === 'frontend' ? 'Back-End' : 'Front-End'}`}
        </button>
          </div>
        </section>

      </main>
    </div>
  );
}

export default ProjectsFront;

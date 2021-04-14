import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

import projectsList from '../data';

class Portfolio extends Component {
  render() {
    const { javascript, react } = projectsList;

    return (
      <div id="portfolio-page" className="page-content">
        <NavBar />
        <header className="page-header">
          <h1>Portfólio</h1>
        </header>
        <main className="page-main">
          <section className="projects-container">
            <h2>React</h2>
            <div className="projects-grid">
            {Object.values(react).map((project) => <ProjectCard projectInfo={project} />)}
            </div>
          </section>
          <section className="projects-container">
            <h2>HTML, JavaScript, CSS</h2>
            <div className="projects-grid">
              {Object.values(javascript).map((project) => <ProjectCard projectInfo={project} />)}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Portfolio;

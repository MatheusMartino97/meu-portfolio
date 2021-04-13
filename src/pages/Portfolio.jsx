import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

import projectsList from '../data';

class Portfolio extends Component {
  render() {
    const { toDoList, pixelsArt, shoppingCard, colorGuess } = projectsList;

    return (
      <div id="portfolio-page" className="page-content">
        <NavBar />
        <header className="page-header">
          <h1>Portfólio</h1>
        </header>
        <main className="page-main">
          <section>
            <h2>React</h2>
            <div className="projects-grid">
              
            </div>
          </section>
          <section>
            <h2>HTML, JavaScript, CSS</h2>
            <div className="projects-grid">
              <ProjectCard projectInfo={pixelsArt} />
              <ProjectCard projectInfo={toDoList} />
              <ProjectCard projectInfo={shoppingCard} />
              <ProjectCard projectInfo={colorGuess} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Portfolio;

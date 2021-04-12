import React, { Component } from 'react';

import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

import projectsList from '../data';

class Portfolio extends Component {
  render() {
    const { toDoList, pixelsArt, shoppingCard } = projectsList;

    return (
      <div id="portfolio-page" className="page-content">
        <NavBar />
        <header className="page-header">
          <h1>Portfólio</h1>
        </header>
        <main className="page-main">
          <ProjectCard projectInfo={pixelsArt} />
          <ProjectCard projectInfo={toDoList} />
          <ProjectCard projectInfo={shoppingCard} />
        </main>
      </div>
    );
  }
}

export default Portfolio;

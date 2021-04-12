import React, { Component } from 'react';

import NavBar from '../components/NavBar';
class Project extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { projectInfo } = state;
    const { name, gifs, repository, url } = projectInfo;

    return (
      <div id="project-page" className="page-content">
        <NavBar />
        <header className="page-header">
          <h1>{name}</h1>
        </header>
        <main className="page-main">
          <section className="project-demonstrations">
            <div className="gif-mobile">
              <h2>Mobile</h2>
              <img src={gifs.mobile} alt="Mobile demonstration" />
            </div>
            <div className="gif-desktop">
              <h2>Desktop</h2>
              <img src={gifs.desktop} alt="Desktop demonstration" />
            </div>
          </section>
          <section className="project-info">
            <div className="coments">
              <h2>Sobre o projeto</h2>
              {Object.values(projectInfo.descriptions.long).map((paragraph) => (
                <p>{paragraph}</p>
              ))}
            </div>
            <div className="links-container">
              <h2>Links</h2>
              <div className="links">
                <a href={url} target="_blank" rel="noreferrer">
                  <button type="button">Acesse o site!</button>
                </a>
                <a href={repository} target="_blank" rel="noreferrer">
                  <button type="button">Veja o repositório!</button>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Project;

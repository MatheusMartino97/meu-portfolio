import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
class Project extends Component {
  render() {
    const {
      name,
      gifs,
      repository,
      url,
      descriptions,
      technologies,
      libraries,
      apis,
    } = JSON.parse(sessionStorage.getItem('projectInfo'));

    return (
      <div id="project-page" className="page-content">
        <NavBar />
        <header className="page-header">
          <h1>{name}</h1>
        </header>
        <main className="page-main">
          <section className="project-demonstrations">
            {gifs.mobile ? (
              <div className="gif-mobile">
                <h2>Mobile</h2>
                <img src={gifs.mobile} alt="Mobile demonstration" />
              </div>
            ) : null}
            <div className="gif-desktop">
              <h2>Desktop</h2>
              <img src={gifs.desktop} alt="Desktop demonstration" />
            </div>
          </section>
          <section className="project-info">
            <div className="coments">
              <h2>Sobre o projeto</h2>
              {Object.values(descriptions.long.paragraphs).map((paragraph) => (
                <p>{paragraph}</p>
              ))}
              <div>
                <p>
                  <strong>Tecnologias:</strong>
                  {technologies.map((technologie) => (
                    <em>{` ${technologie};`}</em>
                  ))}
                </p>
                {libraries.length !== 0 ? (
                  <p>
                    <strong>Bibliotecas:</strong>
                    {libraries.map((library) => (
                      <em>{` ${library};`}</em>
                    ))}
                  </p>
                ) : null}
                {apis.length !== 0 ? (
                  <ul>
                    <strong>APIs:</strong>
                    {apis.map((api) => (
                      <li>{`${api};`}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <Link to="/projects">
                <button type="button">Voltar para o portfólio</button>
              </Link>
            </div>
            <div className="links-container">
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

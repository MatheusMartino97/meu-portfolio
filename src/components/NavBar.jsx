import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav id="nav-bar">
        <div className="nav-name">
          <Link to="/">
            <h1>Matheus Martino do Amaral</h1>
          </Link>
        </div>
        <div className="nav-social-links">
          <a
            className="social-link"
            href="https://github.com/MatheusMartino97/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/github-108-438008.png"
              width="48px"
              height="48px"
              alt="Github"
            />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/matheus-martino/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/Kx2GSrT/linkedin.png"
              width="48px"
              height="48px"
              alt="Linked In"
            />
          </a>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfólio</Link>
          <Link to="/curriculum">Currículo</Link>
          <Link to="/services">Tecnologias</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
        </div>
        <div className="dropdown">
          <img
            width="50px"
            src="https://i.ibb.co/C2JTcgF/menu-button.png"
            alt=""
          />
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfólio</Link>
            <Link to="/curriculum">Currículo</Link>
            <Link to="/services">Tecnologias</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/about">Sobre</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-name">
          <h1>Matheus Martino do Amaral</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfólio</Link>
          <Link to="/curriculum">Currículo</Link>
          <Link to="/services">Serviços</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/about">Sobre</Link>
          {/* <a href=""></a>
          <a href=""></a>
          <a href=""></a> */}
        </div>
      </nav>
    );
  }
}

export default NavBar

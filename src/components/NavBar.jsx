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
          <Link>Sobre</Link>
          <Link>Serviços</Link>
          <Link>Contato</Link>
          <Link>Portfólio</Link>
          <Link>Currículo</Link>
          {/* <a href=""></a>
          <a href=""></a>
          <a href=""></a> */}
        </div>
      </nav>
    );
  }
}

export default NavBar

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function NotFound() {
  return (
    <div id="in-development-page">
      <NavBar />
      <header className="page-header">
        <h1>Página não encontrada!</h1>
      </header>
      <main className="page-main">
        <section>
          {/* <img
            src="https://i.ibb.co/18CKDG3/page-not-found.gif"
            alt="Not Found"
          /> */}
          <lottie-player src="https://matheusmartino97.github.io/portfolio/#/page-not-found.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
          <Link to="/">
            <button type="button">Voltar para a Home</button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default NotFound;

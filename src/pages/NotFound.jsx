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
        <lottie-player className="not-found-picture" src="https://assets7.lottiefiles.com/packages/lf20_Cu88f9.json"  background="transparent" style={{ height: 200, width: 160 }} speed="1" loop autoplay></lottie-player>
          {/* <img
            className="not-found-picture"
            src="https://i.ibb.co/vXSG0hV/k6cz2b5s-unscreen.gif"
            alt="In development"
          /> */}
          <Link to="/">
            <button type="button">Voltar para a Home</button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default NotFound;

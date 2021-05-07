import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function InDevelopment() {
  return (
    <div id="in-development-page">
      <NavBar />
      <header className="page-header">
        <h1>Página em construção!</h1>
      </header>
      <main className="page-main">
        <section>
          <img
            src="https://static.wixstatic.com/media/dd2b36_5d33a7f2a8a34933bc5dd293929652d0~mv2.gif"
            alt="In development"
          />
          {/* <img src="https://i.ibb.co/rGJbRWP/in-development.gif" alt="" /> */}
          <Link to="/">
            <button type="button">Voltar para a Home</button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default InDevelopment;

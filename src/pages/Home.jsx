import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { timer } = this.props;

    return (
      <div id="home-page" className="page-content">
        <NavBar />
        <main className="home-main">
          <section>
            <h1>{'<Olá />'}</h1>
            <h2>Meu nome é Matheus.</h2>
            <h2>
              Sou desenvolvedor full-stack formado pela Trybe.{' '}
              <span id="pipe-bar" style={{ visibility: timer || 'hidden' }}>
                |
              </span>
            </h2>

            <div className="home-links">
              <Link to="/projects">
                <button type="button">Veja meus projetos!</button>
              </Link>
              <Link to="/contact">
                <button type="button">Entre em contato!</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.timer,
});

export default connect(mapStateToProps)(Home);

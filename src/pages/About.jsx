import React, { Component } from 'react';
import NavBar from '../components/NavBar'

class About extends Component {
  render() {
    return (
      <div id="about-page" className="page-content">
        <NavBar />
        <header className="page-header">
          <h1>Sobre</h1>
        </header>
        <main className="page-main">
          <section className="picture">
            <div className="profile-picture"></div>
          </section>
          <section className="text">
            <h2>Matheus Martino do Amaral</h2>
            <p>
              Gosto muito de me comunicar e trabalhar em equipe. Sou apaixonado
              por desenvolvimento de software e por empresas que usam tecnologia
              para desenvolver serviços que facilitam a vida das pessoas.
            </p>
            <p>
              Meus conhecimentos em física e matemática me proporcionaram
              habilidades que julgo importantíssimas na área de programação.
            </p>
            <p>
              Sou estudante de desenvolvimento de software na Trybe, uma escola
              que estimula os alunos a trabalharem em equipe, simulando
              situações reais de trabalho em um time de desenvolvimento.
            </p>
            <p>
              Acredito que a boa convivência com colegas de trabalho é tão
              importante quanto as habilidades técnicas para realizar uma
              tarefa. Portanto, valorizo imensamente as soft-skills, pois prezo
              muito por bons relacionamentos.
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default About;

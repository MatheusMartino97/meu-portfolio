import React, { useContext } from 'react';
import projectsContext from '../context/projectsContext';
import NavBar from './NavBar';

function ChooseStack() {
  const { chooseTheStack } = useContext(projectsContext);

  return (
    <div id="choose-page" className="page-content">
      <NavBar />
      <main className="choose-main">
        <section>
          <h1>Escolha uma Stack</h1>

          <div className="choose-links">
            <button type="button" onClick={ () => { chooseTheStack('front') } }>Front-End</button>
            <button type="button" onClick={ () => { chooseTheStack('back') } }>Back-End</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ChooseStack;

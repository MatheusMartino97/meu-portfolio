import React, { useContext } from 'react';
import projectsContext from '../context/projectsContext';
import NavBar from './NavBar';
import { connect } from 'react-redux';

function ChooseStack({ timer }) {
  const { chooseTheStack } = useContext(projectsContext);

  return (
    <div id="choose-page" className="page-content">
      <NavBar />
      <main className="choose-main">
        <section>
          <h1>
            Escolha uma Stack.{' '}
            <span style={{ visibility: timer || 'hidden' }}>|</span>
          </h1>

          <div className="choose-links">
            <button
              type="button"
              onClick={() => {
                chooseTheStack('front');
              }}
            >
              Front-End
            </button>
            <button
              type="button"
              onClick={() => {
                chooseTheStack('back');
              }}
            >
              Back-End
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  timer: state.timer,
});

export default connect(mapStateToProps)(ChooseStack);

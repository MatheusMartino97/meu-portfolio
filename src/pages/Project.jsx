import React, { Component } from 'react';

import NavBar from '../components/NavBar';
class Project extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { projectInfo } = state;
    const { name } = projectInfo;

    return (
      <div id="project-page">
        <NavBar />
        <header className="page-header">
          <h1>{ name }</h1>
        </header>
        <main className="page-main">

        </main>
      </div>
    );
  }
}

export default Project;

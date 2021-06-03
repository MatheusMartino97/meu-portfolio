import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ProjectCard extends Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false,
    };
  }

  handleClick(projectInfo) {
    sessionStorage.setItem('projectInfo', JSON.stringify(projectInfo));

    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    const { projectInfo } = this.props;

    const { name, translation, descriptions, miniature, path } = projectInfo;

    return (
      <div className="project-card">
        <div className="card-miniature">
          <img src={miniature} alt="To do list miniature" />
        </div>
        <div className="card-infos">
          <h3>{name}</h3>
          <h4>{translation}</h4>
          <p>{descriptions.short}</p>
        </div>
        <div className="card-links">
          <button type="button" onClick={() => this.handleClick(projectInfo)}>
            Mais Informações
          </button>
        </div>
        {shouldRedirect ? <Redirect to={ `/projects/${path}` } /> : null}
      </div>
    );
  }
}

export default ProjectCard;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectCard extends Component {
  render() {
    const { projectInfo } = this.props;

    const { name, translation, description, miniature, path } = projectInfo;

    return (
      <div className="project-card">
        <div className="card-miniature">
          <img src={miniature} alt="To do list miniature" />
        </div>
        <div className="card-infos">
          <h3>{name}</h3>
          <h4>{translation}</h4>
          <p>{description}</p>
        </div>
        <div className="card-links">
          <Link
            to={{
              pathname: `/project/${path}`,
              state: {
                projectInfo,
              },
            }}
          >
            <button type="button">Mais Informações</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectCard;

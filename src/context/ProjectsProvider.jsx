import React, { useState } from 'react';
import projectsContext from './projectsContext';
import ProjectsFront from '../components/ProjectsFront';
import ProjectsBack from '../components/ProjectsBack';
import ChooseStack from '../components/ChooseStack';

function ProjectsProvider() {
  const [useStack, setStack] = useState(null);

  const chooseTheStack = (stack) => {
    setStack(stack);
  };

  const pageToBeReturned = (stack) => {
    switch (stack) {
      case 'frontend':
        return <ProjectsFront stack={stack} />;

      case 'backend':
        return <ProjectsBack stack={stack} />;

      default:
        return <ChooseStack />;
    }
  };

  const contextValue = {
    chooseTheStack,
  };

  return (
    <projectsContext.Provider value={contextValue}>
      {pageToBeReturned(useStack)}
    </projectsContext.Provider>
  );
}

export default ProjectsProvider;

import React, { useState } from 'react';
import projectsContext from './projectsContext';
import Projects from '../pages/Projects';

function ProjectsProvider() {
  const [useStack, setStack] = useState(null);

  const chooseTheStack = (stack) => {
    setStack(stack);
  }

  const contextValue = { chooseTheStack }

  return(
    <projectsContext.Provider value={ contextValue }>
      <Projects stack={ useStack }/>
    </projectsContext.Provider>
  );
}

export default ProjectsProvider;

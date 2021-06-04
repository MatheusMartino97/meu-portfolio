import React, { useState } from 'react';
import projectsContext from './projectsContext';
import FrontEnd from '../components/FrontEnd';
import BackEnd from '../components/BackEnd';
import ChooseStack from '../components/ChooseStack';

function ProjectsProvider() {
  const [useStack, setStack] = useState(null);

  const chooseTheStack = (stack) => {
    setStack(stack);
  }

  const pageToBeReturned = (stack) => {
    switch(stack) {
      case 'front':
        return <FrontEnd />;
      
      case 'back':
        return <BackEnd />;

      default:
        return <ChooseStack />;
    }
  }

  const contextValue = { 
    chooseTheStack,
  }

  return(
    <projectsContext.Provider value={ contextValue }>
      { pageToBeReturned(useStack) }
    </projectsContext.Provider>
  );
}

export default ProjectsProvider;

import React from 'react';
import FrontEnd from '../components/FrontEnd';
import BackEnd from '../components/BackEnd';
import ChooseStack from '../components/ChooseStack';

function Projects({ stack }) {
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

  return(
    <div>
      { pageToBeReturned(stack) }
    </div>
  );
}

export default Projects;

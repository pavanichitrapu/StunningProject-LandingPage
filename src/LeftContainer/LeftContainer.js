import React from 'react';
import classes from './LeftContainer.module.css';
import Heading from '../Heading/Heading';



function LeftContainer() {
  return (
    <div className={classes.LeftContainer} >
      <Heading />
    </div>
  );
}

export default LeftContainer;

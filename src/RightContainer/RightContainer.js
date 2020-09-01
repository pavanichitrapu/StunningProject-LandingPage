import React from 'react';
import classes from './RightContainer.module.css';
import LandingImg from '../assets/landing-section-image.png' ;


function RightContainer() {
  return (
    <div className={classes.RightContainer}>
    <img src={LandingImg} className={classes.LandingImage} />
    </div>
  );
}

export default RightContainer;

import React from 'react';
import classes from './MainContainer.module.css';
import Topbar from '../Topbar/Topbar';
import LeftContainer from '../LeftContainer/LeftContainer';
import RightContainer from '../RightContainer/RightContainer';
import Checklist from '../Checklist/Checklist';

function MainContainer() {
  return (
    <div className={classes.MainContainer}>
      <Topbar />
      <div className={classes.MainSection}>
      <LeftContainer />
      <RightContainer />
      </div>
      <Checklist />
    </div>
  );
}

export default MainContainer;

import React from 'react';
import classes from './MenuBar.module.css';
import hamburger from '../assets/hamburger.png';



function MenuBar() {
  return (
    <div className={classes.Menubar}>
     <div><a className={classes.MenuItem}>Home</a></div>
     <div><a className={classes.MenuItem}>About</a></div>
     <div><a className={classes.MenuItem}>Blog</a></div>
     <div><a className={classes.MenuItem}>Jobs</a></div>
     
     <div className={classes.HamBurgerIcon}>
     <img src={hamburger} className={classes.Ham} />
    </div>
    </div>
     
  );
}

export default MenuBar;

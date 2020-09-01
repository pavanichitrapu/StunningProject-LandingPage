import React from 'react';
import classes from './Topbar.module.css';
import MenuBar from '../MenuBar/MenuBar';
import Logo from '../assets/stunning-logo.png';


function Topbar() {
  return (
    <div className={classes.Topbar}>
        <img  className={classes.LogoStunning} src={Logo} />
        <MenuBar/>
        <button className={classes.TopbarBtn}>Your Account</button>
    </div>
  );
}

export default Topbar;

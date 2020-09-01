import React from 'react';
import classes from './Heading.module.css';
import arrDown from '../assets/arrow-down.png';
function Heading() {
  return (
    <div className={classes.DescriptionWrapper} >
      <p className={classes.DescHeader}>Stunning</p>
      <p className={classes.DescHeader}>
        Workplace
        <div></div>
        </p>
      <p className={classes.Desctext}>
        With Stunning, remote teams can organize projects, manage shifting
        priorities, and get work done.
      </p>  

      <div className={classes.Buttons}>
        <button className={classes.DescBtn}>New Account</button>
        <button className={classes.DescArrBtn}><img classNAme={classes.arrDown} src={arrDown}></img></button>
      </div>   
    </div>
  );
}

export default Heading;

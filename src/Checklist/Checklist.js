import React from 'react';
import classes from './Checklist.module.css';
import blueTick from '../assets/tick-blue.png';
import grayTick from '../assets/tick-gray.png';
import userBlue from '../assets/user-blue.png';
import userOrange from '../assets/user-orange.png';
import userPink from '../assets/user-pink.png';
import userRed from '../assets/user-red.png';

function Checklist() {
  return (
    <div className={classes.Checklist} >
      
      <div className={classes.Card}>
        <img src={grayTick} />
        <p>Dmm Design</p>
        <div><img className={classes.User} src={userPink} /></div>
        <p>20 Dec</p>
        <div><div className={classes.SmallBtnPink} ></div></div>
      </div>

      <div className={classes.CardHighlight}>
        <img src={blueTick} />
        <p>Blur Animation</p>
        <div><img src={userOrange} className={classes.User}/></div>
        <p>22 Dec</p>
        <div><div className={classes.SmallBtnOrange}></div></div>
      </div>

      <div className={classes.Card}>
        <img src={grayTick} />
        <p>Illustrations</p>
        <div><img src={userBlue}  className={classes.User}/></div>
        <p>26 Dec</p>
        <div><div className={classes.SmallBtnBlue}></div></div>
      </div>

      <div className={classes.Card}>
        <img src={grayTick} />
        <p>Refunds</p>
        <div><img src={userRed} className={classes.User} /></div>
        <p>28 Dec</p>
        <div><div className={classes.SmallBtnRed}></div></div>
      </div>
    
    </div>
  );
}

export default Checklist;

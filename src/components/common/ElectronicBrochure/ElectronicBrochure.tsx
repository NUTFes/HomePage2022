import React, {FC} from "react";
import g from '../../../assets/globals.module.css';
import s from './ElectronicBrochure.module.css'

const ElectronicBrochure: FC = () => {
  return(
    <div className={s.center}>
     <div className={s.card}>
      <hr className={g.border}></hr>
        <p id="event" className={g.bigfont1}>ElectronicBrochure</p>
        <p className={g.bigfont2}>電子パンフレット</p>
      <hr className={g.border}></hr>
      <a href="https://pamphlet.nutfes.net/"><img className={s.image} src="brochure.png"/></a> 
      </div>
    </div>
  );
};

export default ElectronicBrochure;

import React, {FC} from "react";
import g from '../../../assets/globals.module.css';
import s from './TeacherSponsor.module.css'


const TeacherSponsor: FC =() => {
  return(
  <div id='president' className={g.center1}>
    <div className={g.box1}>
      <p className={g.bigfont1}>学内募金</p>
      {<div className={g.column}><span className={g.border1}/>
        <div className={g.triangle}></div><div className={g.span}></div> 
        <span className={g.border3}/>
      </div>}
    </div>
    <div className={g.center2}>
      <div className={s.box}>
      <div className={g.bigfont2}>
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default TeacherSponsor;
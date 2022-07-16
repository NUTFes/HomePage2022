import React, {FC} from "react";
import g from '../../../assets/globals.module.css';

const Event_card1: FC = () => {
  return (
    <div id='stickee' className={g.center1}>
      <div className={g.card}>
        <div className={g.box1}>
          <p className={g.bigfont1}>学籍番号抽選会</p>
          {<div className={g.column}><span className={g.border1}/>
            <div className={g.triangle}></div><div className={g.span}></div> 
            <span className={g.border3}/>
          </div>}
        </div>
        <div className={g.center2}>
	        <img className={g.image} src="event_lottery.jpg" />
          <div className={g.box2}>
            <div className={g.middlefont1}>
              <p className={g.lineHeight}>
              毎年恒例！ 景品大放出！！<br/>
              技大祭の締めに運試し！<br/>
              学生証をお忘れなく！！！<br/>
              ※学生証がないと参加できません汗汗

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card1;
import React, {FC} from "react";
import g from '../../../assets/globals.module.css';

const Event_card3: FC = () => {
  return (
    <div id='hero' className={g.center1}>
      <div className={g.card}>
        <div className={g.box1}>
          <p className={g.bigfont1}>ギダイジャー</p>
          {<div className={g.column}><span className={g.border1}/>
            <div className={g.triangle}></div><div className={g.span}></div> 
            <span className={g.border3}/>
          </div>}
        </div>
        <div className={g.center2}>
	        <img className={g.image} src="event_gidaija-.jpg" />
          <div className={g.box2}>
            <div className={g.middlefont1}>
              <p className={g.lineHeight}>
                数多の苦難を乗り越え3年ぶりに復活！！<br/>
                何を捨ててでも単位を守り、<br/>
                無事に卒業するために戦えギダイジャー！！！！！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card3;
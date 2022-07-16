import React, {FC} from "react";
import g from '../../../assets/globals.module.css';

const Event_card3: FC = () => {
  return (
    <div className={g.center1}>
      <div className={g.card}>
        <div className={g.box1}>
          <p className={g.bigfont1}>麻雀大会</p>
          {<div className={g.column}><span className={g.border1}/>
            <div className={g.triangle}></div><div className={g.span}></div> 
            <span className={g.border3}/>
          </div>}
        </div>
        <div className={g.center2}>
	        <img className={g.image} src="event_mahjong.jpg" />
          <div className={g.box2}>
           <div className={g.middlefont1}>
              <p className={g.lineHeight}>
              技大生の影の必修科目「麻雀」雀鬼は誰だ！？<br/>
              開催期間中に東風戦を3回行い、合計点で競う。<br/>
              3位までには景品あり。<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card3;
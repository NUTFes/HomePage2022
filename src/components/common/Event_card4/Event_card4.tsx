import React, {FC} from "react";
import g from '../../../assets/globals.module.css';

const Event_card3: FC = () => {
  return (
    <div id='game'className={g.center1}>
      <div className={g.card}>
        <div className={g.box1}>
          <p className={g.bigfont1}>ゲーム大会</p>
          {<div className={g.column}><span className={g.border1}/>
            <div className={g.triangle}></div><div className={g.span}></div> 
            <span className={g.border3}/>
          </div>}
        </div>
        <div className={g.center2}>
	        <img className={g.image} src="event_game.jpg" />
          <div className={g.box2}>
            <div className={g.middlefont1}>
              <p className={g.lineHeight}>
                集え、ゲーマーたち。<br/>
                大乱闘スマッシュブラザーズ大会開催決定！<br/>
                トーナメントで技大最強の<br/>
                スマブラプレイヤーを決定
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card3;
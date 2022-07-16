import React, {FC} from "react";
import g from '../../../assets/globals.module.css';

const Event_card2: FC = () => {
  return (
    <div id ='poker'className={g.center1}>
      <div className={g.card}>
        <div className={g.box1}>
          <p className={g.bigfont1}>ポーカー大会</p>
          {<div className={g.column}><span className={g.border1}/>
            <div className={g.triangle}></div><div className={g.span}></div> 
            <span className={g.border3}/>
          </div>}
        </div>
        <div className={g.center2}>
	        <img className={g.image} src="event_poker.jpg" />
          <div className={g.box2}>
            <div className={g.middlefont1}>
              <p className={g.lineHeight}>
                ギャンブル嫌いな奴、いないだろ？<br/>
                カジノゲームといえば...ポーカーだ！！<br/>
                最強のポーカープレイヤー決定戦ここに開幕！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card2;
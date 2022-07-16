import React, {FC} from "react";
import g from '../../../assets/globals.module.css';

const Event_card3: FC = () => {
  return (
    <div id='song'className={g.center1}>
      <div className={g.card}>
        <div className={g.box1}>
          <p className={g.bigfont1}>カラオケ大会</p>
          {<div className={g.column}><span className={g.border1}/>
            <div className={g.triangle}></div><div className={g.span}></div> 
            <span className={g.border3}/>
          </div>}
        </div>
        <div className={g.center2}>
	        <img className={g.image} src="event_karaoke.jpg" />
          <div className={g.box2}>
            <div className={g.middlefont1}>
              <p className={g.lineHeight}>
              歌自慢集合！！<br/>
              己の歌を技大に響かせるんだ！！<br/>
              心に響けば景品が…？？LET'S SING！！！<br/>

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card3;
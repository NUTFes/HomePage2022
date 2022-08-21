import React, {FC} from "react";
import s from "./YukyuDrum.module.css"
import g from '../../../assets/globals.module.css';

const YukyuDrum: FC = () => {
  return(
    <div className={g.center1}>
      <div className={g.card}>
        <div className={g.box1}>
          <p className={g.bigfont1}>悠久太鼓愛好会鶴亀会</p>
          <div className={g.column}><span className={g.border1}/>
            <div className={g.triangle}></div><div className={g.span}></div> 
            <span className={g.border3}/>
          </div>
        </div>
        <div className={g.center2}>
          <img className={s.image} src ="YukyuDrum.png"/>
          <div className={g.box2}>
            <div className={g.middlefont1}>
              <p className={g.lineHeight}>
              みなさん、こんにちは。<br/>
              長岡技大で和太鼓を演奏している団体、<br/>
              悠久太鼓愛好会鶴亀会です。<br/>
              私たちは地域の祭りや小学校、老人ホームなどで<br/>
              ボランティアとして演奏しています。<br/>
              毎年の技大祭では恒例の演奏会も行っており、<br/>
              今年も演奏します。<br/>
              時間は〇〇時〇〇分、場所は〇〇〇〇です。<br/>
              普段聞けない和太鼓の音や振動をぜひあなたの<br/>
              耳で目で体験しにきてください！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YukyuDrum;
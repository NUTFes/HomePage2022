import React, {FC} from "react";
import s from "./Group_info.module.css";
import g from "../../../assets/globals.module.css";

const Group_info: FC =() => {
  return (
    <div className={s.card}>
      <hr id ='group'className={g.border}></hr>
        <p className={g.bigfont1}>Particpating group</p>
        <p className={g.bigfont2}>参加団体情報</p>
      <hr className={g.border}></hr>
      <div className={s.card_flex}>
        <div>
          <img src='/_DSC0573 1.jpg'/>
        </div>
        <p className={s.bigfont}>ステージ<br/><p className={s.font}>音楽やダンス、<br/>国際文化に触れる</p></p>
      </div>
      <div className={s.card_flex}>
        <div>
          <img src='/DSC_0467 1.jpg'/>
        </div>
        <p className={s.bigfont}>展示<br/><p className={s.font}>新潟を始めとする<br/>世界各国の展示</p></p>
        
      </div>
      <div className={s.card_flex}>
        <div>
          <img src='DSC_0801 1.jpg'/> 
        </div>
        <p className={s.bigfont}>参加型<p className={s.font}>大人でも楽しめる<br/>体験型イベント</p></p>
        
      </div>
      <div className={s.card_flex}>
        <div>
        <img src='/DSC_0801 1.jpg'/>
        </div>
        <p className={s.bigfont}>物販<p className={s.font}>空いた小腹に<br/>ダイレクトインッ!</p></p>
        
      </div>
    </div>
  );
};

export default Group_info;
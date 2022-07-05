import React, {FC} from "react";
import s from "./Group_info.module.css";
import g from "../../../assets/globals.module.css";

const Group_info: FC =() => {
  return (
    <div className={s.card}>
      <hr className={g.border}></hr>
        <p className={g.bigfont1}>Particpating group</p>
        <p className={g.bigfont2}>参加団体情報</p>
      <hr className={g.border}></hr>
      <div className={s.card_flex}>
        <div>
          <img src='/DSC_0467 1.jpg'/>
        </div>
        <p className={s.bigfont}>ステージ</p>
      </div>
      <div className={s.card_flex}>
        <div>
          <img src='/DSC_0801 1.jpg'/>
        </div>
      </div>
      <div className={s.card_flex}>
        <div>
          <img src='/_DSC0573 1.jpg'/> 
        </div>
      </div>
      <div className={s.card_flex}>
        <div>
        <img src='/DSC_0801 1.jpg'/>
        </div>
      </div>
    </div>
  );
};

export default Group_info;
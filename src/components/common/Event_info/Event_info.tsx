import React, {FC} from "react";
import s from './Event_info.module.css'
import g from '../../../assets/globals.module.css';

const Event_info: FC = () => {
  return (
    <div>
       <div className={s.center}>
        <div className={s.card}>
        <hr className={g.border}></hr>
            <p className={g.bigfont1}>Event information</p>
            <p className={g.bigfont2}>技大祭企画情報</p>
          <hr className={g.border}></hr>
          <p className={g.bigfont4}>学籍番号抽選会</p>
          <p className={g.bigfont4}>ポーカー大会</p>
          <p className={g.bigfont4}>麻雀大会</p>
          <p className={g.bigfont4}>ゲーム大会</p>
          <p className={g.bigfont4}>カラオケ大会</p>
          <p className={g.bigfont4}>ギダイジャ―</p>
        </div>
       </div>
    </div>
  );
};

export default Event_info;
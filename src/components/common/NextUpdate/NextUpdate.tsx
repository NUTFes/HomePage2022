import React, {FC} from "react";
import s from './NextUpdate.module.css'


const NextUpdate: FC = () => {
  return (
  <div>
    <div className={s.center}>
      <hr className={s.border}></hr>
        <p className={s.bigfont}>NextUpdate</p>
        <p className={s.bigfont2}>次回更新日</p>
      <hr className={s.border}></hr>
    </div>
    <div className={s.topspace}></div>
    <div className={s.card}>
      <div className={s.topspace}></div>
        <p className={s.smallfont2}>2022</p>
        <div className={s.center}>
          <p className={s.bigfont3}>
            7.11
          </p>  
          <p className={s.middlefont2}>
            土
          </p>
        </div>
        <span />
      <div className={s.minicard}>
        <p className={s.middlefont}>・技大祭企画情報<br/>・参加団体情報</p>
        </div>
    </div>
  </div>
  );
};

export default NextUpdate;
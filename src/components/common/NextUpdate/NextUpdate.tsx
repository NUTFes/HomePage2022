import React, {FC} from "react";
import s from './NextUpdate.module.css'
import g from '../../../assets/globals.module.css'


const NextUpdate: FC = () => {
  return (
  <div>
    <div className={s.card}>
    <div className={s.center}>
      <hr className={g.border}></hr>
        <p className={g.bigfont1}>NextUpdate</p>
        <p className={g.bigfont2}>次回更新日</p>
      <hr className={g.border}></hr>
    </div>
    <div className={s.topspace}></div>
      <div className={s.topspace}></div>
        <div className={s.center}>
          <p className={s.bigfont3}>
            開催日まで随時更新中!
          </p>  
          <p className={s.middlefont2}>
            
          </p>
        </div>
        <span />
      <div className={s.minicard}>
        <p className={s.middlefont}>当日スケジュール<br/>学長・委員長挨拶<br/>協賛一覧<br/>募金一覧<br/></p>
        </div>
    </div>
  </div>
  );
};

export default NextUpdate;
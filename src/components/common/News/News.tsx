import React, {FC} from "react";
import s from './News.module.css'
import g from '../../../assets/globals.module.css'

const News: FC =() => {
  return (
    <div>
    <div className={s.card}>
    <div className={s.center}>
      <hr className={g.border}></hr>
        <p className={g.bigfont1}>News</p>
        <p className={g.bigfont2}>お知らせ</p>
      <hr className={g.border}></hr>
    </div>
    <div className={s.topspace}></div>
      <div className={s.topspace}></div>
      <div className={s.minicard}>
        <p className={s.middlefont}>7/7日<br/>・ホームページを更新しました</p>
        </div>
    </div>
  </div>
  );
};

export default News;
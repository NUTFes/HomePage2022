import React, {FC} from "react";
import s from './News.module.css'
import g from '../../../assets/globals.module.css'

const News: FC =() => {
  return (
    <div>
    <div className={s.card}>
    <div className={s.center}>
      <hr className={g.border}></hr>
        <p id='news' className={g.bigfont1}>News</p>
        <p className={g.bigfont2}>お知らせ</p>
      <hr className={g.border}></hr>
    </div>
    <div className={s.topspace}></div>
      <div className={s.topspace}></div>
      <div className={s.minicard}>
        <p className={s.middlefont} >8月22日<br/>
        <a href={process.env.URL+'/president_message'} className={s.link}>・代表挨拶ページを更新しました</a></p>
        <p className={s.middlefont}>7月16日<br/>・ホームページを更新しました</p>
        </div>
    </div>
  </div>
  );
};

export default News;
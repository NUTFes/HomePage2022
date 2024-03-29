import React, { FC } from "react";
import s from './News.module.css'
import g from '../../../assets/globals.module.css'

const News: FC = () => {
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
          <div className={s.important}>
            <p>重要なお知らせ</p>
          </div>
          <p className={s.middlefont}>
            第41回技大祭は、新型コロナウイルス感染症の
            拡大防止のため、対面での参加は、
            学内の学生及び教職員のみとなりました。<br />
            学外の皆様は、オンライン配信などで
            ご参加頂きますようお願いいたします
          </p>
          <p className={s.middlefont} >9月10日<br />
            <a href="https://forms.gle/779bkdUqbFKBpXF99" className={s.link}>・アンケートのご協力お願いします。</a><br />
          </p>
          <p className={s.middlefont} >9月9日<br />
            <a href={process.env.URL + '/live'} className={s.link}>・YouTubeライブ配信ページを公開しました</a><br />
          </p>
          <p className={s.middlefont} >9月7日<br />
            <a href={process.env.URL + '/participation_group_infor'} className={s.link}>・参加団体情報ページを公開しました</a><br />
            <a href="https://pamphlet.nutfes.net/" className={s.link}>・電子パンフレットを公開しました</a><br />
          </p>
          <p className={s.middlefont} >9月5日<br />
            <a href={process.env.URL + '/consideration'} className={s.link}>・来場される方はこちらをお読みください</a><br />
            <a href={process.env.URL + '/Sponsorship'} className={s.link}>・ご協賛・募金一覧を公開しました</a>
          </p>
          <p className={s.middlefont} >9月1日<br />
            <a href={process.env.URL + '/schedule_infor'} className={s.link}>・当日スケジュールページを公開しました</a></p>
          <p className={s.middlefont} >8月28日<br />
            <a href={process.env.URL + '/map'} className={s.link}>・校内マップページを公開しました</a></p>
          <p className={s.middlefont} >8月22日<br />
            <a href={process.env.URL + '/president_message'} className={s.link}>・代表挨拶ページを公開しました</a></p>
        </div>
      </div>
    </div >
  );
};

export default News;
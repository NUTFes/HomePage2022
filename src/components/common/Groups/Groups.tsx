import React, {FC} from "react";
import s from './Groups.module.css'


const Groups: FC = () => {
  return (
  <div className={s.center}>
    <div className={s.bottom}>
      <div className={s.center}>
        <hr className={s.border}></hr>
          <p className={s.bigfont}>Participating Groups</p>
          <p className={s.bigfont2}>参加団体　募集</p>
        <hr className={s.border}></hr>
        <div className={s.topspace2}></div>
        <div className={s.bigfont2}>参加団体になりませんか？</div>
      </div>
      <div className={s.topspace}></div>
      <div className={s.card} >
        <img src='/P9140261.JPG'/>
        <div className={s.column}>
          <div className={s.middlefont1}>卒業するまでに楽しい思い出を残したい方</div>
          <div className={s.smallfont1}>友人と同じ目的に向かって一生懸命に活動したことは一生の思い出になります！</div>
        </div>
      </div>
      <div className={s.card} >
        <div className={s.rightSpace}></div>
        <div className={s.column}>
            <div className={s.middlefont2}>ノルマなし<br/>なにをしてもOK</div>
            <div className={s.smallfont2}>自分達のしたいことをして好きなだけ稼いで自由にどうぞ！</div>
          </div>
          <img src='/P9140261.JPG'/>
        </div>
      <div className={s.card} >
        <img src='/P9140261.JPG'/>
        <div className={s.column}>
          <div className={s.middlefont3}>大学生活がより楽しくなります。</div>
          <div className={s.smallfont3}>普段体験できないことの一つに参加団体は含まれていますよね？！</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Groups;
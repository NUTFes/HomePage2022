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
        <img src='/_DSC0573 1.jpg'/>
        <div className={s.column}>
          <div className={s.middlefont1}>展示・体験</div>
          <div className={s.smallfont1}>日本の文化や世界の文化<br/>を伝えましょう！<br/>また、技大の特徴である科学<br/>を楽しんでもらいましょう</div>
        </div>
      </div>
      <div className={s.card} >
        <div className={s.rightSpace}></div>
        <div className={s.column}>
            <div className={s.middlefont2}>パフォーマンス・演奏</div>
            <div className={s.smallfont2}>日頃の練習している<br/>ダンスや音楽の成果を<br/>見せて技大祭を一緒に<br/>盛り上げましょう！</div>
          </div>
          <img src='/DSC_0467 1.jpg'/>
        </div>
      <div className={s.card} >
        <img src='/DSC_0801 1.jpg'/>
        <div className={s.column}>
          <div className={s.middlefont3}>卒業するまでに楽しい<br/>思い出を残したい方</div>
          <div className={s.smallfont3}>友人と同じ目的に向かって<br/>一生懸命に活動したことは<br/>一生の思い出になります！</div>
        </div>
      </div>
      <a href="https://group-manager.nutfes.net/" className={s.button} >申し込みはこちらをタップ</a>
    </div>
  </div>
  );
};

export default Groups;
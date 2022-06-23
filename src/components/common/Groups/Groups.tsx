import React, {FC} from "react";
import s from './Groups.module.css'
import g from '../../../assets/globals.module.css'


const Groups: FC = () => {
  return (
    <div className={s.center}>
        <div className={s.center}>
          <hr className={g.border}></hr>
            <p className={g.bigfont1}>Participating Groups</p>
            <p className={g.bigfont2}>参加団体　募集</p>
          <hr className={g.border}></hr>
          <div className={s.topspace2}></div>
          <div className={g.bigfont2}>参加団体になりませんか？</div>
        </div>
        <div className={s.topspace}></div>
        <div className={s.card} >
          <img src='/_DSC0573 1.jpg'/>
          <div className={s.column}>
            <p className={s.box1}>
              <div className={g.middlefont1}>展示・体験</div>
            </p>
            <div className={s.box2}>
              <p className={g.smallfont1}>日本の文化や世界の文化<br/>を伝えましょう！<br/>また、技大の特徴である科学<br/>を楽しんでもらいましょう</p>
            </div>
          </div>
        </div>
        <div className={s.card} >
          <div className={s.rightSpace}></div>
          <div className={s.column}>
            <div>
            <p className={s.box1}>
              <div className={g.middlefont1}>パフォーマンス・演奏</div>
            </p>
            </div>
            <div className={s.box2}>
              <p className={g.smallfont1}>日頃の練習している<br/>ダンスや音楽の成果を<br/>見せて技大祭を一緒に<br/>盛り上げましょう！</p>
            </div>
          </div>
              <img src='/DSC_0467 1.jpg'/>
        </div>
        <div className={s.card} >
          <img src='/DSC_0801 1.jpg'/>
          <div className={s.column}>
            <p className={s.box1}>
              <div className={g.middlefont1}>卒業するまでに楽しい<br/>出を残したい方</div>
            </p>
            <div className={s.box2}>
              <p className={g.smallfont1}>友人と同じ目的に向かって<br/>一生懸命に活動したことは<br/>一生の思い出になります！</p>
            </div>
          </div>
        </div>
      <div className={s.bottom}>
        <a href="https://group-manager.nutfes.net/" className={s.button} >申し込みはこちらをタップ</a>
      </div>
    </div>
  );
};

export default Groups;
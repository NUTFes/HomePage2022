import React, {FC} from "react";
import s from './Access.module.css'


const Access: FC = () => {
  return (
  <div>
    <div className={s.center}>
      <hr className={s.border}></hr>
        <p className={s.bigfont}>Access</p>
        <p className={s.bigfont2}>アクセス</p>
      <hr className={s.border}></hr>
    </div>
    <div className={s.topspace}></div>
    <div className={s.card} >
      <div className={s.center}>
        <p className={s.middlefont}>長岡技術科学大学のアクセス</p>
        <p className={s.smallfont}>所在地: 〒940-2188 新潟県長岡市上富岡町1603-1</p>
        <div className={s.topspace2}></div>
        <div className={s.gmap}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.2517832919207!2d138.77765195818787!3d37.42520714495619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5aedc609c6e15%3A0x75a37d3645c0f37a!2z6ZW35bKh5oqA6KGT56eR5a2m5aSn5a2m!5e0!3m2!1sja!2sjp!4v1651943454569!5m2!1sja!2sjp" width="100%" height="auto" ></iframe>
        </div>
        <div className={s.topspace2}></div>
        <p className={s.middlefont}>所要時間</p>
        <p className={s.smallfont}>長岡駅から車で20分</p>
        <p className={s.smallfont}>長岡駅からバスで20分</p>
      </div>
    </div>
  </div>
  );
};

export default Access;
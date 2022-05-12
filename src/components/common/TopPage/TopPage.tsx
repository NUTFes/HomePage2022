import React, { FC } from "react";
import s from "./TopPage.module.css";

const TopPage: FC = () => {
  return (
    <div className={s.conteinar}>
      <div className={s.background}>
	      <img className={s.image} src="background1.jpg" />
	      <img className={s.image} src="background2.jpg" />
	      <img className={s.image} src="background3.jpg" />
        <img className={s.image} src="background4.jpg" />
	      <img className={s.image} src="background5.jpg" />
        <div className={s.title1}>
          <div>
           <p className={s.header1}>第41回</p>
            <span/>
          </div>
        </div>

        <div className={s.title2}>
          <div className={s.subtitle}>
            <p className={s.header2}>長岡技術科学大学</p>
            <span className={s.headerline2_1} />
          </div>
          <div>
            <p className={s.header3}>学校祭開催</p>
            <span className={s.headerline2_2} />
          </div>
        </div>
        <div className={s.box}>
          <div className={s.date}>
            2022. <span>9.10</span>(土)‣ <span>9.11</span>(日)
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;

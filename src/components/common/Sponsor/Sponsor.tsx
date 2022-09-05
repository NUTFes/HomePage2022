import React, { FC } from "react";
import g from '../../../assets/globals.module.css';
import s from './Sponsor.module.css'


const Sponsor: FC = () => {
  return (
    <div id='president' className={g.center1}>
      <div className={g.box1}>
        <p className={g.bigfont1}>ご協賛企業名</p>
        {<div className={g.column}><span className={g.border1} />
          <div className={g.triangle}></div><div className={g.span}></div>
          <span className={g.border3} />
        </div>}
      </div>
      <div className={g.center2}>
        <div className={s.box}>
          <div className={g.bigfont2}>
            麺場　風雷房様<br />
            株式会社　文化様<br />
            株式会社　生活情報新聞社様<br />
            株式会社　リンクス様<br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
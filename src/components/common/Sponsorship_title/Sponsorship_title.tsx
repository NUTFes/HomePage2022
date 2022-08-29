import React, {FC} from "react";
import s from './Sponsorship_title.module.css';
import g from '../../../assets/globals.module.css';


const Sponsorship_title: FC = () => {
  return (
    <div className={s.titleContainer}>
      <span className={g.border}/>
      <div className={g.bigfont1}>
        Cooperators
      </div>
      <div className={g.bigfont2}>
        ご協賛・募金一覧
      </div>
      <span className={g.border}/>
    </div>
  );
};

export default Sponsorship_title; 
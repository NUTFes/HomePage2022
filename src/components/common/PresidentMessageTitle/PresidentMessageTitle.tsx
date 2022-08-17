import React, {FC} from "react";
import s from './PresidentMessageTitle.module.css'
import g from '../../../assets/globals.module.css'

const PresidentMessageTitle: FC =() => {
  return (
    <div className={s.titleContainer}>
    <span className={g.border} />
    <div className={g.bigfont1}>Representative Message</div>
    <div className={g.bigfont2}>代表挨拶</div>
    <span className={g.border} />
  </div>
  );
};

export default PresidentMessageTitle;

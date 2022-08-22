import React, {FC} from "react";
import s from './ScheduleTitle.module.css'
import g from '../../../assets/globals.module.css'

const ScheduleTitle: FC =() => {
  return (
    <div className={s.titleContainer}>
    <span className={g.border} />
    <div className={g.bigfont1}>Schedule</div>
    <div className={g.bigfont2}>当日スケジュール</div>
    <span className={g.border} />
  </div>
  );
};

export default ScheduleTitle;

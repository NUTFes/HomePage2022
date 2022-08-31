import React, { FC } from "react";
import s from "./Schedule_title.module.css";
import g from "../../../assets/globals.module.css";

const Schedule_title: FC = () => {
  return (
    <div className={s.titleContainer}>
      <span className={g.border} />
      <div className={g.bigfont1}>Event information</div>
      <div className={g.bigfont2}>当日スケジュール</div>
      <span className={g.border} />
    </div>
  );
};

export default Schedule_title;

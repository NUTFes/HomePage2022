import React, { FC } from "react";
import s from "./Group_title.module.css";
import g from "../../../assets/globals.module.css";

const Group_title: FC = () => {
  return (
    <div className={s.titleContainer}>
      <span className={g.border} />
      <div className={g.bigfont1}>Participation group</div>
      <div className={g.bigfont2}>参加団体情報</div>
      <span className={g.border} />
    </div>
  );
};

export default Group_title;

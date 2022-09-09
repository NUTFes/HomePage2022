import React, { FC } from "react";
import s from "./Title.module.css";
import g from "../../../assets/globals.module.css";

interface Props {
  englishTitle: string
  japaneseTitle: string
}

const Group_title: FC<Props> = (props) => {
  return (
    <div className={s.titleContainer}>
      <span className={g.border} />
      <div className={g.bigfont1}>{props.englishTitle}</div>
      <div className={g.bigfont2}>{props.japaneseTitle}</div>
      <span className={g.border} />
    </div>
  );
};

export default Group_title;

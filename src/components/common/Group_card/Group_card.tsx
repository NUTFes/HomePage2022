import React, { FC } from "react";
import s from "./Group_card.module.css";
import g from "../../../assets/globals.module.css";

const Group_card: FC = () => {
  return (
    <div className={s.center}>
      <div className={g.card}>
        <p className={g.bigfont1}>展示・ステージ</p>
      </div>
    </div>
  );
};

export default Group_card;

import React, { FC } from "react";
import Schedule1 from ".";
import c from "../../../components/common/Schedule1/Schedule1.module.css";

const Schedule1: FC = () => {
  return (
    <div id="stickee" className={c.center1}>
      <div className={c.card}>
        <p className={c.bigfont1}>1日目</p>

        <div className={c.box1}>
          <img className={c.image} src="9.10_schedule_hare.png" />

          <img className={c.image} src="9.10_schedule_ame.png" />
        </div>
      </div>
    </div>
  );
};

export default Schedule1;

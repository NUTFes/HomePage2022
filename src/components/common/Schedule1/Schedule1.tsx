import React, { FC } from "react";
import c from "../../../components/common/Schedule1/Schedule1.module.css";

const Schedule1: FC = () => {
  return (
    <div id="stickee" className={c.center1}>
      <div className={c.card}>
        <p className={c.bigfont1}>1日目</p>

        <div className={c.box1}>
          <img className={c.image} src="day1_sunny.png" />

          <img className={c.image} src="day1_rain.png" />
        </div>
      </div>
    </div>
  );
};

export default Schedule1;

import React, { FC } from "react";
import c from "../../../components/common/Schedule2/Schedule2.module.css";

const Schedule2: FC = () => {
  return (
    <div id="stickee" className={c.center1}>
      <div className={c.card}>
        <p className={c.bigfont1}>2日目</p>

        <div className={c.box1}>
          <img className={c.image} src="day2.png" />

          <img className={c.image} src="day2_raining.png" />
        </div>
      </div>
    </div>
  );
};

export default Schedule2;
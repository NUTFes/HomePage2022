import React, { FC } from "react";
import c from "../../../components/common/Group_courus/Group_courus.module.css";

const Group_courus: FC = () => {
  return (
    <div id="stickee" className={c.center1}>
      <div className={c.card}>
        <div className={c.box1}>
          <p className={c.bigfont1}>長岡技術科学大学</p>
          <p className={c.bigfont2}>合唱サークル</p>
          {
            <div className={c.column}>
              <span className={c.border1} />
              <div className={c.triangle}></div>
              <div className={c.span}></div>
              <span className={c.border3} />
            </div>
          }
        </div>
        <div className={c.center2}>
          <img className={c.image} src="group_courus.jpg" />
        </div>
        <div className={c.box1}>
          <div className={c.middlefont1}>
            <p className={c.lineHeight}>
              本日は合唱サークルより題名のない合唱会が行われます。ご興味のある方は会場までぜひ足をお運びください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group_courus;

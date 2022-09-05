import React, {FC} from "react";
import s from './Consideration.module.css'
import g from '../../../assets/globals.module.css'

const Consideration: FC =() => {
  return (
  <div>
    <div className={s.titleContainer}>
      <span className={g.border} />
      <div className={g.bigfont1}>Considerations</div>
      <div className={g.bigfont2}>留意事項</div>
      <span className={g.border} />
    </div>
    <div className={s.center}>
      <img className={s.image} src="considerations.png" />
    </div>
  </div>  
  );
};

export default Consideration;

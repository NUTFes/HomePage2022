import React, {FC} from "react";
import s from './Map.module.css'
import g from '../../../assets/globals.module.css'

const Map: FC =() => {
  return (
  <div>
    <div className={s.titleContainer}>
      <span className={g.border} />
      <div className={g.bigfont1}>Campus Map</div>
      <div className={g.bigfont2}>校内マップ</div>
      <span className={g.border} />
    </div>
    <img className={s.image} src="Map.png" />
  </div>  
  );
};

export default Map;

import React, {FC} from "react";
import s from './Event_title.module.css';
import g from '../../../assets/globals.module.css';


const Event_title: FC = () => {
  return (
    <div className={s.titleContainer}>
      <span className={g.border}/>
      <div className={g.bigfont1}>
        Event information
      </div>
      <div className={g.bigfont2}>
        技大祭企画情報
      </div>
      <span className={g.border}/>
    </div>
  );
};

export default Event_title;
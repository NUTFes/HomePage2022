import React, {FC} from "react";
import s from './Event_title.module.css';
import g from '../../../assets/globals.module.css';


const Event_title: FC = () => {
  return (
    <div className={s.titleContainer}>
      <span className={s.border}/>
      <div className={s.font1}>
        Event information
      </div>
      <div className={s.font2}>
        技大祭企画情報
      </div>
      <span className={s.border}/>
    </div>
  );
};

export default Event_title;
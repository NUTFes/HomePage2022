import React, {FC} from "react";
import s from './Event_card.module.css';
import g from '../../../assets/globals.module.css';

const Event_card: FC = () => {
  return (
    <div className={s.center}>
      <div className={g.card} >
      </div>
    </div>
  );
};

export default Event_card;
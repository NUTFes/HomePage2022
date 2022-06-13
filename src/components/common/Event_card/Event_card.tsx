import React, {FC} from "react";
import s from './Event_card.module.css';
import g from '../../../assets/globals.module.css';

const Event_card: FC = () => {
  return (
    <div className={s.center}>
      <div className={g.card}>
        <div className={s.center}>
          <p className={g.bigfont1}>
            麻雀、ポーカー、ゲーム大会、<br/>学籍番号抽選会
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event_card;
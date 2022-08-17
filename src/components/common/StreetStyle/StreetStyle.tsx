import React, {FC} from "react";
import s from "./StreetStyle.module.css"
import g from '../../../assets/globals.module.css';

const StreetStyle: FC = () => {
  return(
    <div className={g.center1}>
      <div className={g.card}>
        <div className={g.box1}>
          <p className={g.bigfont1}>Street Style</p>
          <div className={g.column}><span className={g.border1}/>
            <div className={g.triangle}></div><div className={g.span}></div> 
            <span className={g.border3}/>
          </div>
        </div>
        <div className={g.center2}>
          <img className={s.image} src ="StreetStyle.png"/>
          <div className={g.box2}>
            <div className={g.middlefont1}>
              <p className={g.lineHeight}>
              本日はStreet Style showcaseにご来場いただき、<br/>
              誠にありがとうございます。<br/>
              ご来場の皆さまへお願いがございます。<br/>
              公演中の声援はご遠慮ください。<br/>
              拍手や身振り手振りでの応援をよろしくお願いいたします。<br/>
              また、公演の妨げとなりますので、腕時計のアラーム設定<br/>
              の解除、携帯電話はマナーモードに設定していただくようお願いいたします。開演は12:00を予定しています。<br/>
              様々なジャンルのパフォーマンスを詰め込んだ<br/>
              ショーケースをお楽しみください！<br/>
              では開演まで今しばらくお待ちください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreetStyle;
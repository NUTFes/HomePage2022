import React, { FC, useEffect, useState } from "react";
import YouTube from "react-youtube";
import s from "./Live.module.css"
import g from '../../../assets/globals.module.css';

const Live: FC = () => {
  const liveList =
    [
      { title: "1日目 D講義室 ライブ配信", videoId: '_xl90aQIMYA' },
      { title: "1日目 A講義室 ライブ配信", videoId: "esypa-Yxopk" },
      { title: "2日目 D講義室 ライブ配信", videoId: "9B2MGGQ2Z78" },
      { title: "1日目 体育館 午前の部 ライブ配信", videoId: "RbY10F3Vcwc" },
      { title: "1日目 体育館 午後の部 ライブ配信", videoId: "uuDH2jyeTT4" },
      { title: "2日目 体育館 午前の部  ライブ配信", videoId: "xQq-ch8d9PE" },
      { title: "2日目 体育館 午後の部 ライブ配信", videoId: "m-udIeCFzeA" },
    ]

  const [isPC, setIsPC] = useState(true);

  useEffect(() => {
    if (window) {
      // Judge PC or SP
      if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
        setIsPC(false);
      } else {
        setIsPC(true);
      }
    }
  }, [])

  return (
    <>
      {liveList.map((live) => (
        <div className={s.live_list} key={live.title}>
          <div className={g.center1}>
            <div className={g.card}>
              <div className={g.box1}>
                <p className={s.bigfont1}>{live.title}</p>
                <div className={g.column}><span className={g.border1} />
                  <div className={g.triangle}></div><div className={g.span}></div>
                  <span className={g.border3} />
                </div>
              </div>
              <div className={g.center2}>
                <div className={g.box2}>
                  <div className={g.middlefont1}>
                    {isPC ? (
                      <YouTube videoId={live.videoId} className={s.youtube} />
                    ) : (
                      <YouTube videoId={live.videoId} iframeClassName={s.youtube} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </>
  );
};

export default Live;
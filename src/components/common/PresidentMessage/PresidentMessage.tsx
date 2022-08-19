import React, {FC} from "react";
import g from '../../../assets/globals.module.css';
import s from './PresidentMessage.module.css'


const PresidentMessage: FC =() => {
  return(
    <div id='stickee' className={g.center1}>
    <div className={g.card}>
      <div className={g.box1}>
        <p className={g.bigfont1}>学長挨拶</p>
        {<div className={g.column}><span className={g.border1}/>
          <div className={g.triangle}></div><div className={g.span}></div> 
          <span className={g.border3}/>
        </div>}
      </div>
      <div className={g.center2}>
        <img className={s.image} src="president.jpg" />
        <div className={g.box2}>
          <div className={g.middlefont1}>
            <p className={s.lineHeight} >
              長岡技術科学大学　学長　鎌土重晴<br/>
              技大祭へようこそ。頑張る学生に激励を！<br/>
              　今回で41回目を迎える技大祭へ、ようこそ！<br/>
              　これまで地域の方々にも大勢お出でいただき、市民との交流も盛んになりま
              したこと大変嬉しく思っています。昨年度は、学生からの開催に向けた熱い思
              いと新しい生活様式に沿ったコロナ感染対策を講じることで、オンラインを含
              めて開催しました。今年度もコロナ感染拡大が継続している状況ではあります
              が、昨年以上にコロナ対策を徹底しながら、昨年とほぼ同様に行うこととしま
              した。
              　今年度の技大祭実行委員会が掲げたテーマは「輪（わ、車輪のように進むも
              意味する）」です。コロナ禍であっても、技大祭を通して、学生同士の繋がり
              や、学生と外部の方との交流のきっかけを作り、「人の輪（コミュニティ）」
              まで進歩・発展させたいとの思いが込められています。
              本年は、技大祭を紹介できるドキュメンタリー風動画を編集し、技大祭開催
              後に外部の方にも公開する予定です。また、技大祭の中で、本学の紹介を兼ね
              たヒーローショーを公演し、その撮影動画をYouTubeで配信します。これらに
              より、外部の方も、本学の特色や、学生の和太鼓、吹奏楽、ダンスを中心とし
              たパフォーマンス、留学生を中心とした特色ある催し物を視聴できます。これ
              らをきっかけとして、学生と外部の方との交流が生まれることを期待します。
              学生諸君の元気で活気あふれる姿を是非ご覧いただきまして、エネルギッシ
              ュで躍動する姿や、その奮闘ぶりに対しまして、ご声援、多くのメッセージを
              お寄せいただければと思います。今後の学生生活のモチベーション高揚にも繋
              がります。よろしくお願いします。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PresidentMessage;
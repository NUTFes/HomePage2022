import React, {FC} from "react";
import g from '../../../assets/globals.module.css';
import s from './ChairmanMessage.module.css'


const ChairmanMessage: FC =() => {
  return(
    <div id='stickee' className={g.center1}>
    <div className={g.card}>
      <div className={g.box1}>
        <p className={g.bigfont1}>委員長挨拶</p>
        {<div className={g.column}><span className={g.border1}/>
          <div className={g.triangle}></div><div className={g.span}></div> 
          <span className={g.border3}/>
        </div>}
      </div>
      <div className={g.center2}>
        <img className={s.image} src="nakai.JPG" />
        <div className={g.box2}>
          <div className={g.middlefont1}>
            <p className={s.lineHeight} >
            こんにちは!第41回技大祭実行委員会委員長を
            務めております。電気電子情報工学課程4年の
            中井温人です。<br/>
            今回の技大祭のテーマは「輪（わ）」です！
            疫病によって薄くなってしまった人と人とのつながりを強め、
            「人の輪」を作る技大祭にしたい。
            また、より良い技大祭へと
            前進していきたいという思いを込めて、「輪」というテーマとしました。<br/>
            昨年度に引き続き、本年度も、長岡技大現地で行う
            オフラインでの開催と、インターネット配信を利用した
            オンラインでの開催を並行して行います。<br/>
            しかし、オフラインでの開催は、コロナウイルス感染防止のため、
            技大生・技大職員のみの参加となってしまいました。
            一般の方々は長岡技大には来場せず、オンラインでご来場頂くようお願いいたします。
            オフラインでは、技大祭実行委員会による企画や、各サークルの発表・展示などにご参加頂けます。<br/>
            また、オンラインでは、長岡技大のサークルや留学生などによるステージ発表などをインターネット上で配信致します。<br/>
            さらに、技大祭を紹介するドキュメンタリー動画を後日配信する予定です。<br/>
            私たち技大祭実行委員会一同は第41回技大祭を、参加してくださる技大生・技大職員・一般の皆様など全ての方々に楽しんでいただけるイベントを用意しています。<br/>
            多くの皆様のご来場を、心よりお待ちしております！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ChairmanMessage;
import React, {FC} from "react";
import s from "./GroupInfo.module.css"
import g from '../../../assets/globals.module.css';

const GroupInfo: FC = () => {
  const groupInfoList = 
  [
    {title: "悠久太鼓愛好会鶴亀会", image:"YukyuDrum.png", content: "技大祭＝和太鼓演奏。毎年恒例の演奏を、あなたの耳で目で体で体験してみてください！"},
    {title: "長岡技術科学大学合唱サークル", image:"group_courus.jpg", content: "私たちのハーモニーをぜひ聞いてください！"},
    {title: "Street Style", image:"StreetStyle.png", content: "Let’s experience the Sri Lankan traditional fusion dancing!"},
    {title: "Technical Education Circle", image:"TEC.png", content: "ダイラタンシー流体の上を走って、賞金ゲット!! 流体の上で、どれだけの時間足踏みできるかを競います。上位三名は、Amazonギフト券をプレゼント!! 様々な実験ショーもしますので、ぜひお越しください。"},
    {title: "無線部", image:"musenbu.png", content: "無線おえかき！光通信！音響通信！様々な無線通信をわかりやすい制作物で解説します！！ぜひお越しください！"},
    {title: "化学のおもちゃ箱", image:"chemistry_toy.jpg", content: "大人も楽しめる理科実験が体験できます！ぜひお越しください！"},
    {title: "しゅがく", image:"syugaku.png", content: "酒瓶・酒造りの工程を展示しています。あなたにぴったりの日本酒が見つかるかも…？"},
    {title: "Thai students", image:"Thai.jpg", content: "Thai goods & Spices.Sawasdee shop, Service with smile, Good bye with love."},
    {title: "Sri Lanka", image:"sriLanka.png", content: "Let’s experience the Sri Lankan food culture!"},
    {title: "Mongolian student", image:"mongolian.png", content: "1. Musical performance 2. Dancing performance 3. Exhibition 4. National costume "},
    {title: "インドネシア留学生会", image:"indoneshia.png", content: "Pasar Budaya Indonesia means Indonesian cultural market. You will find a lot of interesting products based on hundreds of Indonesian cultures, ranging from spice products made originally from Indonesian lands to Indonesian local songs. Let’s celebrate our uniqueness and diversity in our booth!"},
    {title: "Madina", image:"Malaysia.png", content: "マレーシアの伝統的な服の展示会を開催します。興味がある方は是非お越しください。"},
    {title: "中国学友会", image:"china.png", content: "三国時代の智勇交わる攻城戦、智謀を展示が盛りだくさん！"},
    {title: "コーヒーサークル", image:"coffee.png", content: "技大祭初出店です！コーヒー豆を販売しています。ぜひお越しください！"},
    {title: "空撮ラボ", image:"aerial_lab.png", content: "空撮ラボではドローンで撮影した写真の展示やトイドローンの操縦体験を行っています。"},
    {title: "折り紙サークル", image:"origami.png", content: "作品展示や折り紙教室を行っています.ぜひ遊びに来てください！"},
    {title: "How to Art", image:"HowtoArt.png", content: "プラ板キーホルダー制作体験、部員の作品展示、販売など"},
    {title: "Mexico", image:"Mexico.png", content: "メキシコの中・南部の伝統的なダンスと世界中に有名なプロレスのパーフォーマンスを一緒に楽しみましょう！"},
    {title: "NUTソフトウェア", image:"mikunological.png", content: "ボーカロイドによるバーチャルライブを開催します!よろしくお願いします！"},
    {title: "Popular Music Club", image:"PMC.png", content: "ロック・JPOP・メタル・テクノなど…様々なジャンルのバンドが出演!PMCと好きな音楽を自由に楽しもう!!!"},
    {title: "VYSAN", image:"VYSAN.png", content: "We will sing and dance to our vietnamese song! Let's enjoy it together!"},
    {title: "実践空手道部", image:"karate.png", content: "空手の型を披露したり，板割や瓦割をします。迫力満点なので，是非ともお越しください！"},
    {title: "吹奏楽部", image:"brass_band.png", content: "吹奏楽部です。技大祭では誰もが聴いたことのあるディズニーの名曲や吹奏楽の定番曲である宝島を演奏します。ぜひお越しください！"},
  ]
  return(
    <>
      {groupInfoList.map((groupInfo) => (
        <div className={g.center1}>
          <div className={g.card}>
            <div className={g.box1}>
              <p className={s.bigfont1}>{groupInfo.title}</p>
              <div className={g.column}><span className={g.border1}/>
                <div className={g.triangle}></div><div className={g.span}></div> 
                <span className={g.border3}/>
              </div>
            </div>
            <div className={g.center2}>
              <img className={s.image} src ={groupInfo.image}/>
              <div className={g.box2}>
                <div className={g.middlefont1}>
                  <p className={g.lineHeight}>
                    {groupInfo.content}
                  </p>
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

export default GroupInfo;
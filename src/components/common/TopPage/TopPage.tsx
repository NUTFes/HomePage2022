import React, { FC, useState, useEffect } from "react";
import s from "./TopPage.module.css";
import TopImage from "../TopImage";
import TopImage2 from "../TopImage2";

const TopPage: FC = () => {
  // const [ imageSrc, setImageSrc ] = useState("/background1.jpg")
  // const imageList=[
  //   "/background1.jpg",
  //   "/background2.jpg",
  //   "/background3.jpg",
  //   "/background4.jpg",
  //   "/background5.jpg",
  //   "/background6.jpg",
  //   "/background7.jpg",
  //   "/background8.jpg",
  //   "/background9.jpg"
  // ]
  const [ random, setRandom ] = useState<number>(0)
  const imageHandler = () => {
    setRandom(Math.floor( Math.random() * 5 ))
    console.log("random:", random)
    // if(random == 0){
    //   setRandom(1);
    //   console.log("random:", random)
    // } 
    // else if(random == 1) {
    //   setRandom(0);
    //   console.log("random:", random)
    // }
  } 
  useEffect(() => { 
    setInterval(imageHandler,5000)
  },[]);
  const ImageContent = (random: number) => {
    console.log(random)
    if (random ==  0) {
      return (
        <>
          <TopImage imageSrc="/background1.jpg"/>
        </>
      )
    }
    else if (random ==  1) {
      return (
        <>
          <TopImage imageSrc="/background2.jpg"/>
        </>
      )
    }
    else if (random ==  2) {
      return (
        <>
          <TopImage imageSrc="/background3.jpg"/>
        </>
      )
    }
    else if (random ==  3) {
      return (
        <>
          <TopImage imageSrc="/background4.jpg"/>
        </>
      )
    }
    else if (random ==  4) {
      return (
        <>
          <TopImage imageSrc="/background5.jpg"/>
        </>
      )
    }
  }
  // useEffect(() => {
  //   const imageHandler = () => {
  //     let random = Math.floor( Math.random() * 9 );
  //     setImageSrc(imageList[random])
  //   }
  //   setInterval(imageHandler,5000)
  // },[]);
  return (
    <div className={s.conteinar}>
      <div className={s.background}>
	      {ImageContent(random)}
        <div className={s.title1}>
          <div>
           <p className={s.header1}>第41回</p>
            <span/>
          </div>
        </div>

        <div className={s.title2}>
          <div className={s.subtitle}>
            <p className={s.header2}>長岡技術科学大学</p>
            <span className={s.headerline2_1} />
          </div>
          <div>
            <p className={s.header3}>学校祭開催</p>
            <span className={s.headerline2_2} />
          </div>
        </div>
        <div className={s.box}>
          <div className={s.date}>
            2022. <span>9.10</span>(土)‣ <span>9.11</span>(日)
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;

import React, { FC, useEffect } from 'react';
import s from "./TopImage.module.css";

interface TopImageProps {
  imageSrc: string;
}
const TopImage: FC<TopImageProps> = (props) => {
  useEffect(() => {
    console.log(props)    
  })
  return(
    <>
    <img className={s.image} src={props.imageSrc} />
    </>
  
  )
}

export default TopImage;
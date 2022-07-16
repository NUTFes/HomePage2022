import React, { FC } from 'react';
import s from './Sns.module.css';

const Sns: FC = () => {
  return (
      <div className={s.snsContainer}>
        <div className={s.snsSubTitle}>
          Follow Us
        </div>
        <div className={s.snsLogo}>
          <a href='https://www.facebook.com/nutfes' className={s.snsLogoFacebook}><img src="/facebook.svg"/></a>
          <a href='https://twitter.com/nut_fes' className={s.snsLogoTwitter}><img src="/twitter.svg"/></a>
          <a href='https://www.instagram.com/nutfes/' className={s.snsLogoInstagram}><img src="/Instagram.svg"/></a>
        </div>
        <div className={s.snsButton}>
          <a className={s.span} href='#news'>お知らせ</a>
          <a className={s.span} href='#event'>技大祭企画</a>
          <a className={s.span} href='#group'>参加団体</a>
        </div>
      </div>
  );
};

export default Sns;
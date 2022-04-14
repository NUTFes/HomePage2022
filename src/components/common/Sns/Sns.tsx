import React, { FC } from 'react';
import s from './Sns.module.css';

const Sns: FC = () => {

  return (
    <section className={s.snsContainer}>
      <div>
        <div className={s.snsSubTitle}>
          Follow Us
        </div>
        <div className={s.snsLogo}>
          <a href='https://www.facebook.com/nutfes' className={s.snsLogoFacebook}><img src="/facebook.svg"/></a>
          <a href='https://twitter.com/nutfes_nutmeg' className={s.snsLogoTwitter}><img src="/twitter.svg"/></a>
          <a href='https://www.instagram.com/nutfes/' className={s.snsLogoInstagram}><img src="/Instagram.svg"/></a>
        </div>
        <div className={s.snsButton}>
          <a className={s.snsButtonGroup}>参加団体</a>
          <a className={s.snsButtonNext}>次回更新日</a>
          <a className={s.snsButtonAccess}>アクセス</a>
        </div>
      </div>
    </section>
  );
};

export default Sns;
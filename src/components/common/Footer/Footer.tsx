import React, { FC } from 'react';
import s from './Footer.module.css';

const Footer: FC = () => {
  return (
    <section className={s.footerContainer}>
      <footer>
        <div className={s.footerLinks}>
          <img src='/nutfeslogo_white.png'/> 
          <p>©第41回技大祭実行委員会</p>     
        </div>
      </footer>
    </section>
  );
};

export default Footer;
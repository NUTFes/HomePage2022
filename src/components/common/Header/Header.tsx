import React, { FC } from 'react';
import s from './Header.module.css';

const Header: FC = () => {

  return (
    <section className={s.headerContainer}>
      <header>
        <div className={s.headerLinks}>
          <button className={s.headerButton}><span/><span/>MENU</button>
        </div>
      </header>
    </section>
  );
};

export default Header;
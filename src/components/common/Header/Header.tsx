import React, { FC } from 'react';
import s from './Header.module.css';

const Header: FC = () => {

  return (
   <div>
      <div className={s.headerimg}>
        <img src='/newlogotype.svg'/ >
      </div>
    <div className={s.headerContainer}>
      <div className={s.headerLinks}>
        <button className={s.headerButton}><span/><span/>MENU</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
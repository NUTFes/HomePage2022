import React, { FC,useState } from 'react';
import s from './Header.module.css';
import Modal from '../Modal';

const Header: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = (isOpenModal: boolean) => {
    if (isOpenModal){
      return(
        <>
        {console.log("aasasa")}
        <Modal show={isOpenModal} setShow={setIsOpenModal} />
        </>
      )
    }
  }

return (
   <div className={s.topspan}>
      <div className={s.headerimg}>
        <img src='/newlogotype.svg'/ >
      </div>
      <div className={s.headerContainer}>
        <div className={s.headerLinks}>
        <button className={s.headerButton} onClick={() => setIsOpenModal(true)}><span/><span/>MENU
        
        </button>
        {openModal(isOpenModal)}
        </div>
      </div>
    </div>
  );
};

export default Header;
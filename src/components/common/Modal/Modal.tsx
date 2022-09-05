import React, { FC, useState } from 'react';
import s from './Modal.module.css';

interface ModalProps {
  show: boolean;
  setShow: any;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = (props) => {
  const [isCloseModal, setIsCloseModal] = useState(false);
  const closeModal = (isCloseModal: boolean) => {
    if (isCloseModal) {
      return (
        <>
          <Modal show={isCloseModal} setShow={setIsCloseModal} />
        </>
      )
    }
  }

  return (
    <div className={s.modalContainer}>
      <div className={s.modalInnerContainer}>
        <div className={s.modalContent}>
          <div>
            {/* <Close width={24} height={24} color={'var(--accent-4)'} /> */}
            <div className={s.modalContentClose} onClick={() => props.setShow(false)}>
              <button className={s.square_btn} ></button>
            </div>
          </div>
          {props.children}
          {/* pushする際には、本番用のリンクに変更する */}
          {closeModal(isCloseModal)}
          <a href={process.env.URL} className={s.modalIndex} onClick={() => props.setShow(false)} >トップページ</a>
          <a href='#news' className={s.modalSubIndex} onClick={() => props.setShow(false)}>お知らせ</a>
          <a href='#event' className={s.modalSubIndex} onClick={() => props.setShow(false)} >技大祭企画情報</a>
          <a href='#group' className={s.modalSubIndex} onClick={() => props.setShow(false)} >参加団体情報</a>
          <a href='#access' className={s.modalSubIndex} onClick={() => props.setShow(false)} >アクセス</a>
          <a href={process.env.URL + '/planning_infor'} className={s.modalIndex} onClick={() => props.setShow(false)} >企画情報</a>
          <a href={process.env.URL + '/planning_infor#stickee'} className={s.modalSubIndex} onClick={() => props.setShow(false)} >学籍番号抽選会</a>
          <a href={process.env.URL + '/planning_infor#poker'} className={s.modalSubIndex} onClick={() => props.setShow(false)} >ポーカー大会</a>
          <a href={process.env.URL + '/planning_infor#majan'} className={s.modalSubIndex} onClick={() => props.setShow(false)} >麻雀大会</a>
          <a href={process.env.URL + '/planning_infor#game'} className={s.modalSubIndex} onClick={() => props.setShow(false)} >ゲーム大会</a>
          <a href={process.env.URL + '/planning_infor#song'} className={s.modalSubIndex} onClick={() => props.setShow(false)} >カラオケ大会</a>
          <a href={process.env.URL + '/planning_infor#hero'} className={s.modalSubIndex} onClick={() => props.setShow(false)} >ギダイジャ―</a>
          <a href={process.env.URL + '/president_message'} className={s.modalIndex} onClick={() => props.setShow(false)} >代表挨拶</a>
          <a href={process.env.URL + '/president_message#president'} className={s.modalSubIndex} onClick={() => props.setShow(false)} >学長挨拶</a>
          <a href={process.env.URL + '/president_message#chairman'} className={s.modalSubIndex} onClick={() => props.setShow(false)} >委員長挨拶</a>
          <a href={process.env.URL + '/schedule_infor'} className={s.modalIndex} onClick={() => props.setShow(false)} >当日スケジュール</a>
          <a href={process.env.URL + '/map'} className={s.modalIndex} onClick={() => props.setShow(false)} >校内マップ</a>
          <a href={process.env.URL + '/consideration'} className={s.modalIndex} onClick={() => props.setShow(false)} >留意事項</a>
          <a href={process.env.URL + '/Sponsorship'} className={s.modalIndex} onClick={() => props.setShow(false)} >ご協賛・募金一覧</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

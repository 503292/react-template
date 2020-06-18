import React from 'react';

import Modal from '../../Modal/Modal';
import useModal from '../../Modal/useModal';

import css from './HeaderContent.module.scss';
import logo1 from '../../../assets/image/header/logo1.svg';

// import logo2 from "../../../assets/image/header/logo2.svg";
import slide1 from '../../../assets/image/header/slide-01.svg';
// import slide2 from "../../../assets/image/header/slide-02.svg";

import { ReactComponent as Phone } from '../../../assets/image/phone.svg';
import { ReactComponent as ArrowR } from '../../../assets/image/header/arrowR.svg';
import { ReactComponent as ArrowL } from '../../../assets/image/header/arrowL.svg';
import { ReactComponent as Circle } from '../../../assets/image/header/circle.svg';
import logoComfort from '../../../assets/image/header/logo-comfort-life.svg';

// const init = {
//   bgImg: '',
//   logoImg: '',
//   title: '',
//   description: '',
//   addres: '',
//   pageImg: '',
// };

const HeaderContent = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className={css.wrapContent}>
      <div className={css.topHeader}>
        <img className={css.logo} src={logo1} alt="top kogo" />
        <div className={css.wrapCall}>
          <Phone className={css.phoneIcon} />
          <div>
            <p className={css.phone}>8 (800) 77-512-77</p>
            <button onClick={toggle} className={css.btnCall} type="button">
              Заказать звонок
            </button>
            <Modal isShowing={isShowing} hide={toggle} />
          </div>
          <button className={css.btnLang} type="button">
            ua
          </button>
        </div>
      </div>
      <div className={css.centerHeader}>
        <img className={css.slide} src={slide1} alt="slide" />
        <div className={css.wrapCenter}>
          <p className={css.description}>Жилой комплекс КЛАБ РЕЗИДЕНС</p>
          <h3 className={css.title}>Квартиры уже в продаже!</h3>
          <button className={css.aboutBtn} type="button">
            О КОМПЛЕКСЕ
          </button>
          <div className={css.wrapArrows}>
            <Circle /> <Circle /> <ArrowL /> <ArrowR />
          </div>

          <div className={css.bottomHeader}>
            <p className={css.adress}>Киев, переулок Радистов, 14а</p>
            <p className={css.subway}>Лесная</p>
          </div>
        </div>
      </div>
      <img className={css.logoComfort} src={logoComfort} alt="logo comfort" />
    </div>
  );
};

export default HeaderContent;

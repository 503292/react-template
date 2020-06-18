import React from 'react';
import css from './HeaderContent.module.scss';
import logo1 from '../../../assets/image/logo1.svg';
// import logo2 from "../../../assets/image/logo2.svg";

import { ReactComponent as Phone } from '../../../assets/image/phone.svg';

const HeaderContent = () => {
  return (
    <div className={css.wrapContent}>
      <div className={css.topHeader}>
        <img className={css.logo} src={logo1} alt="top kogo" />
        <div className={css.wrapCall}>
          <Phone className={css.phoneIcon} />
          <div>
            <p className={css.phone}>8 (800) 77-512-77</p>
            <button className={css.btnCall} type="button">
              Заказать звонок
            </button>
          </div>

          <button className={css.btnLang} type="button">
            ua
          </button>
        </div>
      </div>
      <div className={css.centerHeader}>w</div>
      <div className={css.bottomHeader}>w</div>
    </div>
  );
};

export default HeaderContent;

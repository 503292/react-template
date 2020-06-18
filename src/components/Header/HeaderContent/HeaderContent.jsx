import React from 'react';
import css from './HeaderContent.module.scss';
import logo1 from '../../../assets/image/logo1.svg';
// import logo2 from "../../../assets/image/logo2.svg";

const HeaderContent = () => {
  return (
    <div className={css.wrapContent}>
      <div className={css.topHeader}>
        <img className={css.logo} src={logo1} alt="top kogo" />
        <div>
          {/* <button type="button" className={css.btnPhone}>
            tel
          </button> */}

          <p className={css.phone}>8 (800) 77-512-77</p>
          <button className={css.btnCall} type="button">Заказать звонок</button>

          {/* <button type="button" className={css.btnLang}>
            UA
          </button> */}
        </div>
      </div>
      <div className={css.centerHeader}>w</div>
      <div className={css.bottomHeader}>w</div>
    </div>
  );
};

export default HeaderContent;

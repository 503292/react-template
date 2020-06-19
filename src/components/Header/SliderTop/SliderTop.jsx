import React, { useState, useRef } from 'react';
import Modal from '../../Modal/Modal';
import useModal from '../../Modal/useModal';

import css from './SliderTop.module.scss';

import bg1 from '../../../assets/image/bg/header-bg1.jpg';
import bg2 from '../../../assets/image/bg/header-bg2.jpg';
import logo1 from '../../../assets/image/header/logo1.svg';
import logo2 from '../../../assets/image/header/logo2.svg';
import slide1 from '../../../assets/image/header/slide-01.svg';
import slide2 from '../../../assets/image/header/slide-02.svg';

import { ReactComponent as Phone } from '../../../assets/image/phone.svg';
import { ReactComponent as ArrowR } from '../../../assets/image/header/arrowR.svg';
import { ReactComponent as ArrowL } from '../../../assets/image/header/arrowL.svg';
import { ReactComponent as Circle } from '../../../assets/image/header/circle.svg';
import logoComfort from '../../../assets/image/header/logo-comfort-life.svg';

const pages = [
  {
    bgImg: bg1,
    logoImg: logo1,
    title: 'Квартиры уже в продаже!',
    description: 'Жилой комплекс КЛАБ РЕЗИДЕНС',
    address: 'Киев, переулок Радистов, 14а',
    sliderImg: slide1,
  },
  {
    bgImg: bg2,
    logoImg: logo2,
    title: 'Это две строчки текста на семь слов',
    description: 'Жилой комплекс КЛУБНЫЙ ДОМ',
    address: 'Киев, переулок Радистов, 40',
    sliderImg: slide2,
  },
];

const SliderTop = () => {
  const refTitle = useRef(0);
  const { isShowing, toggle } = useModal();
  const [numPage, setNumPage] = useState(0);

  // change Length Title block helper

  const verifyLength = id => {
    const titleLength = pages[id].title.length;

    if (titleLength > 24) {
      refTitle.current.style.width = '540px';
    }
  };

  // Circle handler
  const handleCircle = id => {
    verifyLength(id);

    setNumPage(id);
  };

  // Arrow handlers

  const hendleArrowL = () => {
    const pageLength = pages.length;
    if (numPage === 0) {
      verifyLength(pageLength - 1);
      setNumPage(pageLength - 1);
    } else {
      verifyLength(numPage - 1);
      setNumPage(numPage - 1);
    }
  };

  const hendleArrowR = () => {
    const pageLength = pages.length;

    if (pageLength - 1 === numPage) {
      verifyLength(0);
      setNumPage(0);
    } else {
      verifyLength(numPage + 1);
      setNumPage(numPage + 1);
    }
  };

  return (
    <div className={css.wrapSlider}>
      <img className={css.bgImg} src={pages[numPage].bgImg} alt="bgImage" />

      <div className={css.wrapContent}>
        <div className={css.topHeader}>
          <img
            className={css.logo}
            src={pages[numPage].logoImg}
            alt="top logo"
          />
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
          <img
            className={css.slide}
            src={pages[numPage].sliderImg}
            alt="slide"
          />
          <div className={css.wrapCenter}>
            <p className={css.description}>{pages[numPage].description}</p>
            <h3 ref={refTitle} className={css.title}>
              {pages[numPage].title}
            </h3>
            <button className={css.aboutBtn} type="button">
              О КОМПЛЕКСЕ
            </button>
            <div className={css.wrapСontrol}>
              {pages.map((el, index) => (
                <button
                  type="button"
                  key={el.title}
                  onClick={() => handleCircle(index)}
                >
                  <Circle />
                </button>
              ))}

              <button type="button" onClick={() => hendleArrowL()}>
                <ArrowL />
              </button>
              <button type="button" onClick={() => hendleArrowR()}>
                <ArrowR />
              </button>
            </div>

            <div className={css.bottomHeader}>
              <p className={css.address}>{pages[numPage].address}</p>
              <p className={css.subway}>Лесная</p>
            </div>
          </div>
        </div>
        <img className={css.logoComfort} src={logoComfort} alt="logo comfort" />
      </div>
    </div>
  );
};

export default SliderTop;

import React, { useState, useEffect } from 'react';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import cn from 'classnames';
import css from './Plans.module.scss';

import apartaments from './apartments';

const Plans = () => {
  const [statusBtn, setStatusBtn] = useState('1');
  const [selectApartament, setSelectApartament] = useState(apartaments[0]);
  const [valueCarousel, setValueCarousel] = useState(0);
  const [info, setInfo] = useState(
    apartaments[statusBtn - 1].descr[valueCarousel],
  );

  const getOneCarousel = () => {
    const oneApartament = apartaments[statusBtn - 1];
    setSelectApartament(oneApartament);
    return oneApartament;
  };

  useEffect(() => {
    getOneCarousel();
    // setValueCarousel(0);
  });

  // useEffect(() => {
  //   setValueCarousel(0);
  // }, [statusBtn]);
  useEffect(() => {
    // console.log(valueCarousel, 'valueCarousel');
    setInfo(apartaments[statusBtn - 1].descr[valueCarousel]);
  }, [valueCarousel, statusBtn]);

  const handlerClickRooms = e => {
    e.preventDefault();
    const id = e.currentTarget.attributes.indx.nodeValue;
    setStatusBtn(id);
  };

  const handlerChangeValue = val => {
    setValueCarousel(val);
  };

  const getSquareForDots = () => {
    const dots = [];
    selectApartament.descr.map(s => dots.push(s.squareAll));
    return dots;
  };

  // const getInfo = () => {
  //   selectApartament.descr.find(s => {
  //     setValueCarousel(valueCarousel + 1);
  //     console.log(+s.id);
  //     if (valueCarousel == s.id) {
  //       console.log('fff');
  //       return <p key={s.squareAll}>{s.squareAll}</p>;
  //     }
  //   });
  // };

  return (
    <div className={css.wrapPlans}>
      <ul className={css.tabs}>
        {/*  eslint-disable-next-line react/prop-types */}
        {apartaments.map(el => (
          <li key={el.id}>
            <button
              indx={el.id}
              className={cn(
                css.tabBtn,
                statusBtn === el.id && css.tabBtn_active,
              )}
              type="button"
              onClick={handlerClickRooms}
            >
              {el.name}
            </button>
            {statusBtn === el.id && (
              <Dots
                number={el.descr.length}
                thumbnails={getSquareForDots()}
                value={valueCarousel}
                onChange={handlerChangeValue}
                className={css.dotsText}
              />
            )}
          </li>
        ))}
      </ul>
      <div className={css.containerPlans}>
        <div className={css.wrapCalousel}>
          <Carousel
            value={valueCarousel}
            slidesPerPage={1}
            className={css.carousel}
          >
            {selectApartament.descr.map(el => (
              <img
                className={css.bigFoto}
                key={el.id}
                alt={el.squareAll}
                src={el.img}
              />
            ))}
          </Carousel>
        </div>
        <div className={css.wrapInfo}>
          <div className={css.wrapInfoApartments}>
            <h4>Квартира {info.squareAll}м2</h4>
            <div className={css.wrapDescr}>
              <ul className={css.descrList}>
                <li>
                  <p> Будинок</p>
                  <p>{info.buildNumber}</p>
                </li>
                <li>
                  <p> Поверх</p>
                  <p>{info.floor}</p>
                </li>
                <li>
                  <p> Житлова площа</p>
                  <p>{info.squareLive}м2</p>
                </li>
                <li>
                  <p> Загальна площа</p>
                  <p>{info.squareAll}м2</p>
                </li>
              </ul>
              <ul className={css.descrList}>
                <li>
                  <p> Спальня</p>
                  <p>{info.bedroom}м2</p>
                </li>
                <li>
                  <p> Кухня</p>
                  <p>{info.kitchen}м2</p>
                </li>
                <li>
                  <p>Передпокій</p>
                  <p>{info.hall}м2</p>
                </li>
                <li>
                  <p>Санвузол</p>
                  <p>{info.wc}м2</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={css.wrapContacts}>contacts</div>
          <div className={css.wrapDots}>dots</div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

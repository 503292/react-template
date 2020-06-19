import React, { Component } from 'react';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { ReactComponent as ArrowL } from '../../assets/image/header/arrowL.svg';
import { ReactComponent as ArrowR } from '../../assets/image/header/arrowR.svg';

import nextFoto from '../../assets/image/gallary/next-foto.png';
import topFoto from '../../assets/image/gallary/bg-gallary.png';

import css from './Gallary.module.scss';

// const imageOne =
//   'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg';
// const imageTwo =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaI53zIjVCmIWLcM341j3dnjVTOK-ypoBARIT8qZMLGi8IDuua&usqp=CAU';
// const imageThree =
//   'https://www.zenit.photo/upload/iblock/260/foto_aleksey_lukyanenko_zenitar_16.jpg';

class Gallary extends Component {
  state = {
    value: 0,
    slides: [
      <img src={topFoto} key="1" alt="randomImage" />,
      <img src={topFoto} key="2" alt="randomImage" />,
      <img src={topFoto} key="3" alt="randomImage" />,
      <img src={topFoto} key="4" alt="randomImage" />,
      <img src={topFoto} key="5" alt="randomImage" />,
    ],
    thumbnails: [
      <img src={topFoto} key="1" alt="randomImage" />,
      <img src={topFoto} key="2" alt="randomImage" />,
      <img src={topFoto} key="3" alt="randomImage" />,
      <img src={topFoto} key="4" alt="randomImage" />,
      <img src={topFoto} key="5" alt="randomImage" />,
    ],
    isActiveBtn: true,
  };

  onChange = value => this.setState({ value });

  onClickBtn = e => {
    e.preventDefault();
    const { isActiveBtn } = this.state;
    this.setState({ isActiveBtn: !isActiveBtn });
  };

  render() {
    const { value, slides, thumbnails, isActiveBtn } = this.state;

    return (
      <section className={css.wpapGallary}>
        <div className={css.leftBar}>f</div>

        <Carousel
          className={css.carousel}
          value={value}
          onChange={this.onChange}
        >
          {/* {settings.slides.map(el => )} */}
          <img src={topFoto} className={css.carouselImg} alt="randomImage" />
          <img src={topFoto} className={css.carouselImg} alt="randomImage" />
          <img src={topFoto} className={css.carouselImg} alt="randomImage" />
          <img src={topFoto} className={css.carouselImg} alt="randomImage" />
          <img src={topFoto} className={css.carouselImg} alt="randomImage" />
        </Carousel>
        <Dots
          number={thumbnails.length}
          thumbnails={thumbnails}
          value={value}
          onChange={this.onChange}
          className={css.thumbnails}
        />

        <Dots
          value={value}
          onChange={this.onChange}
          number={slides.length}
          className={css.dots}
        />

        <div className={css.wrapControls}>
          <div>
            <button
              onClick={this.onClickBtn}
              type="button"
              className={
                isActiveBtn
                  ? `${css.switchBtn} ${css.active}`
                  : `${css.switchBtn}`
              }
              active={isActiveBtn}
            >
              КЛУБНЫЙ ДОМ
            </button>
            <button
              onClick={this.onClickBtn}
              type="button"
              className={
                !isActiveBtn
                  ? `${css.switchBtn} ${css.active}`
                  : `${css.switchBtn}`
              }
            >
              КЛАБ РЕЗИДЕНС
            </button>
            <div className={css.wrapArrows}>
              <ArrowL />
              <ArrowR />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallary;

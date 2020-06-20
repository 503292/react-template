import React, { Component } from 'react';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { ReactComponent as ArrowL } from '../../assets/image/header/arrowL.svg';
import { ReactComponent as ArrowR } from '../../assets/image/header/arrowR.svg';
import { ReactComponent as ArrowTop } from '../../assets/image/arrowTop.svg';
import { ReactComponent as ArrowBottom } from '../../assets/image/arrowBottom.svg';

import topFoto from '../../assets/image/gallary/bg-gallary.png';
import gallaryMenu from '../../assets/image/gallary/gallary-menu.svg';
import tree from '../../assets/image/gallary/green-tree.png';

import css from './Gallary.module.scss';

const initialState = [
  <img src={topFoto} key="1" className={css.carouselImg} alt="randomImage" />,
  <img src={topFoto} key="2" className={css.carouselImg} alt="randomImage" />,
  <img src={topFoto} key="3" className={css.carouselImg} alt="randomImage" />,
  <img src={topFoto} key="4" className={css.carouselImg} alt="randomImage" />,
  <img src={topFoto} key="5" className={css.carouselImg} alt="randomImage" />,
];

class Gallary extends Component {
  state = {
    value: 0,
    slides: initialState,
    thumbnails: initialState,
    isActiveBtn: true,
  };

  onChange = value => this.setState({ value });

  onClickBtn = e => {
    e.preventDefault();
    const { isActiveBtn } = this.state;
    this.setState({ isActiveBtn: !isActiveBtn });
  };

  hendleArrowL = () => {
    const { slides, value } = this.state;
    const slideLength = slides.length;
    if (value === 0) {
      this.setState({ value: slideLength - 1 });
    } else {
      this.setState(prev => ({
        value: prev.value - 1,
      }));
    }
  };

  hendleArrowR = () => {
    const { slides, value } = this.state;
    const slideLength = slides.length;
    if (slideLength - 1 === value) {
      this.setState({ value: 0 });
    } else {
      this.setState(prev => ({
        value: prev.value + 1,
      }));
    }
  };

  render() {
    const { value, slides, thumbnails, isActiveBtn } = this.state;

    return (
      <section className={css.wpapGallary}>
        <div className={css.leftBar}>
          <div className={css.wrapGallaryMenu}>
            <img src={gallaryMenu} alt="gallaryMenu" />
            <a href="#header">
              <ArrowTop className={css.arrowTop} />
            </a>

            <a href="#planning">
              <ArrowBottom className={css.arrowBottom} />
            </a>
          </div>
          <p>ГАЛЕРЕЯ</p>
          <img className={css.tree} src={tree} alt="gallaryMenu" />
        </div>

        <Carousel
          className={css.carousel}
          value={value}
          onChange={this.onChange}
        >
          {slides.map(el => el)}
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
              active={isActiveBtn.toString()}
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
              <button type="button" onClick={() => this.hendleArrowL()}>
                <ArrowL />
              </button>
              <button type="button" onClick={() => this.hendleArrowR()}>
                <ArrowR />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallary;

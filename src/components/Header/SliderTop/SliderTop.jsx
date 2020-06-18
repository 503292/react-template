import React from 'react';

import HeaderContent from '../HeaderContent/HeaderContent';

import css from './SliderTop.module.scss';

import bg1 from '../../../assets/image/bg/header-bg1.jpg';
// import bg2 from '../../../assets/image/bg/header-bg2.jpg';

const SliderTop = () => {
  return (
    <div className={css.wrapSlider}>
      <img className={css.img} src={bg1} alt="bg" />
      <HeaderContent />
    </div>
  );
};

export default SliderTop;

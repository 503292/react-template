import React, { Component } from 'react';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { ReactComponent as ArrowL } from '../../assets/image/header/arrowL.svg';
import { ReactComponent as ArrowR } from '../../assets/image/header/arrowR.svg';

import css from './Gallary.module.scss';

const imageOne =
  'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg';
const imageTwo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaI53zIjVCmIWLcM341j3dnjVTOK-ypoBARIT8qZMLGi8IDuua&usqp=CAU';
const imageThree =
  'https://www.zenit.photo/upload/iblock/260/foto_aleksey_lukyanenko_zenitar_16.jpg';

// const settings = {
//   slides: [
//     <img src={imageOne} />,
//     <img src={imageTwo} />,
//     <img src={imageThree} />,
//   ],
// };

class Gallary extends Component {
  state = {
    value: 0,
    slides: [
      <img src={imageOne} />,
      <img src={imageTwo} />,
      <img src={imageThree} />,
    ],
    thumbnails: [
      <img src={imageOne} />,
      <img src={imageTwo} />,
      <img src={imageThree} />,
    ],
  };

  onChange = value => this.setState({ value });

  render() {
    const { value, slides, thumbnails } = this.state;

    return (
      <section className={css.wpapGallary}>
        <div className={css.leftBar}>f</div>

        <Carousel
          className={css.carousel}
          value={value}
          onChange={this.onChange}
        >
          {/* {settings.slides.map(el => )} */}
          <img src={imageOne} className={css.carouselImg} alt="randomImage" />
          <img src={imageTwo} className={css.carouselImg} alt="randomImage" />
          <img src={imageThree} className={css.carouselImg} alt="randomImage" />
        </Carousel>
        <Dots
          number={thumbnails.length}
          thumbnails={thumbnails}
          value={value}
          onChange={this.onChange}
          className={css.thumbnails}
        />
        {/* <div> */}
        <Dots
          value={value}
          onChange={this.onChange}
          number={slides.length}
          className={css.dots}
        />
        {/* </div> */}
      </section>
    );
  }
}

export default Gallary;

// const Gallary = () => {
//   const [value, setValue] = useState(0);

//   const handlerChange = val => {
//     setValue(val);
//     console.log(val);
//   };

//   return (
// <section className={css.wpapGallary}>
//   <div className={css.leftBar}>f</div>
//   <Carousel className={css.carousel}>
//     {/* {settings.slides.map(el => )} */}
//     <img src={imageOne} className={css.carouselImg} alt="randomImage" />
//     <img src={imageTwo} className={css.carouselImg} alt="randomImage" />
//     <img src={imageThree} className={css.carouselImg} alt="randomImage" />
//   </Carousel>

//   <Dots
//     value={value}
//     onChange={() => handlerChange(value)}
//     number={settings.slides.length}
//     className={css.dots}
//   />
// </section>
//   );
// };

// export default Gallary;

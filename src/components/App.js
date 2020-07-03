import React from 'react';
import SliderTop from './SliderTop/SliderTop';
import Gallary from './Gallary/Gallary';
import Planning from './Planning/Planning';
import Documents from './Documents/Documents';
// import Footer from './Footer/Footer';
import css from './App.module.scss';

const App = () => {
  return (
    <>
      <header id="header">
        <SliderTop />
      </header>
      <main>
        <Gallary id="gallary" />
        <div className={css.wrapPlaningAndDocument}>
          <Planning id="planning" />
          <Documents id="documents" />
        </div>
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};
export default App;

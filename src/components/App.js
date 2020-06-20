import React from 'react';
import SliderTop from './Header/SliderTop/SliderTop';
import Gallary from './Gallary/Gallary';
// import Planning from './Planning/Planning';
// import Documents from './Documents/Documents';
// import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
      <header id="header">
        <SliderTop />
      </header>
      <main>
        <Gallary id="gallary" />
      </main>

      {/* <Planning id="planning"/> */}
      {/* <Documents id="documents"/> */}
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};
export default App;

import React from 'react';

import Footer from './Footer/Footer';
import css from './App.module.scss';

const App = () => {
  return (
    <>
      <header id="header">header</header>
      <main>main</main>

      <footer className={css.footer}>
        <Footer />
      </footer>
    </>
  );
};
export default App;

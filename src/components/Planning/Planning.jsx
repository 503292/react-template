import React from 'react';
import TabsPlanning from './TabsPlanning/TabsPlanning';

import css from './Planning.module.scss';
import { ReactComponent as ArrowTop } from '../../assets/image/arrowTop.svg';
import { ReactComponent as ArrowBottom } from '../../assets/image/arrowBottom.svg';
import planningMenu from '../../assets/image/planning/planning-menu.svg';

const Planning = () => {
  return (
    <section className={css.wrapPlanning}>
      <div className={css.leftBar}>
        <div className={css.wrapPlaningMenu}>
          <img src={planningMenu} alt="gallaryMenu" />
          <a href="#gallary">
            <ArrowTop className={css.arrowTop} />
          </a>
          <a href="#documents">
            <ArrowBottom className={css.arrowBottom} />
          </a>
        </div>
        <p>ПЛАНИРОВКИ</p>
      </div>
      <TabsPlanning />
    </section>
  );
};

export default Planning;

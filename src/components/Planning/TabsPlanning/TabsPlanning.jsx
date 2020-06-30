import React from 'react';

import Tabs from './Plans';

import css from './TabsPlanning.module.scss';

const TabsPlanning = () => {
  return (
    <div className={css.wrapTabsPlanning}>
      <h3 className={css.title}>Планировки</h3>
      <div className={css.wrapTabs}>
        <Tabs />
      </div>
    </div>
  );
};

export default TabsPlanning;

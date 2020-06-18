import React from 'react';
import css from './OrderCallForm.module.scss';
import bgForm from '../../../assets/image/gallary/bg-gallary.png';

const OrderCallForm = () => {
  return (
    <div className={css.wrapForm}>
      <form className={css.form}>
        <h3 className={css.title}>Заказать звонок</h3>
        <p>Имя:*</p>
        <input
          className={css.inputName}
          type="text"
          name="text"
          //   value={text}
          required
        />
        <p>Телефон:*</p>
        <input className={css.inputPhone} type="tel" name="phone" required />

        <button className={css.sendBtn} type="submit">
          Отправить
        </button>
      </form>
      <div className={css.bgImage}>
        <img src={bgForm} alt="bg form" />
      </div>
    </div>
  );
};

export default OrderCallForm;

import React, { Component } from 'react';
import shortid from 'shortid';
import s from './ModalCreateGoal.module.css';

const idForInputGoal = shortid.generate();
const idForInputPoints = shortid.generate();

class ModalCreateGoal extends Component {
  state = {};

  render() {
    return (
      <div className={s.modal}>
        <form className={s.form}>
          <label htmlFor={idForInputGoal} className={s.label}>
            Що я хочу
            <input
              id={idForInputGoal}
              className={s.input}
              name="valueInputSurname"
              type="text"
              placeholder="Дай своїй меті назву"
            />
          </label>
          <label htmlFor={idForInputPoints} className={s.label}>
            Скільки балів треба набрати
            <input
              id={idForInputPoints}
              className={s.input}
              name="access"
              type="text"
              placeholder="Наприклад: 1000"
            />
          </label>
          <textarea
            className={s.textarea}
            name="description"
            placeholder="Напиши, що тебе мотивує:"
          />
          <button className={s.button} type="button">
            Ok
          </button>
        </form>
      </div>
    );
  }
}

export default ModalCreateGoal;

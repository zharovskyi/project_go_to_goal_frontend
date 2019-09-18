import React from 'react';
import Select from 'react-select';
import style from './ModalAddTask.module.css';

const options = [
  { value: 'TEST1', label: 'TEST1' },
  { value: 'TEST2', label: 'TEST2' },
  { value: 'TEST3', label: 'TEST3' },
];

const Modal = () => {
  return (
    <div className={style.modal_title}>
      <p className={style.title}>Немає завдань? Тоді їх треба створити!</p>
      <div className={style.modal_container}>
        <form className={style.form}>
          <input
            className={style.input_task}
            placeholder="Що ти хочешь зробити?"
          />
          <div className={style.input_options_section}>
            <Select className={style.input_options} options={options} />
            <input
              className={style.input_options}
              placeholder="Бали (до 1000)"
            />
          </div>
          <button type="button" className={style.button}>
            OK
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

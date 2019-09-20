import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { postSuccess } from '../../redux/ModalAddTask/ModalAddTaskOperations';
import style from './ModalAddTask.module.css';

const options = [
  { value: '8.00-10.00', label: '8.00-10.00' },
  { value: '10.00-12.00', label: '10.00-12.00' },
  { value: '12.00-14.00', label: '12.00-14.00' },
  { value: '14.00-16.00', label: '14.00-16.00' },
  { value: '16.00-18.00', label: '16.00-18.00' },
  { value: '18.00-20.00', label: '18.00-20.00' },
  { value: '20.00-22.00', label: '20.00-22.00' },
];

const findOption = value => options.find(opt => opt.value === value);

class ModalAddTask extends Component {
  state = {
    inputValue: '',
    inputPoint: '',
    selectData: null,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { postfunc } = this.props;
    const { inputValue, inputPoint, selectData } = this.state;

    postfunc({
      title: inputValue,
      description: 'task descr',
      points: inputPoint,
      deadline: selectData,
      dates: [new Date().toISOString()],
    });

    this.setState({
      inputValue: '',
      inputPoint: '',
      selectData: null,
    });
  };

  onChangeSelect = opt => {
    this.setState({
      selectData: opt.value,
    });
  };

  render() {
    const { inputValue, inputPoint, selectData } = this.state;
    return (
      <div className={style.modal_title}>
        <p className={style.title_modal}>
          Немає завдань? Тоді їх треба створити!
        </p>
        <div className={style.modal_container}>
          <form className={style.form} onSubmit={this.handleSubmit}>
            <p className={style.title_form}>Що зробити?</p>
            <input
              maxLength="20"
              name="inputValue"
              type="text"
              className={style.input_task}
              placeholder="Обери завдання або створи нове"
              value={inputValue}
              onChange={this.handleChange}
              required
            />
            <div className={style.input_options_section}>
              <Select
                className={style.input_options}
                value={findOption(selectData)}
                options={options}
                onChange={this.onChangeSelect}
              >
                Час
              </Select>
              <input
                name="inputPoint"
                type="number"
                max="1000"
                min="10"
                value={inputPoint}
                onChange={this.handleChange}
                className={style.input_options_input}
                placeholder="Бали (до 1000)"
              />
            </div>
            <button type="submit" className={style.button}>
              OK
            </button>
          </form>
        </div>
      </div>
    );
  }
}

ModalAddTask.propTypes = {
  postfunc: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  postfunc: task => dispatch(postSuccess(task)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ModalAddTask);

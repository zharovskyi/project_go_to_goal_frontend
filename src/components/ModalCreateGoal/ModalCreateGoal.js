import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';
import s from './ModalCreateGoal.module.css';
import { addGoal } from '../../redux/ModalCreateGoal/ModalCreateGoalOperations';

const idForInputGoal = shortid.generate();
const idForInputPoints = shortid.generate();
const date = new Date().toISOString();

class ModalCreateGoal extends Component {
  state = {
    valueInputGoal: '',
    valueInputPoints: '',
    valueDescriptionArea: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitForm = async e => {
    e.preventDefault();
    const { postGoal } = this.props;
    const {
      valueInputGoal,
      valueInputPoints,
      valueDescriptionArea,
    } = this.state;

    await postGoal({
      title: valueInputGoal,
      points: Number(valueInputPoints),
      description: valueDescriptionArea,
      dates: [date],
    });

    await this.setState({
      valueInputGoal: '',
      valueInputPoints: '',
      valueDescriptionArea: '',
    });
  };

  render() {
    const {
      valueInputGoal,
      valueInputPoints,
      valueDescriptionArea,
    } = this.state;
    return (
      <div className={s.modal}>
        <form onSubmit={this.onSubmitForm} className={s.form}>
          <label htmlFor={idForInputGoal} className={s.label}>
            Що я хочу
            <input
              maxLength="20"
              name="valueInputGoal"
              value={valueInputGoal}
              onChange={this.handleChange}
              id={idForInputGoal}
              className={s.input}
              type="text"
              placeholder="Дай своїй цілі назву"
              required
            />
          </label>
          <label htmlFor={idForInputPoints} className={s.label}>
            Скільки балів треба набрати
            <input
              min="1"
              max="9999"
              name="valueInputPoints"
              value={valueInputPoints}
              onChange={this.handleChange}
              id={idForInputPoints}
              className={s.input}
              type="number"
              placeholder="Наприклад: 1000"
              required
            />
          </label>
          <textarea
            name="valueDescriptionArea"
            value={valueDescriptionArea}
            onChange={this.handleChange}
            className={s.textarea}
            placeholder="Напиши, що тебе мотивує:"
            required
          />
          <button className={s.button} type="submit">
            Ok
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postGoal: goal => dispatch(addGoal(goal)),
});

ModalCreateGoal.propTypes = {
  postGoal: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(ModalCreateGoal);

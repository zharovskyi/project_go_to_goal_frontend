import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Progress } from 'react-sweet-progress';
import { connect } from 'react-redux';
import * as headerSelectors from '../../redux/Header/HeaderSelectors';
import css from './ProgressBar.module.css';

class ProgressBar extends Component {
  state = {};

  render() {
    const { goalPoints, taskPoints, percent } = this.props;
    return (
      <div className={css.progress}>
        <p className={css.progressScore}>
          {taskPoints} / <span className={css.total}> {goalPoints}</span>
        </p>
        <Progress
          className={css.progresBar}
          percent={percent}
          symbol="none"
          theme={{
            success: {
              symbol: '😀',
              color: '#9ecb45',
            },
            active: {
              symbol: ' ',
              color: '#f1c540',
            },
            default: {
              symbol: ' ',
              color: '#fbc630',
            },
          }}
        />
      </div>
    );
  }
}
const MSTP = store => ({
  goalPoints: headerSelectors.getGoalPoints(store),
  taskPoints: headerSelectors.getTasksPoints(store),
  percent: headerSelectors.getPercent(store),
});

ProgressBar.propTypes = {
  goalPoints: PropTypes.number.isRequired,
  taskPoints: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default connect(
  MSTP,
  null,
)(ProgressBar);

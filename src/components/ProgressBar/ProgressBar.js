import React from 'react';
import { Progress } from 'react-sweet-progress';
import { connect } from 'react-redux';

import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

import css from './ProgressBar.module.css';

const ProgressBar = ({ goalPoints, userPoints }) => {
  return (
    <div className={css.progress}>
      <p className={css.progressScore}>
        {userPoints} / <span className={css.total}> {goalPoints}</span>
      </p>
      <Progress
        className={css.progresBar}
        percent={(userPoints / goalPoints) * 100}
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
};

const mapStateToProps = store => ({
  goalPoints: dashboardSelectors.getGoalPoints(store),
  userPoints: dashboardSelectors.getUserPoints(store),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProgressBar);

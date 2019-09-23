import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-sweet-progress/lib/style.css';
import css from './Goal.module.css';

import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';

const Goal = ({ goal }) => {
  const { title } = goal;
  return (
    <div className={css.goal}>
      <div className={css.goalLogo}>
        <p className={css.goalName}> Mоя мета:</p>
        <div className={css.goalLabel}>{title}</div>
      </div>
    </div>
  );
};

Goal.propTypes = {
  goal: PropTypes.shape({ title: PropTypes.string }),
};

Goal.defaultProps = {
  goal: { title: '' },
};

const mapStateToProps = store => ({
  goal: dashboardSelectors.getGoal(store),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Goal);

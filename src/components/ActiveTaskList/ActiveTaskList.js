import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ActiveTaskList.module.css';
import Card from '../Card/Card';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';
import * as dashboardSelectors from '../../redux/Dashboard/DashboardSelectors';
import NewGoal from '../NewGoal/NewGoal';

class ActiveTaskList extends Component {
  state = {};

  render() {
    const { activePosts, getGoal } = this.props;

    if (getGoal === null) {
      return <NewGoal />;
    }

    if (activePosts.length === 0) {
      return <li className={styles.activeTaskCard}> </li>;
    }
    return (
      <>
        <ul className={styles.activeCards}>
          {activePosts.map(activePost => (
            <Card key={activePost._id} task={activePost} />
          ))}
        </ul>
      </>
    );
  }
}

ActiveTaskList.propTypes = {
  activePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getGoal: PropTypes.shape(),
};

ActiveTaskList.defaultProps = {
  getGoal: null,
};

const mapStateToProps = store => ({
  activePosts: TaskListSelectors.getActivePosts(store),
  getGoal: dashboardSelectors.getGoal(store),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveTaskList);

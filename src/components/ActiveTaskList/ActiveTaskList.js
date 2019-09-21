import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ActiveTaskList.module.css';
import Card from '../Card/Card';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';
import NewGoal from '../NewGoal/NewGoal';

class ActiveTaskList extends Component {
  state = {};

  render() {
    const { activePosts, getGoal } = this.props;

    if (getGoal.title === '') {
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
  getGoal: PropTypes.shape().isRequired,
};

const mapStateToProps = store => ({
  activePosts: TaskListSelectors.getActivePosts(store),
  getGoal: TaskListSelectors.getGoalData(store),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveTaskList);

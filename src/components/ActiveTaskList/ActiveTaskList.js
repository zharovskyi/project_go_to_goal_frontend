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
    const { activePosts, getGoalTitle } = this.props;

    if (activePosts.length === 0) {
      return <li className={styles.activeTaskCard}> </li>;
    }
    if (getGoalTitle === '') {
      return <NewGoal />;
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

ActiveTaskList.defaultProps = {
  getGoalTitle: '',
};

ActiveTaskList.propTypes = {
  activePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getGoalTitle: PropTypes.string,
};

const mapStateToProps = store => ({
  activePosts: TaskListSelectors.getActivePosts(store),
  getGoalTitle: TaskListSelectors.getGoalData(store),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveTaskList);

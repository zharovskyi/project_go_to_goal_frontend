import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ActiveTaskList.module.css';
import Card from '../Card/Card';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';

class ActiveTaskList extends Component {
  state = {};

  render() {
    const { activePosts, donePosts } = this.props;
    console.log(activePosts);
    console.log(donePosts);

    return (
      <>
        <ul className={styles.activeCards}>
          <Card />
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </ul>
      </>
    );
  }
}

ActiveTaskList.propTypes = {
  activePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  donePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = store => ({
  activePosts: TaskListSelectors.getActivePosts(store),
  donePosts: TaskListSelectors.getDonePosts(store),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveTaskList);

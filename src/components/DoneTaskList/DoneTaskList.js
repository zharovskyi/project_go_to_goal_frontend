import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DoneTaskList.module.css';
import Card from '../Card/Card';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';

class DoneTaskList extends Component {
  state = {};

  loadModeDoneTasks = () => {
    console.log('It works!');
  };

  render() {
    const { donePosts } = this.props;
    let newDonePosts;

    if (donePosts.length > 8) {
      newDonePosts = donePosts.slice(0, 8);
    } else {
      newDonePosts = donePosts;
    }

    if (donePosts.length === 0) {
      return <li className={styles.doneTaskCard}> </li>;
    }
    return (
      <>
        <ul className={styles.doneCards}>
          {newDonePosts.map(donePost => (
            <Card key={donePost._id} task={donePost} />
          ))}
        </ul>
        <div className={styles.buttonBlock}>
          {donePosts.length > 8 ? (
            <button
              type="button"
              className={styles.button}
              onClick={this.loadModeDoneTasks}
            >
              &#10507;
            </button>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

DoneTaskList.propTypes = {
  donePosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = store => ({
  donePosts: TaskListSelectors.getDonePosts(store),
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoneTaskList);

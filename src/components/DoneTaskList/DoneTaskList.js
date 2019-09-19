import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DoneTaskList.module.css';
import Card from '../Card/Card';
import * as TaskListSelectors from '../../redux/TaskList/TaskListSelectors';

class DoneTaskList extends Component {
  state = {};

  render() {
    const { donePosts } = this.props;

    if (donePosts.length === 0) {
      return <li className={styles.doneTaskCard}> </li>;
    }
    return (
      <>
        <ul className={styles.doneCards}>
          {donePosts.map(donePost => (
            <Card key={donePost._id} donePost={donePost} />
          ))}
        </ul>
        <div className={styles.buttonBlock}>
          {donePosts.length > 8 ? (
            <button type="button" className={styles.button}>
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

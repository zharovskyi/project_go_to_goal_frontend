import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ModalAddTaskActions from '../../redux/ModalAddTask/ModalAddTaskActions';
import styles from './CreateTaskButton.module.css';

const CreateTaskButton = ({ openModal }) => {
  // let isDisabled = null;
  // if (task.length >= 8) {
  //   isDisabled = true;
  // }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        // disabled={isDisabled}
        className={styles.button}
        // {isDisabled === 'true' ? styles.disableBtn : styles.button}
      >
        &#x2b;
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(ModalAddTaskActions.openModal()),
});

CreateTaskButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateTaskButton);

import React from 'react';
import { connect } from 'react-redux';
import styles from './ToggleButton.module.css';
import { toggleTaskOperation } from '../../redux/ToggleActive/ToggleActiveOperations';

const ToggleButton = ({ onChangeToggle, checked, id }) => {
  return (
    <div className={styles.div}>
      <input
        type="checkbox"
        checked={checked}
        onClick={() => onChangeToggle(id, `{"isDone":${!checked}}`)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onChangeToggle: (id, status) => dispatch(toggleTaskOperation(id, status)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ToggleButton);

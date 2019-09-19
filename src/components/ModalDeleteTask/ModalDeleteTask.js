import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTaskOperation } from '../../redux/ModalDeleteTask/ModalDeleteTaskOperations';
import getIdForDeleteTaskSelector from '../../redux/ModalDeleteTask/ModalDeleteTaskSelectors';
import style from './ModalDeleteTask.module.css';

const ModalDeleteTask = ({ deleteTask, id }) => {
  return (
    <div className={style.basicLightbox}>
      <div className={style.modalContent}>
        <h2 className={style.h2}>Ви впевнені, що хочете видалити завдання?</h2>
        <div className={style.btnConteiner}>
          <button
            className={style.btn}
            type="button"
            onClick={() => deleteTask(id)}
          >
            ТАК
          </button>
          <button className={style.btn} type="button">
            НІ
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  id: getIdForDeleteTaskSelector(state),
});

const mapDispatchToProps = dispatch => ({
  deleteTask: id => dispatch(deleteTaskOperation(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalDeleteTask);

ModalDeleteTask.defaultProps = {
  id: null,
};

ModalDeleteTask.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  id: PropTypes.string,
};

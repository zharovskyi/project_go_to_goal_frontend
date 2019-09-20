import React from 'react';
// import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './CardBodyActive.module.css';
import ToggleButton from '../ToggleButton/ToggleButton';
import { ReactComponent as GiftIMG } from '../../assets/icons/gift.svg';
import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';
import * as modalDeleteActions from '../../redux/ModalDeleteTask/ModalDeleteTaskActions';

// const pointsS = 500;

const CardBodyActive = ({ points, onChangeToggle, isDone, openModal, _id }) => {
  return (
    <>
      <div className={isDone ? styles.isDone : styles.bodyCard}>
        <button
          type="button"
          onClick={openModal}
          className={styles.SVG_close_btn}
        >
          <CloseSVG className={styles.SVG_close} />
        </button>
        <GiftIMG className={styles.SVG_gift} />
        <div className={styles.CardBody_div_txt}>
          {/* <p className={styles.points_txt_number}>{pointsS}</p> */}
          <p className={styles.points_txt_number}>{points}</p>
          <p className={styles.points_txt_p}>балів</p>
        </div>
        <ToggleButton onChangeToggle={onChangeToggle} />
      </div>
    </>
  );
};

const mapDispatchToProps = {
  openModal: modalDeleteActions.openModal,
};

export default connect(
  null,
  mapDispatchToProps,
)(CardBodyActive);

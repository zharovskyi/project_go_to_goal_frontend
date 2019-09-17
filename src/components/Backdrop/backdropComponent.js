import React, { Component } from 'react';
import styles from './backdropComponent.module.css';

const backdropComponent = BaseComponent => {
  return class BackdropComponent extends Component {
    state = {
      showModal: true,
    };

    componentDidMount() {
      window.addEventListener('keydown', this.closeOnEsc);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.closeOnEsc);
    }

    closeOnEsc = e => {
      if (e.code === 'Escape') {
        this.setState({ showModal: false });
      }
    };

    closeModal = e => {
      if (this.state.showModal === true && e.target.id === 'BaseComponent') {
        console.log(e.target);
        this.setState({ showModal: false });
      }
    };

    render() {
      const { showModal } = this.state;
      return showModal ? (
        <div
          className={styles.overlay}
          onClick={this.closeModal}
          id="BaseComponent"
        >
          <div className={styles.modal}>
            <BaseComponent />
          </div>
        </div>
      ) : (
        <BaseComponent />
      );
    }
  };
};

export default backdropComponent;

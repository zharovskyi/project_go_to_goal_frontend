import React, { Component } from 'react';
import styles from './backdropComponent.module.css';

const backdropComponent = ({ closeOnEsc, closeOnclick }) => BaseComponent => {
  return class BackdropComponent extends Component {
    state = {
      showModal: true,
      closeOnEsc,
      closeOnclick,
    };

    componentDidMount() {
      if (this.state.closeOnEsc) {
        window.addEventListener('keydown', this.closeOnEsc);
      }
    }

    componentWillUnmount() {
      if (this.state.closeOnEsc) {
        window.removeEventListener('keydown', this.closeOnEsc);
      }
    }

    closeOnEsc = e => {
      if (e.code === 'Escape') {
        this.setState({ showModal: false });
      }
    };

    closeModal = e => {
      if (
        this.state.showModal === true &&
        this.state.closeOnclick === true &&
        e.target.id === 'BaseComponent'
      ) {
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
            <BaseComponent {...this.props} />
          </div>
        </div>
      ) : (
        <BaseComponent />
      );
    }
  };
};

export default backdropComponent;

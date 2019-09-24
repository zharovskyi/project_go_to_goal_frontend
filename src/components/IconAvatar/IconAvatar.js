import React, { Component } from 'react';
import styles from './IconAvatar.module.css';
import avatar001 from '../../assets/avatars/avatar_001.png';
import avatar002 from '../../assets/avatars/avatar_002.png';
import avatar003 from '../../assets/avatars/avatar_003.png';
import avatar004 from '../../assets/avatars/avatar_004.png';
import avatar005 from '../../assets/avatars/avatar_005.png';
import avatar006 from '../../assets/avatars/avatar_006.png';
import avatar007 from '../../assets/avatars/avatar_007.png';
import avatar008 from '../../assets/avatars/avatar_008.png';

class IconsAvatar extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className={styles.avatar_choose}>
        <img
          src={avatar001}
          alt="user_pic"
          className={styles.user_avatar_big}
        />
        <p className={styles.avatar_txt}>Оберіть Вашу аватарку...</p>
        <div className={styles.avatar_little_div}>
          <img
            src={avatar001}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar002}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar003}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar004}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar005}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar006}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar007}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar008}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
        </div>
      </div>
    );
  }
}

export default IconsAvatar;

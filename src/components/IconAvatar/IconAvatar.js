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
  state = {
    avatar: avatar001,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  changeUserPic = e => {
    console.log(e.target.src);
    this.setState({ avatar: e.target.src });
  };

  render() {
    const { avatar } = this.state;
    return (
      <div className={styles.avatar_choose}>
        <img src={avatar} alt="user_pic" className={styles.user_avatar_big} />
        <p className={styles.avatar_txt}>Оберіть Вашу аватарку...</p>
        <div className={styles.avatar_little_div}>
          <img
            id="001"
            onClick={this.changeUserPic}
            src={avatar001}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar002}
            id="002"
            onClick={this.changeUserPic}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar003}
            id="003"
            onClick={this.changeUserPic}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar004}
            id="004"
            onClick={this.changeUserPic}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar005}
            id="005"
            onClick={this.changeUserPic}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar006}
            id="006"
            onClick={this.changeUserPic}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar007}
            id="007"
            onClick={this.changeUserPic}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
          <img
            src={avatar008}
            id="008"
            onClick={this.changeUserPic}
            alt="user_pic"
            className={styles.user_avatar_small}
          />
        </div>
      </div>
    );
  }
}

export default IconsAvatar;

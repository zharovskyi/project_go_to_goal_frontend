import React from 'react';
import styles from './ContactsPage.module.css';
import contacts from './contacts.json';
import logo from '../../assets/images/logo.png';

const ContactsPage = () => {
  return (
    <div className={styles.contactsPageBlock}>
      <nav className={styles.header}>
        <img src={logo} alt="logo" />
      </nav>
      <div className={styles.infoBlock}>
        <h2 className={styles.infoBlock__title}>Обратная связь</h2>
        <p className={styles.infoBlock__info}>
          Предложения, вопросы направляйте на указанный ниже адрес:
        </p>
        <p className={styles.infoBlock__contacts}>
          <span>[E-mail</span>
          <a
            className={styles.infoBlock__email}
            href="mailto:bosssvit@gmail.com"
          >
            bosssvit@gmail.com
          </a>
          ]
        </p>
      </div>
      <ul className={styles.contactsList}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contactBlock}>
            <img
              className={styles.contactImage}
              src={contact.avatar}
              alt="avatar"
            />
            <p className={styles.contactName}>{contact.name}</p>
            <p className={styles.contactPosition}>{contact.position}</p>
            <p className={styles.contactEmail}>
              email:{' '}
              <a className={styles.email} href={contact.emaillink}>
                {contact.email}
              </a>
            </p>
            <p className={styles.contactInfo}>{contact.info}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;

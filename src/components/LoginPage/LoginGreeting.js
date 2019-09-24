import React from 'react';
import PropTypes from 'prop-types';

const LoginGreeting = ({ sGreetingText }) => (
  <>
    <p className={sGreetingText}>
      Тут ви зможете чітко сформулювати ваші бажання - чого ви хочете досягти чи
      отримати у якості винагороди. Вам потрібно поставити собі мету, а згодом -
      виконувати поставлені задачі у комфортному для себе ритмі та не забувати
      відмічати їх виконання.
    </p>
    <p className={sGreetingText}>
      Будьте наполегливими, відповідальними і ви зможете досягти всього, чого
      забажаєете! Подобається ідея? Готові допомагати, розвиватися та йти до
      своєї мети?
    </p>
    <p className={sGreetingText}>
      Так, так, все саме так, як у дорослому житті &#9786; Тоді не зважайте, а
      швидко зареєструйтеся, або заходьте на свій аккаунт.
    </p>
  </>
);

LoginGreeting.propTypes = {
  sGreetingText: PropTypes.string.isRequired,
};

export default LoginGreeting;

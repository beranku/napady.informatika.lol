import React from 'react';
import PropTypes from 'prop-types';
import { AUTH_ROUTES } from '../constants/config';
import { getCurrentUrl } from '../utils/url';
import styles from './UserMenu.module.css';

const UserMenu = ({ nickname }) => {
  const currentUrl = encodeURIComponent(getCurrentUrl());
  const logoutUrl = `${AUTH_ROUTES.LOGOUT}?url=${currentUrl}`;
  const loginUrl = `${AUTH_ROUTES.LOGIN}?url=${currentUrl}`;
  
  return nickname ? (
    <div className={styles.userSection}>
      <span className={styles.username}>{nickname}</span>
      <a href={logoutUrl} className={styles.logoutLink}>
        Odhlásit se
      </a>
    </div>
  ) : (
    <a href={loginUrl} className={styles.loginButton}>
      Přihlásit se
    </a>
  );
};

UserMenu.propTypes = {
  nickname: PropTypes.string
};

export default UserMenu;

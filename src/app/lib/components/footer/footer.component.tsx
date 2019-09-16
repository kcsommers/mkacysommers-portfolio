import React from 'react';
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'app/core/Colors.enum';

export const FooterComponent: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <FontAwesomeIcon icon={faGithub} color={Colors.$background}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faLinkedin} color={Colors.$background}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faEnvelope} color={Colors.$background}></FontAwesomeIcon>
    </div>
  );
}
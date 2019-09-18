import React from 'react';
import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'app/lib/core/Colors.enum';

export const FooterComponent: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon size={'2x'} icon={faGithub} color={Colors.$primary}></FontAwesomeIcon>
      </div>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon size={'2x'} icon={faLinkedin} color={Colors.$primary}></FontAwesomeIcon>
      </div>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon size={'2x'} icon={faEnvelope} color={Colors.$primary}></FontAwesomeIcon>
      </div>
    </div>
  );
}
import React from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'app/core/Colors.enum';
import { TextComponent } from '../text/text.component';

type HeaderProps = {
  scrollTo: (event: React.MouseEvent, section: string) => void
}

export const HeaderComponent: React.FC<HeaderProps> = ({ scrollTo }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.appHeaderLogoContainer}>
        <span className={styles.logoSpan}>
          <TextComponent content={'MKS'}></TextComponent>
        </span>
      </div>
      <nav className={styles.appHeaderMenuContainer}>
        <a
          className={styles.menuLink}
          href="#about"
          onClick={(e) => { scrollTo(e, 'about') }}
        ><TextComponent content={'About'}></TextComponent>
        </a>
        <a
          className={styles.menuLink}
          href="#projects"
          onClick={(e) => { scrollTo(e, 'projects') }}
        ><TextComponent content={'Projects'}></TextComponent>
        </a>
        <a
          className={styles.menuLink}
          href="#"
        ><TextComponent content={'Resume'}></TextComponent>
        </a>
        <a
          className={styles.menuLink}
          href="#"
        ><TextComponent content={'Contact'}></TextComponent>
        </a>
        <a
          className={styles.menuLink}
          href="#"
        ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
      </nav>
    </div>
  );
}
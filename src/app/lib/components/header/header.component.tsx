import React from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TextComponent } from '../text/text.component';
import { Colors } from 'app/lib/core/Colors.enum';

type HeaderProps = {
  scrollTo: (event: React.MouseEvent, section: string) => void,
  showContact: (event: React.MouseEvent) => void
}

type HeaderState = {
  scrolled: boolean;
}

export class HeaderComponent extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll(event: Event) {
    const { scrolled } = this.state;
    if (window.scrollY > 30) {
      if (!scrolled) {
        this.setState({ scrolled: true });
      }
    } else {
      if (scrolled) {
        this.setState({ scrolled: false });
      }
    }
  }

  render() {
    const { scrollTo, showContact } = this.props;
    const { scrolled } = this.state;
    return (
      <div className={[styles.headerContainer, scrolled && styles.headerScrolled].join(' ')}>
        <div className={styles.appHeaderLogoContainer}>
          <span onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={styles.logoSpan}>
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
            href="#contact"
            onClick={showContact}
          ><TextComponent content={'Contact'}></TextComponent>
          </a>
          <a
            className={styles.menuLink}
            href="#"
          ><FontAwesomeIcon size={'2x'} icon={faGithub} color={Colors.$accent2}></FontAwesomeIcon>
          </a>
        </nav>
      </div>
    );
  }
}
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/lib/core/Colors.enum';
import React from 'react';
import { TextComponent } from '../text/text.component';
import styles from './header.module.scss';
import { ScrollMark } from 'app/lib/core/ScrollMark.enum';

type HeaderProps = {
  scrollTo: (event: React.MouseEvent, scrollMark: ScrollMark) => void,
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
            onClick={(e) => { scrollTo(e, ScrollMark.ABOUT) }}
          ><TextComponent content={'About'}></TextComponent>
          </a>
          <a
            className={styles.menuLink}
            href="#projects"
            onClick={(e) => { scrollTo(e, ScrollMark.PROJECTS) }}
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
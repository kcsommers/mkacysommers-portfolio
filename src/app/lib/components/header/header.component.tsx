import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/lib/core/Colors.enum';
import { Pages } from 'app/lib/core/Pages.enum';
import { ScrollMark } from 'app/lib/core/ScrollMark.enum';
import React from 'react';
import { TextComponent } from '../text/text.component';
import styles from './header.module.scss';

const showBackground = [
  Pages.RESUME
];

type HeaderProps = {
  navigate: (event: React.MouseEvent, scrollMark: ScrollMark) => void,
  showContact: (event: React.MouseEvent) => void,
  currentPage: Pages
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
    const { navigate, showContact, currentPage } = this.props;
    const { scrolled } = this.state;
    return (
      <div className={[styles.headerContainer, scrolled && styles.headerScrolled, showBackground.includes(currentPage) && styles.showBackground].join(' ')}>
        <div className={styles.appHeaderLogoContainer}>
          <span onClick={(e) => { navigate(e, ScrollMark.TOP) }} className={styles.logoSpan}>
            <TextComponent size={'1.2rem'} content={'MKS'}></TextComponent>
          </span>
        </div>
        <nav className={styles.appHeaderMenuContainer}>
          <a
            className={styles.menuLink}
            href="#about"
            onClick={(e) => { navigate(e, ScrollMark.ABOUT) }}
          ><TextComponent content={'About'}></TextComponent>
          </a>
          <a
            className={styles.menuLink}
            href="#projects"
            onClick={(e) => { navigate(e, ScrollMark.PROJECTS) }}
          ><TextComponent content={'Projects'}></TextComponent>
          </a>
          <a
            className={styles.menuLink}
            href="#resume"
            onClick={(e) => { navigate(e, ScrollMark.RESUME) }}
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
            href="https://github.com/kcsommers"
          ><FontAwesomeIcon size={'2x'} icon={faGithub} color={Colors.$accent2}></FontAwesomeIcon>
          </a>
        </nav>
      </div>
    );
  }
}
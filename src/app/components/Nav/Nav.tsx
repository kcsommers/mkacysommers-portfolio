import { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useTransition } from '../../core';
import { AnimatedText } from '../AnimatedText';
import styles from './Nav.module.scss';

interface INavProps {
  title?: string;
  subtext?: string;
  animationDelay?: number;
}

export const Nav: FC<INavProps> = ({
  title,
  subtext,
  animationDelay = 1.25,
}) => {
  const location = useLocation();
  const pathname: string = location.pathname;
  const { inTransition, setInTransition } = useTransition();
  const [navWrapRef, inView] = useInView({
    threshold: 1,
  });

  return (
    <div className={styles.navWrap}>
      <div className={styles.navPlaceholder} ref={navWrapRef}></div>
      <div
        className={`${styles.navWrapInner} ${
          !inView && !inTransition ? styles.navFixed : ''
        }`}
      >
        <h4
          className="animated-text-wrap"
          style={{
            marginBottom: subtext ? '10px' : '20px',
          }}
        >
          <AnimatedText delay={animationDelay}>{title}</AnimatedText>
        </h4>
        {subtext && (
          <p className="animated-text-wrap">
            <AnimatedText delay={animationDelay + 0.1}>{subtext}</AnimatedText>
          </p>
        )}
        <span className="animated-text-wrap">
          <AnimatedText
            delay={subtext ? animationDelay + 0.2 : animationDelay + 0.1}
          >
            <div className={styles.nav}>
              <Link
                to="/"
                className={pathname === '/' ? styles.activeLink : ''}
                onClick={() => pathname !== '/' && setInTransition(true)}
              >
                home
              </Link>
              <Link
                to="/work"
                className={pathname === '/work' ? styles.activeLink : ''}
                onClick={() => pathname !== '/work' && setInTransition(true)}
              >
                work
              </Link>
              <Link
                to="/about"
                className={pathname === '/about' ? styles.activeLink : ''}
                onClick={() => pathname !== '/about' && setInTransition(true)}
              >
                about
              </Link>
              <Link
                to="/contact"
                className={pathname === '/contact' ? styles.activeLink : ''}
                onClick={() => pathname !== '/contact' && setInTransition(true)}
              >
                contact
              </Link>
              <Link
                to="/resume"
                className={pathname === '/resume' ? styles.activeLink : ''}
                onClick={() => pathname !== '/resume' && setInTransition(true)}
              >
                resume
              </Link>
              <span style={{ width: '100%', height: '3px' }}></span>
            </div>
          </AnimatedText>
        </span>
      </div>
    </div>
  );
};
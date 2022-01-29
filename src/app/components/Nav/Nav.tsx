import { FC } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { AnimatedText } from '../AnimatedText';
import { useTransition } from '../../core';
import styles from './Nav.module.scss';

interface INavProps {
  title?: string;
  subtext?: string;
}

export const Nav: FC<INavProps> = ({ title, subtext }) => {
  const location = useLocation();
  const pathname: string = location.pathname;
  const { setInTransition } = useTransition();

  return (
    <div className={styles.navWrapInner}>
      <h3
        className="animated-text-wrap"
        style={{
          marginBottom: subtext ? '10px' : '20px',
        }}
      >
        <AnimatedText delay={1.25}>{title}</AnimatedText>
      </h3>
      {subtext && (
        <p className="animated-text-wrap">
          <AnimatedText delay={1.35}>{subtext}</AnimatedText>
        </p>
      )}
      <span className="animated-text-wrap">
        <AnimatedText delay={subtext ? 1.45 : 1.35}>
          <div className={styles.nav}>
            <Link
              to="/"
              className={pathname === '/' ? styles.activeLink : ''}
              onClick={() => setInTransition(true)}
            >
              home
            </Link>
            <Link
              to="/work"
              className={pathname === '/work' ? styles.activeLink : ''}
              onClick={() => setInTransition(true)}
            >
              work
            </Link>
            <Link
              to="/about"
              className={pathname === '/about' ? styles.activeLink : ''}
              onClick={() => setInTransition(true)}
            >
              about
            </Link>
            <Link
              to="/contact"
              className={pathname === '/contact' ? styles.activeLink : ''}
              onClick={() => setInTransition(true)}
            >
              contact
            </Link>
            <Link
              to="/resume"
              className={pathname === '/resume' ? styles.activeLink : ''}
              onClick={() => setInTransition(true)}
            >
              resume
            </Link>
            <span style={{ width: '100%', height: '3px' }}></span>
          </div>
        </AnimatedText>
      </span>
    </div>
  );
};

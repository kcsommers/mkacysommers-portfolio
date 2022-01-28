import { FC } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useTransition } from '../../core';
import styles from './Nav.module.scss';

interface INavProps {
  color?: 'light' | 'dark';
}

export const Nav: FC<INavProps> = ({ color = 'dark' }) => {
  const location = useLocation();
  const pathname: string = location.pathname;
  const { setInTransition } = useTransition();

  return (
    <div className={`${styles.nav} ${color}`}>
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
  );
};

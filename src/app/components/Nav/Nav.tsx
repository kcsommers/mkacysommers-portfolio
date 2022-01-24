import { FC } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

export const Nav: FC = () => {
  const location = useLocation();
  const pathname: string = location.pathname;

  return (
    <div className={styles.nav}>
      <Link to="/" className={pathname === '/' ? styles.activeLink : ''}>
        home
      </Link>
      <Link
        to="/work"
        className={pathname === '/work' ? styles.activeLink : ''}
      >
        work
      </Link>
      <Link
        to="/about"
        className={pathname === '/about' ? styles.activeLink : ''}
      >
        about
      </Link>
      <Link
        to="/contact"
        className={pathname === '/contact' ? styles.activeLink : ''}
      >
        contact
      </Link>
    </div>
  );
};

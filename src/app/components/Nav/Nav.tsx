import { FC } from 'react';
import { useLocation } from 'react-router';
import styles from './Nav.module.scss';

export const Nav: FC = () => {
  const location = useLocation();
  const pathname: string = location.pathname;

  return (
    <div className={styles.nav}>
      <a href="/" className={pathname === '/' ? styles.activeLink : ''}>
        home
      </a>
      <a href="/work" className={pathname === '/work' ? styles.activeLink : ''}>
        work
      </a>
      <a
        href="/about"
        className={pathname === '/about' ? styles.activeLink : ''}
      >
        about
      </a>
      <a
        href="/contact"
        className={pathname === '/contact' ? styles.activeLink : ''}
      >
        contact
      </a>
    </div>
  );
};

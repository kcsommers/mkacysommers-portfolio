import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Nav.module.scss';

export const Nav = () => {
  const router = useRouter();

  return (
    <nav>
      <span className="animated-text-wrap">
        <div className={styles.nav}>
          <Link
            href="/"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/',
            })}
          >
            home
          </Link>
          <Link
            href="/work"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/work',
            })}
          >
            work
          </Link>
          <Link
            href="/about"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/about',
            })}
          >
            about
          </Link>
          <Link
            href="/contact"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/contact',
            })}
          >
            contact
          </Link>
          <Link
            href="/resume"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/resume',
            })}
          >
            resume
          </Link>
          <span style={{ width: '100%', height: '3px' }}></span>
        </div>
      </span>
    </nav>
  );
};

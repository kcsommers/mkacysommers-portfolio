import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTransition } from '../../core';
import styles from './Nav.module.scss';

export const Nav = () => {
  const router = useRouter();
  const { setInTransition } = useTransition();

  return (
    <nav>
      <span className="animated-text-wrap">
        <div className={styles.nav}>
          <Link
            href="/"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/',
            })}
            // onClick={() => router.pathname !== '/' && setInTransition(true)}
          >
            home
          </Link>
          <Link
            href="/work"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/work',
            })}
            // onClick={() => router.pathname !== '/work' && setInTransition(true)}
          >
            work
          </Link>
          <Link
            href="/about"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/about',
            })}
            // onClick={() =>
            //   router.pathname !== '/about' && setInTransition(true)
            // }
          >
            about
          </Link>
          <Link
            href="/contact"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/contact',
            })}
            // onClick={() =>
            //   router.pathname !== '/contact' && setInTransition(true)
            // }
          >
            contact
          </Link>
          <Link
            href="/resume"
            className={classNames(styles.nav_link, {
              [styles.active_link]: router.pathname === '/resume',
            })}
            // onClick={() =>
            //   router.pathname !== '/resume' && setInTransition(true)
            // }
          >
            resume
          </Link>
          <span style={{ width: '100%', height: '3px' }}></span>
        </div>
      </span>
    </nav>
  );
};

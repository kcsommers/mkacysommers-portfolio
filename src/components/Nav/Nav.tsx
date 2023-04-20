import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTransition } from '../../context/use-transition';
import styles from './Nav.module.scss';

export const Nav = () => {
  const router = useRouter();
  const { isTransitioning } = useTransition();

  return (
    <nav
      className={classNames('text-sm', {
        'pointer-events-none': isTransitioning,
      })}
    >
      <div className={styles.nav}>
        <Link
          href="/"
          scroll={false}
          className={classNames(styles.nav_link, {
            [styles.active_link]: router.pathname === '/',
          })}
        >
          home
        </Link>
        <Link
          href="/work"
          scroll={false}
          className={classNames(styles.nav_link, {
            [styles.active_link]: router.pathname === '/work',
          })}
        >
          work
        </Link>
        <Link
          href="/about"
          scroll={false}
          className={classNames(styles.nav_link, {
            [styles.active_link]: router.pathname === '/about',
          })}
        >
          about
        </Link>
        <Link
          href="/contact"
          scroll={false}
          className={classNames(styles.nav_link, {
            [styles.active_link]: router.pathname === '/contact',
          })}
        >
          contact
        </Link>
        <Link
          href="/resume"
          scroll={false}
          className={classNames(styles.nav_link, {
            [styles.active_link]: router.pathname === '/resume',
          })}
        >
          resume
        </Link>
        <span style={{ width: '100%', height: '3px' }}></span>
      </div>
    </nav>
  );
};

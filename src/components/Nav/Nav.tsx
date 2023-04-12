import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTransition } from '../../core';
import { AnimatedText } from '../AnimatedText/AnimatedText';
import styles from './Nav.module.scss';

type NavProps = {
  title?: string;
  subtext?: string;
  animationDelay?: number;
};

export const Nav = ({ title, subtext, animationDelay = 1.25 }: NavProps) => {
  const router = useRouter();
  const { setInTransition } = useTransition();

  return (
    <div>
      <h4 className="animated-text-wrap">
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
              href="/"
              className={classNames(styles.nav_link, {
                [styles.active_link]: router.pathname === '/',
              })}
              onClick={() => router.pathname !== '/' && setInTransition(true)}
            >
              home
            </Link>
            <Link
              href="/work"
              className={classNames(styles.nav_link, {
                [styles.active_link]: router.pathname === '/work',
              })}
              onClick={() =>
                router.pathname !== '/work' && setInTransition(true)
              }
            >
              work
            </Link>
            <Link
              href="/about"
              className={classNames(styles.nav_link, {
                [styles.active_link]: router.pathname === '/about',
              })}
              onClick={() =>
                router.pathname !== '/about' && setInTransition(true)
              }
            >
              about
            </Link>
            <Link
              href="/contact"
              className={classNames(styles.nav_link, {
                [styles.active_link]: router.pathname === '/contact',
              })}
              onClick={() =>
                router.pathname !== '/contact' && setInTransition(true)
              }
            >
              contact
            </Link>
            <Link
              href="/resume"
              className={classNames(styles.nav_link, {
                [styles.active_link]: router.pathname === '/resume',
              })}
              onClick={() =>
                router.pathname !== '/resume' && setInTransition(true)
              }
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

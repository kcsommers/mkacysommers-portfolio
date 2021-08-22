import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Navigator.module.scss';

interface INavLink {
  display: string;
  link: string;
}

const navLinks: INavLink[] = [
  {
    display: 'About',
    link: '/about',
  },
  {
    display: 'Projects',
    link: '/projects',
  },
  {
    display: 'Contact',
    link: '/contact',
  },
  {
    display: 'Resume',
    link: '/resume',
  },
];

export const Navigator = () => {
  const history = useHistory();

  const location = useLocation();

  const [mounted, setMounted] = useState(false);

  const navigate = (path: string): void => {
    history.push(path);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log(location);

  return (
    <div className={styles.navigatorWrap}>
      <motion.div className={styles.navigatorInner}>
        <motion.div className={styles.navigatorListWrap}>
          <motion.h1
            className={`${
              mounted && location.pathname === '/'
                ? ` ${styles.active}`
                : ` ${styles.inactive}`
            }`}
            initial="enter"
            animate="center"
            exit="exit"
            key={'M Kacy Sommers'}
            variants={{
              enter: {
                opacity: 0,
                scale: 1.25,
              },
              center: {
                opacity: 1,
                scale: 1,
              },
              exit: {
                opacity: 1,
                scale: 1.25,
              },
            }}
            onClick={() => navigate('/')}
            transition={{
              duration: 2,
              type: 'spring',
            }}
          >
            <span className={styles.linkBorder}>
              <span>M Kacy</span>
              <br />
              <span>Sommers</span>
            </span>
          </motion.h1>
          {navLinks.map((l, i) => (
            <motion.div
              className={`${styles.navigatorListItem}${
                mounted && location.pathname === l.link
                  ? ` ${styles.active}`
                  : ` ${styles.inactive}`
              }`}
              initial="enter"
              animate="center"
              exit="exit"
              key={l.display}
              variants={{
                enter: {
                  opacity: 0,
                  y: '200%',
                },
                center: {
                  opacity: 1,
                  y: '0%',
                },
                exit: {
                  opacity: 1,
                  y: '0%',
                },
              }}
              onClick={() => navigate(l.link)}
              transition={{
                delay: 0.25 * i,
                duration: 1,
                type: 'spring',
              }}
            >
              <span className={styles.linkBorder}>
                <span className={styles.pageLink}>{l.display}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

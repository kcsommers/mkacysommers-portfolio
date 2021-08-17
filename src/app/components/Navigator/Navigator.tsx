import { motion } from 'framer-motion';
import styles from './Navigator.module.scss';

interface INavLink {
  display: string;
  link: string;
}

const navLinks: INavLink[] = [
  {
    display: 'M Kacy Sommers',
    link: '/',
  },
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

const linkVariants = {
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
};

export const Navigator = () => {
  return (
    <div className={styles.navigatorWrap}>
      <motion.div className={styles.navigatorInner}>
        <motion.div className={styles.navigatorListWrap}>
          {navLinks.map((l, i) =>
            i === 0 ? (
              <motion.h1
                initial="enter"
                animate="center"
                exit="exit"
                variants={linkVariants}
                transition={{
                  duration: 2,
                  type: 'spring',
                }}
              >
                {l.display}
              </motion.h1>
            ) : (
              <motion.div
                className={styles.navigatorListItem}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  delay: 0.25 * i,
                  duration: 1,
                  type: 'spring',
                }}
                variants={linkVariants}
              >
                {l.display}
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

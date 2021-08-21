import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
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
  const hmm = useHistory();

  const navigate = (path: string): void => {
    console.log('nav', hmm);

    hmm.push(path);
  };

  console.log('hmm', hmm, useHistory());

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
                key={l.display}
                variants={linkVariants}
                onClick={() => navigate(l.link)}
                transition={{
                  duration: 2,
                  type: 'spring',
                }}
              >
                <span>{l.display}</span>
              </motion.h1>
            ) : (
              <motion.div
                className={styles.navigatorListItem}
                initial="enter"
                animate="center"
                exit="exit"
                key={l.display}
                variants={linkVariants}
                onClick={() => navigate(l.link)}
                transition={{
                  delay: 0.25 * i,
                  duration: 1,
                  type: 'spring',
                }}
              >
                <span>{l.display}</span>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

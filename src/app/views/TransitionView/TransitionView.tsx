import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import styles from './TransitionView.module.scss';

export const TransitionView: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.transitionViewWrap}>
      <motion.div
        className={styles.transitionSlideLight}
        initial="enter"
        animate="center"
        variants={{
          enter: {
            x: '100%',
          },
          center: {
            x: 0,
          },
        }}
        transition={{
          delay: 1,
          duration: 0.75,
          ease: [0.66, 0.1, 0.9, 0.68],
        }}
      ></motion.div>
      <motion.div
        className={styles.transitionSlideDark}
        initial={false}
        animate="center"
        exit="exit"
        variants={{
          center: {
            x: '100%',
          },
          exit: {
            x: 0,
          },
        }}
        transition={{
          duration: 0.75,
          ease: [0.66, 0.1, 0.9, 0.68],
        }}
      ></motion.div>
      {children}
    </div>
  );
};

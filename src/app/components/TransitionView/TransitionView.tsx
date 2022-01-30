import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import { useTimeout, useTransition } from '../../core';
import styles from './TransitionView.module.scss';

const ENTER_DELAY = 1;
const SLIDE_DURATION = 0.5;
const SLIDE_EASE = [0.66, 0.1, 0.9, 0.68];

export const TransitionView: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { setInTransition } = useTransition();

  useTimeout(() => {
    setInTransition(false);
  }, (SLIDE_DURATION + ENTER_DELAY) * 1000);

  return (
    <div className={styles.transitionViewWrap}>
      <div className={styles.transitionSlidesWrap}>
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
            delay: ENTER_DELAY,
            duration: SLIDE_DURATION,
            ease: SLIDE_EASE,
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
            duration: SLIDE_DURATION,
            ease: SLIDE_EASE,
          }}
        ></motion.div>
      </div>
      <div className={styles.transitionChildrenWrap}>{children}</div>
    </div>
  );
};

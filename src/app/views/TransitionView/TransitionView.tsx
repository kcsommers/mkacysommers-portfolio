import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import styles from './TransitionView.module.scss';

export const TransitionView: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.transitionViewWrap}>
      <motion.div
        className={styles.transitionViewBody}
        initial="enter"
        animate="center"
        exit="exit"
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
          duration: 1,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className={styles.transitionSlide}
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
          duration: 1,
        }}
      ></motion.div>
      <div className={styles.logoWrap}>
        <img
          src="https://res.cloudinary.com/kcsommers/image/upload/v1643178708/mkacysommerslogo-light.png"
          alt="M Kacy Sommers logo"
        />
      </div>
    </div>
  );
};

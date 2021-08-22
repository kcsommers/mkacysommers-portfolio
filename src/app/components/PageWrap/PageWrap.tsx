import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useMemo } from 'react';
import styles from './PageWrap.module.scss';

type PageWrapProps = PropsWithChildren<{
  rgb: number[];
}>;

export const PageWrap = ({ rgb, children }: PageWrapProps) => {
  const rgbRef = useMemo(() => rgb.join(','), []);

  return (
    <div className={styles.pageWrap}>
      <motion.div
        key={rgbRef}
        className={styles.pageBg}
        style={{ backgroundColor: `rgb(${rgbRef})` }}
        initial="enter"
        animate="center"
        exit="exit"
        variants={{
          enter: {
            opacity: 0,
            scale: 1.2,
          },
          center: {
            opacity: 1,
            scale: 1,
          },
          exit: {
            opacity: 0,
            scale: 1.2,
          },
        }}
        transition={{
          duration: 1,
          type: 'spring',
        }}
      ></motion.div>
      <motion.div
        className={styles.pageWrapInner}
        initial="enter"
        animate="center"
        exit="exit"
        variants={{
          enter: {
            opacity: 0,
            scale: 1.2,
          },
          center: {
            opacity: 1,
            scale: 1,
          },
          exit: {
            opacity: 0,
            scale: 1.2,
          },
        }}
        transition={{
          delay: 0.5,
          duration: 2,
          type: 'spring',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

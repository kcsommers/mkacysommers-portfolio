import { motion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useMemo } from 'react';
import styles from './PageWrap.module.scss';

type PageWrapProps = PropsWithChildren<{
  rgb: number[];
  variants?: Variants;
}>;

export const PageWrap = ({ rgb, children, variants }: PageWrapProps) => {
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
        variants={
          variants || {
            enter: {
              opacity: 0,
              scale: 1.15,
            },
            center: {
              opacity: 1,
              scale: 1,
            },
            exit: {
              opacity: 0,
              scale: 1.15,
              transition: {
                delay: 0,
                duration: 0.5,
                type: 'spring',
              },
            },
          }
        }
        transition={{
          delay: 0.5,
          duration: 1,
          type: 'spring',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

import { FOR_TABLET_LANDSCAPE_UP, useResize } from '@core';
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

  const windowDims = useResize();

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
          enter: Object.assign(
            variants && variants.enter
              ? variants.enter
              : {
                  opacity: 0,
                  scale: 1.15,
                },
            windowDims.width > FOR_TABLET_LANDSCAPE_UP
              ? {
                  width: '70%',
                  padding: '2rem 2rem 2rem 3rem',
                }
              : {
                  width: '100%',
                  padding: '2rem 2rem 2rem 9rem',
                }
          ),
          center: Object.assign(
            variants && variants.center
              ? variants.center
              : {
                  opacity: 1,
                  scale: 1,
                },
            windowDims.width > FOR_TABLET_LANDSCAPE_UP
              ? {
                  width: '70%',
                  padding: '2rem 2rem 2rem 3rem',
                }
              : {
                  width: '100%',
                  padding: '2rem 2rem 2rem 9rem',
                }
          ),
          exit:
            variants && variants.exit
              ? variants.exit
              : {
                  opacity: 0,
                  scale: 1.15,
                  transition: {
                    delay: 0,
                    duration: 0.5,
                    type: 'spring',
                  },
                },
        }}
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

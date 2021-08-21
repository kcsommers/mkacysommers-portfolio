import { motion, Variants } from 'framer-motion';
import { useMemo } from 'react';
import styles from './PageBg.module.scss';

interface PageBgProps {
  rgb: number[];
  isVisible?: boolean;
}

export const PageBg = ({ rgb }: PageBgProps) => {
  const rgbRef = useMemo(() => rgb.join(','), []);

  return (
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
  );
};

// background: `linear-gradient(to bottom right, rgb(${rgbRef}), rgba(${rgbRef},1))`,

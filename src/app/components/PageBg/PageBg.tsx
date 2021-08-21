import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './PageBg.module.scss';

export const pageBgVariants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

interface PageBgProps {
  backgroundColor: string;
  isVisible?: boolean;
}

export const PageBg = ({ backgroundColor }: PageBgProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={backgroundColor}
        className={styles.pageBg}
        style={{ backgroundColor }}
        variants={pageBgVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </AnimatePresence>
  );
};

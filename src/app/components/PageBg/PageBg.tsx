import { motion, Variants } from 'framer-motion';
import styles from './PageBg.module.scss';

export const pageBgVariants: Variants = {
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
};

interface PageBgProps {
  backgroundColor: string;
  isVisible?: boolean;
}

export const PageBg = ({ backgroundColor }: PageBgProps) => {
  return (
    <motion.div
      key={backgroundColor}
      className={styles.pageBg}
      style={{ backgroundColor }}
      variants={pageBgVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 1,
      }}
    ></motion.div>
  );
};

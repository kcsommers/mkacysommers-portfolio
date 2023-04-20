import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

interface IAnimatedTextProps {
  delay?: number;
}

export const AnimatedText: FC<PropsWithChildren<IAnimatedTextProps>> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.span
      initial="enter"
      animate="center"
      exit="exit"
      variants={{
        enter: {
          opacity: 0,
          y: '100%',
        },
        center: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          transition: {
            delay: 0,
            duration: 0.5,
          },
        },
      }}
      transition={{
        delay: delay,
        duration: 0.5,
      }}
    >
      {children}
    </motion.span>
  );
};

import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

interface IAnimatedTextProps {
  delay: number;
}

export const AnimatedText: FC<PropsWithChildren<IAnimatedTextProps>> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.span
      initial="enter"
      animate="center"
      variants={{
        enter: {
          y: '100%',
        },
        center: {
          y: 0,
        },
      }}
      transition={{
        delay: delay,
        duration: 0.5,
        type: 'spring',
      }}
    >
      {children}
    </motion.span>
  );
};

import { motion } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';
import { useIntersectionObserver } from '../../utils/hooks/use-intersection-observer';
import { slideUpVariants } from '../../utils/animations/slide-up-variants';

export const LazyItem = ({ children }: PropsWithChildren<{}>) => {
  const elRef = useRef<HTMLDivElement>();
  const { isVisible } = useIntersectionObserver(elRef, 0.25);

  return (
    <motion.div
      ref={elRef}
      animate={isVisible ? 'visible' : 'hidden'}
      variants={slideUpVariants}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

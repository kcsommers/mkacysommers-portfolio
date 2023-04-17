import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PropsWithChildren, useMemo, useRef } from 'react';
import { useTransition } from '../../context/use-transition';
import { useWindowSize } from '../../utils/hooks/use-window-size';
import { AppBackground } from '../AppBackground/AppBackground';

const SLIDE_DURATION = 0.5;
const SLIDE_EASE = [0.66, 0.1, 0.9, 0.68];

export const TransitionView = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();

  const { isTransitioning, setIsTransitioning } = useTransition();

  const windowDims = useWindowSize();
  const logoCount = useMemo(() => {
    if (windowDims.width > 1600) {
      return 5;
    }
    if (windowDims.width > 600) {
      return 4;
    }
    return 3;
  }, [windowDims.width]);
  const logoRefs = useRef<HTMLDivElement[]>([]);
  const logoHeght = useMemo(() => {
    return logoRefs.current[0]?.offsetWidth * 1.455;
  }, [windowDims.width]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        staggerDirection: -1,
        when: 'beforeChildren',
      },
    },
  };

  const logoVariants = (i: number) => {
    return {
      hidden: { opacity: i === logoCount - 2 ? 0.25 : 0.15 },
      show: {
        opacity: 0.75,
        transition: {
          duration: 1,
        },
      },
    };
  };

  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-foreground">
        <AppBackground isTransitionView={true} />
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          className="relative z-20 bg-background"
          initial="initialState"
          animate="animateState"
          exit="exitState"
          onAnimationComplete={(e) => {
            if (e === 'animateState') {
              setIsTransitioning(false);
            }
          }}
          variants={{
            initialState: {
              clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
            },
            animateState: {
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              transition: {
                delay: SLIDE_DURATION,
                duration: SLIDE_DURATION,
                ease: SLIDE_EASE,
              },
            },
            exitState: {
              clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
              transition: {
                duration: SLIDE_DURATION,
                ease: SLIDE_EASE,
              },
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

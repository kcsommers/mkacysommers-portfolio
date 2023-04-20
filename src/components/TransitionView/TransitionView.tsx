import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { useTransition } from '../../context/use-transition';
import { AppBackground } from '../AppBackground/AppBackground';

const SLIDE_DURATION = 0.5;
const SLIDE_EASE = [0.66, 0.1, 0.9, 0.68];

export const TransitionView = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();
  const { setIsTransitioning } = useTransition();

  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-foreground transition-colors">
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

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useRef } from 'react';
import { useTransition } from '../../context/use-transition';
import { useWindowSize } from '../../utils/hooks/use-window-size';
import classNames from 'classnames';

type AppBackgroundProps = {
  isTransitionView?: boolean;
};

export const AppBackground = ({ isTransitionView }: AppBackgroundProps) => {
  const windowDims = useWindowSize();
  const { isTransitioning, setIsTransitioning } = useTransition();

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
    <div
      className={classNames(
        'fixed top-0 right-0 bottom-0 left-0 z-10',
        isTransitionView ? 'bg-foreground' : 'bg-background'
      )}
    >
      <div className="absolute left-0 w-full top-1/2 -translate-y-1/2 flex justify-center">
        <motion.div
          className="flex justify-center"
          style={{
            minWidth: `calc(100% + ${logoRefs.current[0]?.offsetWidth || 0}px)`,
          }}
          variants={isTransitionView && containerVariants}
          initial="hidden"
          animate={isTransitioning ? 'show' : 'hidden'}
        >
          {[...Array(logoCount).keys()].map((i) => (
            <motion.div
              key={`mkacy-logo-${i}`}
              className="flex-1 relative m-4 opacity-30"
              ref={(ref) => logoRefs.current.push(ref)}
              style={{
                height: `${logoHeght}px`,
                minWidth: '350px',
                maxWidth: '420px',
              }}
              variants={isTransitionView && logoVariants(i)}
            >
              {(i === logoCount - 2 || isTransitionView) && (
                <Image
                  src="https://res.cloudinary.com/kcsommers/image/upload/v1644788416/M%20Kacy%20Sommers/mkacysommers_logo2.png"
                  alt="M Kacy Sommers logo"
                  fill={true}
                  style={{ objectFit: 'contain' }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

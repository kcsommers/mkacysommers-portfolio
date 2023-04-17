import classNames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTransition } from '../../context/use-transition';
import { blurVariants } from '../../utils/animations/blur-variants';
import GithubIcon from '../svg/github.svg';
import LinkedInIcon from '../svg/linkedin-in.svg';

export const AppGutters = () => {
  const { isTransitioning } = useTransition();

  return (
    <>
      <motion.div
        className={classNames(
          'absolute top-8 w-[10%] flex items-center justify-center left-8 z-30',
          'tablet-landscape-up:fixed tablet-landscape-up:left-0 tablet-portrait-up:left-6'
        )}
        animate={isTransitioning ? 'animateState' : 'staticState'}
        variants={blurVariants}
      >
        <span>
          <Link
            className={classNames(
              'py-2 px-4 border-2 border-neutral-900 text-sm',
              'tablet-landscape-up:text-base'
            )}
            href="/"
          >
            MKS
          </Link>
        </span>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 h-screen w-full z-20 origin-top"
        animate={isTransitioning ? 'animateState' : 'staticState'}
        variants={blurVariants}
      >
        <div
          className={classNames(
            'flex flex-col justify-end items-center absolute h-full bottom-0 left-0',
            'min-w-[10%] max-w-[10%]'
          )}
        >
          <a
            href="https://www.linkedin.com/in/kacy-sommers/"
            className="transition-all origin-bottom hover:scale-125 my-4 w-[13px] tablet-portrait-up:w-[18px]"
          >
            {/* @ts-ignore */}
            <LinkedInIcon className="w-full" />
          </a>
          <a
            href="https://github.com/kcsommers?tab=repositories"
            className="transition-all origin-bottom hover:scale-125 my-4 w-[15px] tablet-portrait-up:w-[20px]"
          >
            {/* @ts-ignore */}
            <GithubIcon className="w-full" />
          </a>
          <div className="h-[22vh] w-[1px] mt-2 bg-neutral-900"></div>
        </div>

        <div
          className={classNames(
            'flex flex-col justify-end items-center absolute bottom-0 right-0',
            'min-w-[10%] max-w-[10%]'
          )}
        >
          <a
            href="mailto:kacysommers@gmail.com"
            className="transition-all hover:tracking-widest tablet-portrait-up:text-base text-xs"
            style={{
              transform: 'rotate(90deg) translateX(-50%)',
            }}
          >
            kacysommers@gmail.com
          </a>
          <div className="h-[22vh] w-[1px] mt-2 bg-neutral-900"></div>
        </div>
      </motion.div>
    </>
  );
};

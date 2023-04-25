import classNames from 'classnames';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { useTransition } from '../../context/use-transition';
import { useTheme } from '../../themes/use-theme';
import { blurVariants } from '../../utils/animations/blur-variants';
import GithubIcon from '../svg/github.svg';
import LinkedInIcon from '../svg/linkedin-in.svg';
import MoonIcon from '../svg/moon-solid.svg';
import SunIcon from '../svg/sun-solid.svg';
import Image from 'next/image';
import { useAssetCache } from '../../context/use-asset-cache';
import { Dispatch, SetStateAction } from 'react';

const JONI_LOGO_BLACK =
  'https://res.cloudinary.com/kcsommers/image/upload/v1682393412/M%20Kacy%20Sommers/joni_logo_black_sm.png';

const JONI_LOGO_BLACK_SOLID =
  'https://res.cloudinary.com/kcsommers/image/upload/v1682436150/M%20Kacy%20Sommers/joni_logo_black_sm_solid.png';

const JONI_LOGO_WHITE =
  'https://res.cloudinary.com/kcsommers/image/upload/v1682393420/M%20Kacy%20Sommers/joni_logo_white_sm.png';

const JONI_LOGO_WHITE_SOLID =
  'https://res.cloudinary.com/kcsommers/image/upload/v1682436152/M%20Kacy%20Sommers/joni_logo_white_sm_solid.png';

type AppGuttersProps = {
  setShowJoni: Dispatch<SetStateAction<boolean>>;
  setJoniSelected: Dispatch<SetStateAction<boolean>>;
  joniSelected: boolean;
};

export const AppGutters = ({
  setShowJoni,
  setJoniSelected,
  joniSelected,
}: AppGuttersProps) => {
  const { isTransitioning } = useTransition();
  const { currentTheme, setCurrentTheme } = useTheme();

  const { imageCache } = useAssetCache();

  const themeToggleVariants: Variants = {
    initial: {
      opacity: 0,
      rotate: '-135deg',
    },
    show: {
      opacity: 1,
      rotate: '0deg',
      scale: 1,
    },
    exit: {
      opacity: 0,
      rotate: '135deg',
      scale: 0.5,
    },
  };

  return (
    <>
      <motion.div
        className={classNames(
          'absolute top-8 w-[10%] flex items-center justify-center left-8 z-50',
          'tablet-landscape-up:fixed tablet-landscape-up:left-0 tablet-portrait-up:left-6'
        )}
        animate={isTransitioning ? 'blurState' : 'nonBlurState'}
        variants={blurVariants()}
      >
        <Link
          className={classNames(
            'py-2 px-4 border-2 border-primary text-sm',
            'tablet-landscape-up:text-base text-foreground transition-colors'
          )}
          href="/"
        >
          MKS
        </Link>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 h-screen w-full z-20 origin-top"
        animate={isTransitioning ? 'blurState' : 'nonBlurState'}
        variants={blurVariants()}
      >
        <div
          className={classNames(
            'flex flex-col justify-end items-center absolute h-full bottom-0 left-0',
            'min-w-[10%] max-w-[10%]'
          )}
        >
          <a
            href="https://www.linkedin.com/in/kacy-sommers/"
            className="transition-all origin-bottom hover:scale-125 my-4 w-[13px] w tablet-portrait-up:w-[18px]"
          >
            <LinkedInIcon className="w-full fill-foreground transition-colors" />
          </a>
          <a
            href="https://github.com/kcsommers?tab=repositories"
            className="transition-all origin-bottom hover:scale-125 my-4 w-4 tablet-portrait-up:w-5"
          >
            <GithubIcon className="w-full fill-foreground transition-colors" />
          </a>
          <button
            className={classNames(
              'transition-all origin-bottom hover:scale-125 my-4 inline-block relative w-3 h-4',
              'tablet-portrait-up:w-4'
            )}
            onClick={() =>
              setCurrentTheme((prevTheme) =>
                prevTheme === 'DARK' ? 'LIGHT' : 'DARK'
              )
            }
          >
            <AnimatePresence>
              {currentTheme === 'LIGHT' ? (
                <motion.span
                  key="dark-theme-logo"
                  className="inline-block absolute w-full h-full top-0 left-0"
                  initial="initial"
                  animate="show"
                  exit="exit"
                  transition={{
                    type: 'spring',
                  }}
                  variants={themeToggleVariants}
                >
                  <MoonIcon className="w-full fill-foreground transition-colors" />
                </motion.span>
              ) : (
                <motion.span
                  key="light-theme-logo"
                  className="inline-block absolute w-[115%] h-full top-0 left-0"
                  initial="initial"
                  animate="show"
                  exit="exit"
                  transition={{
                    type: 'spring',
                  }}
                  variants={themeToggleVariants}
                >
                  <SunIcon className="w-full fill-foreground transition-colors" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <div className="h-[22vh] w-[1px] mt-2 bg-primary"></div>
        </div>

        <div
          className={classNames(
            'flex flex-col justify-end items-center absolute bottom-0 right-0',
            'min-w-[10%] max-w-[10%]'
          )}
        >
          <a
            href="mailto:kacysommers@gmail.com"
            className="transition-all hover:tracking-widest tablet-portrait-up:text-base text-xs text-foreground"
            style={{
              transform: 'rotate(90deg) translateX(-50%)',
            }}
          >
            kacysommers@gmail.com
          </a>
          <span
            className="my-2 cursor-pointer"
            onMouseOver={() => setShowJoni(true)}
            onMouseOut={() => !joniSelected && setShowJoni(false)}
            onClick={() => setJoniSelected((prev) => !prev)}
          >
            {joniSelected ? (
              <Image
                src={
                  currentTheme === 'LIGHT'
                    ? imageCache.get(JONI_LOGO_BLACK_SOLID) ||
                      JONI_LOGO_BLACK_SOLID
                    : imageCache.get(JONI_LOGO_WHITE_SOLID) ||
                      JONI_LOGO_WHITE_SOLID
                }
                alt="Joni logo"
                width={40}
                height={15}
              />
            ) : (
              <Image
                src={
                  currentTheme === 'LIGHT'
                    ? imageCache.get(JONI_LOGO_BLACK) || JONI_LOGO_BLACK
                    : imageCache.get(JONI_LOGO_WHITE) || JONI_LOGO_WHITE
                }
                alt="Joni logo"
                width={40}
                height={15}
              />
            )}
          </span>
          <div className="h-[22vh] w-[1px] mt-2 bg-primary"></div>
        </div>
      </motion.div>
    </>
  );
};

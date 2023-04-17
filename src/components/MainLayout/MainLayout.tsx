import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useMemo, useRef } from 'react';
import { useTransition } from '../../context/use-transition';
import { useWindowSize } from '../../utils/hooks/use-window-size';
import { Nav } from '../Nav/Nav';
import GithubIcon from '../svg/github.svg';
import LinkedInIcon from '../svg/linkedin-in.svg';
import Link from 'next/link';

type MainLayoutProps = {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  pageTitle: string;
  pageSubtext?: string;
};

export const MainLayout = ({
  leftContent,
  rightContent,
  pageTitle,
  pageSubtext,
}: MainLayoutProps) => {
  const { isTransitioning } = useTransition();

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

  const blurVariants = {
    animateState: {
      filter: 'blur(20px)',
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 1,
      },
    },
    staticState: {
      filter: 'blur(0px)',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-screen w-full z-20 origin-top"
        animate={isTransitioning ? 'animateState' : 'staticState'}
        variants={blurVariants}
      >
        <div
          className={classNames(
            'flex flex-col justify-between items-center absolute h-full bottom-0 left-0',
            'min-w-[10%] max-w-[10%] pt-8'
          )}
        >
          <div className="flex justify-center">
            <Link className="py-2 px-4 border-2 border-neutral-900" href="/">
              MKS
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/kacy-sommers/"
              className="transition-all origin-bottom hover:scale-125 my-4"
            >
              {/* @ts-ignore */}
              <LinkedInIcon width={18} />
            </a>
            <a
              href="https://github.com/kcsommers?tab=repositories"
              className="transition-all origin-bottom hover:scale-125 my-4"
            >
              <GithubIcon />
            </a>
            <div className="h-[22vh] w-[1px] mt-2 bg-neutral-900"></div>
          </div>
        </div>

        <div
          className={classNames(
            'flex flex-col justify-end items-center absolute bottom-0 right-0',
            'min-w-[10%] max-w-[10%]'
          )}
        >
          <a
            href="mailto:kacysommers@gmail.com"
            className="transition-all hover:tracking-widest"
            style={{
              transform: 'rotate(90deg) translateX(-50%)',
            }}
          >
            kacysommers@gmail.com
          </a>
          <div className="h-[22vh] w-[1px] mt-2 bg-neutral-900"></div>
        </div>
      </motion.div>

      <div className="flex relative">
        <motion.div
          className="relative z-30 flex-1 mx-[10%] origin-top"
          animate={isTransitioning ? 'animateState' : 'staticState'}
          variants={blurVariants}
        >
          <div className="min-h-screen pb-16">
            <div className="flex flex-col tablet-landscape-up:flex-row">
              <div className="flex-[0.85] mt-[30vh] tablet-landscape-up:ml-[5%]">
                <h1 className="uppercase font-medium spacing tracking-widest text-lg">
                  {pageTitle}
                </h1>
                {pageSubtext && (
                  <h2 className="tracking-wide font-light mt-2">
                    {pageSubtext}
                  </h2>
                )}
                <div className="mt-8">
                  <Nav />
                </div>
                {leftContent}
              </div>
              <div className="flex-1">{rightContent}</div>
            </div>
          </div>
        </motion.div>

        <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-background">
          <div className="absolute left-0 w-full top-1/2 -translate-y-1/2 flex justify-center">
            <div
              className="flex justify-center"
              style={{
                minWidth: `calc(100% + ${
                  logoRefs.current[0]?.offsetWidth || 0
                }px)`,
              }}
            >
              {[...Array(logoCount).keys()].map((i) => (
                <div
                  key={`mkacy-logo-${i}`}
                  className="flex-1 relative m-4 opacity-30"
                  ref={(ref) => logoRefs.current.push(ref)}
                  style={{
                    height: `${logoHeght}px`,
                    minWidth: '350px',
                    maxWidth: '420px',
                  }}
                >
                  {i === logoCount - 2 && (
                    <Image
                      src="https://res.cloudinary.com/kcsommers/image/upload/v1644788416/M%20Kacy%20Sommers/mkacysommers_logo2.png"
                      alt="M Kacy Sommers logo"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

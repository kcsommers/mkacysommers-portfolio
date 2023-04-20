import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { useTransition } from '../../context/use-transition';
import { blurVariants } from '../../utils/animations/blur-variants';
import { useWindowSize } from '../../utils/hooks/use-window-size';
import { Nav } from '../Nav/Nav';

type MainLayoutProps = {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  pageTitle: string | ReactNode;
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

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="flex relative flex-1">
      <motion.div
        className="relative z-30 flex-1 mx-[10%] text-foreground transition-colors"
        animate={isTransitioning ? 'blurState' : 'nonBlurState'}
        variants={blurVariants()}
      >
        <div className="min-h-screen pb-24">
          <div className="flex flex-col items-start tablet-landscape-up:flex-row">
            <div
              className={classNames(
                'flex-[0.85] pt-[30vh] tablet-landscape-up:ml-[5%]',
                {
                  'sticky top-0': windowDims.width > 1025,
                }
              )}
            >
              <h1 className="uppercase font-medium spacing tracking-widest text-lg">
                {pageTitle}
              </h1>
              {pageSubtext && (
                <h2 className="tracking-wide font-light mt-2">{pageSubtext}</h2>
              )}
              <div className="mt-8">
                <Nav />
              </div>
              {leftContent}
            </div>

            <div className="flex-1 w-full">{rightContent}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

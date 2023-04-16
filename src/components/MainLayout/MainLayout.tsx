import Image from 'next/image';
import { ReactNode, useMemo, useRef } from 'react';
import { useWindowSize } from '../../utils/hooks/use-window-size';
import { GutterLayout } from '../GutterLayout/GutterLayout';
import { Nav } from '../Nav/Nav';

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

  return (
    <>
      <div className="relative z-20">
        <GutterLayout>
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
        </GutterLayout>
      </div>
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
                className="flex-1 relative m-4"
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
    </>
  );
};

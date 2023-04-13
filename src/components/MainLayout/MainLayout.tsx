import Link from 'next/link';
import { ReactNode } from 'react';
import { GutterLayout } from '../GutterLayout/GutterLayout';
import { Nav } from '../Nav/Nav';
import { MainBackground } from '../MainBackground/MainBackground';

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
      <MainBackground />
    </>
  );
};

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
          <div className="fixed left-0 top-8 w-[10%] flex justify-center">
            <Link className="py-2 px-4 border-2 border-neutral-900" href="/">
              MKS
            </Link>
          </div>

          <div className="min-h-screen">
            <div className="flex flex-col tablet-landscape-up:flex-row">
              <div className="flex-[0.85] mt-[50vh] ml-[10%] -translate-y-full">
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

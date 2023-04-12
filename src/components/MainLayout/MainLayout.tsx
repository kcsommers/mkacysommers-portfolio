import Link from 'next/link';
import { ReactNode } from 'react';
import { GutterLayout } from '../GutterLayout/GutterLayout';
import { Nav } from '../Nav/Nav';

type MainLayoutProps = {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  pageTitle: string;
  pageSubtext?: string;
  animationDelay?: number;
};

export const MainLayout = ({
  leftContent,
  rightContent,
  pageTitle,
  pageSubtext,
  animationDelay,
}: MainLayoutProps) => {
  return (
    <GutterLayout>
      <div className="fixed left-0 top-8 w-[10%] flex justify-center">
        <Link className="py-2 px-4 border-2 border-neutral-900" href="/">
          MKS
        </Link>
      </div>

      <div className="min-h-screen pb-16">
        <div className="flex flex-col tablet-landscape-up:flex-row">
          <div className="flex-[0.85] transition-all">
            <Nav
              title={pageTitle}
              subtext={pageSubtext}
              animationDelay={animationDelay}
            />
            {leftContent}
          </div>
          <div className="flex-1 transition-all">{rightContent}</div>
        </div>
      </div>
    </GutterLayout>
  );
};

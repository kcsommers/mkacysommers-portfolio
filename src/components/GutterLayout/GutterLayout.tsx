import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import GithubIcon from '../svg/github.svg';
import LinkedInIcon from '../svg/linkedin-in.svg';
import styles from './GutterLayout.module.scss';
import Link from 'next/link';

export const GutterLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="flex relative">
      <div className="fixed left-0 top-8 w-[10%] flex justify-center">
        <Link className="py-2 px-4 border-2 border-neutral-900" href="/">
          MKS
        </Link>
      </div>
      <>
        <div className={styles.social_nav_wrap}></div>
        <div
          className={classNames(
            'flex flex-col justify-end items-center fixed bottom-0 left-0',
            styles.social_nav_wrap
          )}
        >
          <a
            href="https://www.linkedin.com/in/kacy-sommers/"
            className="transition-all origin-bottom hover:scale-125 my-4"
          >
            {/* @ts-ignore */}
            <LinkedInIcon width={18} />
          </a>
          <a
            href="https://github.com/kcsommers?tab=repositories"
            className="my-4"
          >
            <GithubIcon />
          </a>
          <div className="h-[22vh] w-[1px] mt-2 bg-neutral-900"></div>
        </div>
      </>

      <div className="flex-1">{children}</div>

      <>
        <div className={styles.email_wrap}></div>
        <div
          className={classNames(
            'flex flex-col justify-end items-center fixed bottom-0 right-0',
            styles.email_wrap
          )}
        >
          <a href="mailto:kacysommers@gmail.com">kacysommers@gmail.com</a>
          <div className="h-[22vh] w-[1px] mt-2 bg-neutral-900"></div>
        </div>
      </>
    </div>
  );
};

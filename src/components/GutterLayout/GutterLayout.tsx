import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import GithubIcon from '../svg/github.svg';
import LinkedInIcon from '../svg/linkedin-in.svg';
import styles from './GutterLayout.module.scss';

export const GutterLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="flex">
      <div
        className={classNames(
          'flex flex-col justify-end items-center',
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

      <div className="flex-1">{children}</div>

      <div
        className={classNames(
          'flex flex-col justify-end items-center',
          styles.email_wrap
        )}
      >
        <a href="mailto:kacysommers@gmail.com">kacysommers@gmail.com</a>
        <div className="h-[22vh] w-[1px] mt-2 bg-neutral-900"></div>
      </div>
    </div>
  );
};

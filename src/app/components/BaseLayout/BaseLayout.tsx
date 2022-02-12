import { FC, ReactNode } from 'react';
import { Nav } from '../Nav';
import styles from './BaseLayout.module.scss';

interface IBaseLayoutProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  pageTitle: string;
  pageSubtext?: string;
  animationDelay?: number;
}

export const BaseLayout: FC<IBaseLayoutProps> = ({
  leftContent,
  rightContent,
  pageTitle,
  pageSubtext,
  animationDelay,
}) => {
  return (
    <div className={styles.layoutWrap}>
      <div className={styles.layoutWrapInner}>
        <div className={styles.pageContentLeft}>
          <div className={styles.navWrap}>
            <Nav
              title={pageTitle}
              subtext={pageSubtext}
              animationDelay={animationDelay}
            />
          </div>
          <div className={styles.pageContentLeftInner}>{leftContent}</div>
        </div>
        <div className={styles.pageContentRight}>
          <div className={styles.pageContentRightInner}>{rightContent}</div>
        </div>
      </div>
    </div>
  );
};
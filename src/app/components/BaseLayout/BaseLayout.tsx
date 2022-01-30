import { FC, ReactNode } from 'react';
import { Nav } from '../Nav';
import styles from './BaseLayout.module.scss';

interface ILayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  pageTitle: string;
  pageSubtext?: string;
}

export const BaseLayout: FC<ILayoutProps> = ({
  leftContent,
  rightContent,
  pageTitle,
  pageSubtext,
}) => {
  return (
    <div className={styles.layoutWrap}>
      <div className={styles.layoutWrapInner}>
        <div className={styles.pageContentLeft}>
          <Nav title={pageTitle} subtext={pageSubtext} />
          <div className={styles.pageContentLeftInner}>{leftContent}</div>
        </div>
        <div className={styles.pageContentRight}>{rightContent}</div>
      </div>
    </div>
  );
};

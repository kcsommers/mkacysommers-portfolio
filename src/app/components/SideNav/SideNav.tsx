import { FC } from 'react';
import styles from './SideNav.module.scss';

export const SideNav: FC = () => {
  return (
    <div className={styles.sideNavWrap}>
      <div className={styles.sideNavItem}>
        <a href="#">gh</a>
      </div>
      <div className={styles.sideNavItem}>
        <a href="#">li</a>
      </div>
      <div className={styles.sideNavItem}>
        <a href="#">resume</a>
      </div>
    </div>
  );
};

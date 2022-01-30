import { FC } from 'react';
import { Nav } from '../../components';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.homeWrapInner}>
        <div className={styles.homeNavWrap}>
          <Nav
            title="M Kacy Sommers"
            subtext="Web Developer. Javascript Professional."
          />
        </div>
      </div>
    </div>
  );
};

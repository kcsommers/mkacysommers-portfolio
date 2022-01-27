import { FC } from 'react';
import { Nav } from '../../components';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.homeWrapInner}>
        <div className={styles.homeNavWrap}>
          <div className={styles.homeNavWrapInner}>
            <h3>M Kacy Sommers</h3>
            <p>Web Developer. Javascript Professional.</p>
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
};

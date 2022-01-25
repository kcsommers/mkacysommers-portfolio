import { FC } from 'react';
import { Nav } from '../../components';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.homeWrapInner}>
        <div className={styles.homeIntroWrap}>
          <h3>M Kacy Sommers</h3>
          <p>Web Developer. Javascript Professional.</p>
          <Nav />
        </div>
      </div>
      <div className={styles.logoWrap}>
        <img
          src="https://res.cloudinary.com/kcsommers/image/upload/v1643094250/mksommerslogo.png"
          alt="M Kacy Sommers logo"
        />
      </div>
    </div>
  );
};

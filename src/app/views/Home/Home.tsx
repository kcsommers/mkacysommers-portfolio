import { FC } from 'react';
import { Nav } from '../../components';
import { BaseView } from '../BaseView';
import styles from './Home.module.scss';

export const Home: FC = () => {
  const leftView = (
    <>
      <h3>M Kacy Sommers</h3>
      <p className={styles.blurb}>Web Developer. Javascript Professional.</p>
      <Nav />
    </>
  );

  const rightView = (
    <div className={styles.logoWrap}>
      <img
        src="https://res.cloudinary.com/kcsommers/image/upload/v1643094250/mksommerslogo.png"
        alt="M Kacy Sommers logo"
      />
    </div>
  );

  return <BaseView left={leftView} right={rightView} />;
};

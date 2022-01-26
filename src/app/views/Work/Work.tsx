import { FC } from 'react';
import { Nav } from '../../components';
import styles from './Work.module.scss';

export const Work: FC = () => {
  return (
    <div className={styles.workWrap}>
      <div className={styles.workNavWrap}>
        <h3>Work</h3>
        <Nav />
      </div>
      <div className={styles.workBlurbWrap}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          earum sapiente veritatis saepe, maiores facere odit aut sunt nesciunt
          cum fugit quae omnis doloremque provident culpa, sed amet ducimus
          nobis?
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          earum sapiente veritatis saepe, maiores facere odit aut sunt nesciunt
          cum fugit quae omnis doloremque provident culpa, sed amet ducimus
          nobis?
        </p>
      </div>
    </div>
  );
};

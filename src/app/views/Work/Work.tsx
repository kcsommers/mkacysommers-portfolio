import { FC } from 'react';
import { Nav } from '../../components';
import styles from './Work.module.scss';

export const Work: FC = () => {
  return (
    <div className={styles.workWrap}>
      <div className={styles.workWrapInner}>
        <div className={styles.workIntroWrap}>
          <h3>Work</h3>
          <Nav />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            earum sapiente veritatis saepe, maiores facere odit aut sunt
            nesciunt cum fugit quae omnis doloremque provident culpa, sed amet
            ducimus nobis?
          </p>
        </div>
      </div>
    </div>
  );
};

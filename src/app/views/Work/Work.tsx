import { FC } from 'react';
import { Nav } from '../../components';
import { IProject, projects } from '../../core';
import styles from './Work.module.scss';

export const Work: FC = () => {
  return (
    <div className={styles.workWrap}>
      <div className={styles.workWrapInner}>
        <div className={styles.workNavWrap}>
          <div className={styles.workNavWrapInner}>
            <h3>Work</h3>
            <Nav />
          </div>
          <div className={styles.workBlurbWrap}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              earum sapiente veritatis saepe, maiores facere odit aut sunt
              nesciunt cum fugit quae omnis doloremque provident culpa, sed amet
              ducimus nobis?
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              earum sapiente veritatis saepe, maiores facere odit aut sunt
              nesciunt cum fugit quae omnis doloremque provident culpa, sed amet
              ducimus nobis?
            </p>
          </div>
        </div>
        <div className={styles.projectsWrap}>
          {projects.map((p: IProject) => {
            return (
              <div className={styles.projectWrap}>
                <h2>{p.title}</h2>
                <img src={p.images[0]} alt={p.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import { motion } from 'framer-motion';
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
              <motion.div
                key={p.title}
                className={styles.projectWrap}
                initial="enter"
                animate="center"
                exit="exit"
                variants={{
                  enter: {
                    opacity: 0,
                    y: '25px',
                  },
                  center: {
                    opacity: 1,
                    y: '0',
                  },
                  exit: {
                    opacity: 0,
                    y: '25px',
                    transition: {
                      delay: 0,
                      duration: 0.15,
                    },
                  },
                }}
                transition={{
                  delay: 1.5,
                  duration: 0.5,
                }}
              >
                <h2>{p.title}</h2>
                <img src={p.images[0]} alt={p.title} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

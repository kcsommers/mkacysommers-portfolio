import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedText, Nav } from '../../components';
import { IProject, projects } from '../../core';
import styles from './Work.module.scss';

export const Work: FC = () => {
  return (
    <div className={styles.workWrap}>
      <div className={styles.workWrapInner}>
        <div className={styles.workNavWrap}>
          <div className={styles.workNavWrapInner}>
            <h3 className="animated-text-wrap">
              <AnimatedText delay={1.25}>Work</AnimatedText>
            </h3>
            <span className="animated-text-wrap">
              <AnimatedText delay={1.35}>
                <Nav />
              </AnimatedText>
            </span>
          </div>
          <div className={styles.workBlurbWrap}>
            <p className="animated-text-wrap">
              <AnimatedText delay={1.45}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci earum sapiente veritatis saepe, maiores facere odit aut
                sunt nesciunt cum fugit quae omnis doloremque provident culpa,
                sed amet ducimus nobis?
              </AnimatedText>
            </p>
            <br />
            <p className="animated-text-wrap">
              <AnimatedText delay={1.55}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci earum sapiente veritatis saepe, maiores facere odit aut
                sunt nesciunt cum fugit quae omnis doloremque provident culpa,
                sed amet ducimus nobis?
              </AnimatedText>
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
                    scale: 1.1,
                  },
                  center: {
                    opacity: 1,
                    scale: 1,
                  },
                  exit: {
                    opacity: 0,
                    scale: 1.1,
                    transition: {
                      delay: 0,
                      duration: 0.25,
                    },
                  },
                }}
                transition={{
                  delay: 1.75,
                  duration: 0.5,
                }}
              >
                <Link to={`/work/${p.title}`}>
                  <h2>{p.title}</h2>
                  <img src={p.images[0]} alt={p.title} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

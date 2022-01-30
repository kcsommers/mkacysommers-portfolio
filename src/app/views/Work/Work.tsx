import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatedText, BaseLayout, Nav } from '../../components';
import { IProject, projects } from '../../core';
import { ProjectView } from '../Project';
import styles from './Work.module.scss';

export const Work: FC = () => {
  const [params] = useSearchParams();
  const projectParam = params.get('p');
  const selectedProject = useMemo<IProject | null>(() => {
    if (!projectParam) {
      return null;
    }
    return projects.find((_p) => _p.param === projectParam)!;
  }, [projectParam]);

  return !selectedProject ? (
    <BaseLayout
      pageTitle="Work"
      leftContent={
        <>
          <p className="animated-text-wrap">
            <AnimatedText delay={1.45}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              earum sapiente veritatis saepe, maiores facere odit aut sunt
              nesciunt cum fugit quae omnis doloremque provident culpa, sed amet
              ducimus nobis?
            </AnimatedText>
          </p>
          <br />
          <p className="animated-text-wrap">
            <AnimatedText delay={1.55}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              earum sapiente veritatis saepe, maiores facere odit aut sunt
              nesciunt cum fugit quae omnis doloremque provident culpa, sed amet
              ducimus nobis?
            </AnimatedText>
          </p>
        </>
      }
      rightContent={projects.map((p: IProject) => {
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
            <Link to={`/work?p=${p.param}`}>
              <h2>{p.title}</h2>
              <img src={p.images[0]} alt={p.title} />
            </Link>
          </motion.div>
        );
      })}
    />
  ) : (
    <ProjectView project={selectedProject!} />
  );
};

import { motion } from 'framer-motion';
import { FC, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatedText, BaseLayout } from '../../components';
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
    const _projectTypes: string[] = Object.keys(projects);
    let _selectedProject: IProject;
    for (let i = 0; i < _projectTypes.length; i++) {
      if (_selectedProject!) {
        break;
      }
      for (let j = 0; j < projects[_projectTypes[i]].length; j++) {
        if (projects[_projectTypes[i]][j].param === projectParam) {
          _selectedProject = projects[_projectTypes[i]][j];
          break;
        }
      }
    }
    return _selectedProject!;
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
      rightContent={Object.keys(projects).map((_type: string) => {
        return (
          <>
            <h3>{_type}</h3>
            {projects[_type].map((_p: IProject) => (
              <motion.div
                key={_p.title}
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
                <Link to={`/work?p=${_p.param}`}>
                  <h2>{_p.title}</h2>
                  <img src={_p.coverImage} alt={_p.title} />
                </Link>
              </motion.div>
            ))}
          </>
        );
      })}
    />
  ) : (
    <ProjectView project={selectedProject!} />
  );
};

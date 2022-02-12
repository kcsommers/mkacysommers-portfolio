import { motion } from 'framer-motion';
import { FC, RefObject, useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BaseLayout } from '../../components';
import { IProject, projects } from '../../core';
import { ProjectView } from '../Project';
import styles from './Work.module.scss';
import useDynamicRefs from 'use-dynamic-refs';

export const Work: FC = () => {
  const [params] = useSearchParams();

  const [onPage, setOnPage] = useState(false);

  const [getRef, setRef] = useDynamicRefs();

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
    window.scrollTo({ top: 0 });
    return _selectedProject!;
  }, [projectParam]);

  useEffect(() => {
    setOnPage(true);
  }, []);

  useEffect(() => {
    const _intersectionCallback = (_entries: IntersectionObserverEntry[]) => {
      _entries.forEach((_entry: IntersectionObserverEntry) => {
        if (
          _entry.target.getBoundingClientRect().y < 0 ||
          _entry.intersectionRatio >= 0.25
        ) {
          _entry.target.classList.add(styles.projectVisible);
          observer.unobserve(_entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(_intersectionCallback, {
      threshold: 0.25,
    });
    Object.keys(projects).forEach((_type: string) => {
      projects[_type].forEach((_project: IProject) => {
        const _el = getRef(_project.title) as RefObject<Element>;
        observer.observe(_el.current!);
      });
    });
  }, []);

  return !selectedProject ? (
    <BaseLayout
      pageTitle="Work"
      animationDelay={0}
      leftContent={<></>}
      rightContent={
        <div className={styles.workRightWrap}>
          {Object.keys(projects).map((_type: string) => (
            <div className={styles.projectTypeWrap} key={_type}>
              <h4 className={styles.typeHeader}>{_type}</h4>
              {projects[_type].map((_p: IProject) => (
                <div
                  key={_p.title}
                  ref={setRef(_p.title) as any}
                  className={styles.projectWrap}
                >
                  <motion.div
                    className={styles.projectWrapInner}
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
                      delay: 1.45,
                      duration: 0.5,
                    }}
                  >
                    <Link to={`/work?p=${_p.param}`}>
                      <h2>{_p.title}</h2>
                      <img src={_p.coverImage} alt={_p.title} />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    />
  ) : (
    <ProjectView project={selectedProject!} />
  );
};

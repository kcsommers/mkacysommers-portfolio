import { PageWrap } from '@components';
import { Colors, projects } from '@core';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { RouteComponentProps } from 'react-router';
import styles from './ProjectsPage.module.scss';

interface ProjectsPageProps extends RouteComponentProps {}

export const ProjectsPage = ({}: ProjectsPageProps) => {
  const projectCategories = useMemo(() => Object.keys(projects), []);

  return (
    <PageWrap
      rgb={Colors.$color3.rgb}
      variants={{
        exit: {
          opacity: 0,
          scale: 1.15,
          transition: {
            delay: 0,
            duration: 0.5,
            type: 'spring',
          },
        },
      }}
    >
      <div className={styles.projectsWrap}>
        {projectCategories.map((category) => (
          <div className={styles.projectCategoryWrap}>
            <h3>{category}</h3>
            {projects[category].map((p, i) => (
              <motion.div
                className={styles.projectImgWrap}
                key={p.title}
                initial="enter"
                animate="center"
                exit="exit"
                variants={{
                  enter: {
                    opacity: 0,
                    y: '50%',
                  },
                  center: {
                    opacity: 1,
                    y: '0%',
                  },
                }}
                transition={{
                  delay: 0.25 * i + 0.5,
                  duration: 1,
                  type: 'spring',
                }}
              >
                <img
                  className={styles.projectImg}
                  src={p.images[0]}
                  alt={p.title}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </PageWrap>
  );
};

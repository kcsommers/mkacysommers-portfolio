import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProject, IProjectSection } from '../../core';
import styles from './Project.module.scss';

interface IProjectViewProps {
  project: IProject;
}

const slideUpVariants = {
  enter: {
    opacity: 0,
    y: '50%',
  },
  center: {
    opacity: 1,
    y: 0,
  },
};

const DURATION = 0.75;

export const ProjectView: FC<IProjectViewProps> = ({ project }) => {
  return (
    <div className={styles.projectViewWrap}>
      <motion.div
        className={styles.backBtnWrap}
        initial="enter"
        animate="center"
        variants={slideUpVariants}
        transition={{
          duration: DURATION,
        }}
      >
        <Link to="/work" className={styles.backBtn}>
          <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
          Back to projects
        </Link>
      </motion.div>
      <motion.h2
        className={styles.projectTitle}
        initial="enter"
        animate="center"
        variants={slideUpVariants}
        transition={{
          duration: DURATION,
          delay: 0.25,
        }}
      >
        {project.title}
      </motion.h2>
      {project.roles && (
        <span className={styles.roles}>{project.roles.join(', ')}</span>
      )}
      <motion.h3
        className={styles.projectBlurb}
        initial="enter"
        animate="center"
        variants={slideUpVariants}
        transition={{
          duration: DURATION,
          delay: 0.5,
        }}
      >
        {project.blurb}
      </motion.h3>
      {project.sections.map((_section: IProjectSection) => (
        <>
          {_section.text && (
            <motion.p
              className={styles.sectionText}
              style={_section.text.styles}
              initial="enter"
              animate="center"
              variants={slideUpVariants}
              transition={{
                duration: DURATION,
                delay: 0.75,
              }}
            >
              {_section.text.content}
            </motion.p>
          )}
          {(_section.images || []).map((_url: string) => (
            <motion.div
              className={styles.projectImgWrap}
              initial="enter"
              animate="center"
              variants={slideUpVariants}
              transition={{
                duration: DURATION,
                delay: 0.75,
              }}
            >
              <img src={_url} alt={project.title} />
            </motion.div>
          ))}
        </>
      ))}
    </div>
  );
};

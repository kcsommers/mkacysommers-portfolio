import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProject } from '../../core';
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
      <motion.p
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
      </motion.p>
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
        <img src={project.images[0]} alt={project.title} />
      </motion.div>
      <motion.p
        className={styles.projectDescription}
        initial="enter"
        animate="center"
        variants={slideUpVariants}
        transition={{
          duration: DURATION,
          delay: 0.75,
        }}
      >
        {project.description}
      </motion.p>
      {project.images.slice(1).map((_url: string) => (
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
    </div>
  );
};

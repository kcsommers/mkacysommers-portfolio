import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProject, IProjectSection } from '../../core';
import styles from './Project.module.scss';

interface IProjectViewProps {
  project: IProject;
  delayAnimation?: boolean;
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

export const ProjectView: FC<IProjectViewProps> = ({
  project,
  delayAnimation,
}) => {
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
          <FontAwesomeIcon icon={faAngleLeft as IconProp}></FontAwesomeIcon>
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
          delay: delayAnimation ? 1.55 : 0.1,
        }}
      >
        {project.title}
      </motion.h2>
      {project.roles && (
        <motion.span
          className={styles.roles}
          initial="enter"
          animate="center"
          variants={slideUpVariants}
          transition={{
            duration: DURATION,
            delay: delayAnimation ? 1.65 : 0.2,
          }}
        >
          {project.roles.join(', ')}
        </motion.span>
      )}
      <motion.div
        className={styles.projectImgWrap}
        initial="enter"
        animate="center"
        variants={slideUpVariants}
        transition={{
          duration: DURATION,
          delay: delayAnimation ? 1.75 : 0.3,
        }}
      >
        <img src={project.coverImage} alt={project.title} />
      </motion.div>
      <motion.h3
        className={styles.projectBlurb}
        initial="enter"
        animate="center"
        variants={slideUpVariants}
        transition={{
          duration: DURATION,
          delay: delayAnimation ? 1.85 : 0.4,
        }}
      >
        {project.blurb}
      </motion.h3>
      <div className={styles.projectDetailsWrap}>
        <div className={styles.technologiesWrap}>
          <h4>Technologies</h4>
          <p>{project.tools.join(', ')}</p>
        </div>
        {project.links && (
          <div className={styles.linksWrap}>
            <h4>Links</h4>
            {project.links.github && <a href={project.links.github}>github</a>}
            {project.links.site && <a href={project.links.site}>site</a>}
          </div>
        )}
      </div>
      {project.sections.map((_section: IProjectSection) => (
        <div key={Math.random()}>
          {_section.text && (
            <motion.p
              className={styles.sectionText}
              style={_section.text.styles}
              initial="enter"
              animate="center"
              variants={slideUpVariants}
              transition={{
                duration: DURATION,
                delay: delayAnimation ? 1.95 : 0.5,
              }}
            >
              {_section.text.content}
            </motion.p>
          )}
          {(_section.images || []).map((_url: string) => (
            <motion.div
              key={_url}
              className={styles.projectImgWrap}
              initial="enter"
              animate="center"
              variants={slideUpVariants}
              transition={{
                duration: DURATION,
                delay: delayAnimation ? 1.95 : 0.5,
              }}
            >
              <img src={_url} alt={project.title} />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

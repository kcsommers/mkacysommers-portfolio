import { motion } from 'framer-motion';
import resume from '../../../assets/images/resume/MKacySommers_resume.svg';
import { AnimatedText, Button, Nav } from '../../components';
import styles from './Resume.module.scss';

export const ResumeView = () => {
  return (
    <>
      <div className={styles.resumeWrap}>
        <div className={styles.resumeWrapInner}>
          <div className="nav-wrap">
            <div className="nav-wrap-inner">
              <h3 className="animated-text-wrap">
                <AnimatedText delay={1.25}>Resume</AnimatedText>
              </h3>
              <span className="animated-text-wrap">
                <AnimatedText delay={1.35}>
                  <Nav />
                </AnimatedText>
              </span>
              <div className={`${styles.downloadBtnWrap} animated-text-wrap`}>
                <AnimatedText delay={1.45}>
                  <Button text="Download" />
                </AnimatedText>
              </div>
            </div>
          </div>
          <motion.div
            className={styles.resumeImgWrap}
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
            <img src={resume} alt="M Kacy Sommers Resume" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

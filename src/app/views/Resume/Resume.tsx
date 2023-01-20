import { motion } from 'framer-motion';
import { AnimatedText, BaseLayout, Button } from '../../components';
import styles from './Resume.module.scss';
import resume from './MKacySommers-resume.pdf';

export const ResumeView = () => {
  const downloadResume = () => {
    const _a: HTMLAnchorElement = document.createElement('a');
    _a.href = resume;
    _a.download = 'M Kacy Sommers Resume';
    _a.target = '_blank';
    _a.click();
  };

  return (
    <BaseLayout
      pageTitle="Resume"
      leftContent={
        <div className={`${styles.downloadBtnWrap} animated-text-wrap`}>
          <AnimatedText delay={1.45}>
            <Button text="Download" onClick={downloadResume} />
          </AnimatedText>
        </div>
      }
      rightContent={
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
          <img
            src="https://res.cloudinary.com/kcsommers/image/upload/v1674185811/M%20Kacy%20Sommers/MKacySommers-resume.png"
            alt="M Kacy Sommers Resume"
          />
        </motion.div>
      }
    />
  );
};

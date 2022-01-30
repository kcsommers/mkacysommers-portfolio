import { motion } from 'framer-motion';
import { AnimatedText, BaseLayout, Button } from '../../components';
import styles from './Resume.module.scss';

export const ResumeView = () => {
  return (
    <BaseLayout
      pageTitle="Resume"
      leftContent={
        <div className={`${styles.downloadBtnWrap} animated-text-wrap`}>
          <AnimatedText delay={1.45}>
            <Button text="Download" />
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
            src="https://res.cloudinary.com/kcsommers/image/upload/v1643525897/M%20Kacy%20Sommers/MKacySommers-resume_01-2022.png"
            alt="M Kacy Sommers Resume"
          />
        </motion.div>
      }
    />
  );
};

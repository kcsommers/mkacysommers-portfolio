import { motion } from 'framer-motion';
import { FC } from 'react';
import { AnimatedText, ContactForm, Nav } from '../../components';
import styles from './Contact.module.scss';

export const Contact: FC = () => {
  const onFormSubmit = (success: boolean) => {
    console.log('form submitted:::: ', success);
  };

  return (
    <div className={styles.contactWrap}>
      <div className={styles.contactWrapInner}>
        <div className="nav-wrap">
          <Nav title="Contact" />
          <div className={styles.contactBlurbWrap}>
            <p className="animated-text-wrap">
              <AnimatedText delay={1.45}>
                I am always on the lookout for new projects, fresh challenges
                and kind folks to collaborate with. If you have an idea, an open
                position or just want to talk code, please get in touch.
              </AnimatedText>
            </p>
          </div>
        </div>
        <motion.div
          className={styles.contactFormWrap}
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
          <h2>Get in touch</h2>
          <ContactForm onSubmit={onFormSubmit} />
        </motion.div>
      </div>
    </div>
  );
};

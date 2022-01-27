import { motion } from 'framer-motion';
import { FC } from 'react';
import { AnimatedText, Nav } from '../../components';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.homeWrapInner}>
        <div className={styles.homeNavWrap}>
          <div className={styles.homeNavWrapInner}>
            <h3>
              <AnimatedText delay={1.5}>M Kacy Sommers"</AnimatedText>
            </h3>
            <p>
              <AnimatedText delay={1.5}>
                Web Developer. Javascript Professional.
              </AnimatedText>
            </p>
            <span>
              <AnimatedText delay={1.5}>
                <Nav />
              </AnimatedText>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

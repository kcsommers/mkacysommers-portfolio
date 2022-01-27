import { FC } from 'react';
import { AnimatedText, Nav } from '../../components';
import styles from './Home.module.scss';

export const Home: FC = () => {
  return (
    <div className={styles.homeWrap}>
      <div className={styles.homeWrapInner}>
        <div className={styles.homeNavWrap}>
          <div className={styles.homeNavWrapInner}>
            <h3 className="animated-text-wrap">
              <AnimatedText delay={1.25}>M Kacy Sommers</AnimatedText>
            </h3>
            <p className="animated-text-wrap">
              <AnimatedText delay={1.35}>
                Web Developer. Javascript Professional.
              </AnimatedText>
            </p>
            <span className="animated-text-wrap">
              <AnimatedText delay={1.45}>
                <Nav />
              </AnimatedText>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

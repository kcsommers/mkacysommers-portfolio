import resume from '../../../assets/images/resume/MKacySommers_resume.svg';
import { Nav } from '../../components';
import styles from './Resume.module.scss';

export const Resume = () => {
  return (
    <div className={styles.resumeWrap}>
      <div className={styles.resumeWrapInner}>
        <div className={styles.resumeNavWrap}>
          <div className={styles.resumeNavWrapInner}>
            <h3>Resume</h3>
            <Nav />
          </div>
        </div>
        <div className={styles.resumeImgWrap}>
          <img src={resume} alt="M Kacy Sommers Resume" />
        </div>
      </div>
    </div>
  );
};

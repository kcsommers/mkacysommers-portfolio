import resume from '../../../assets/images/resume/MKacySommers_resume.svg';
import { Nav } from '../../components';
import styles from './Resume.module.scss';

export const Resume = () => {
  return (
    <div className={styles.resumePageWrap}>
      <div className={styles.resumeIntroWrap}>
        <h3>Resume</h3>
        <Nav />
      </div>
      <div className={styles.resumeWrap}>
        <img src={resume} alt="M Kacy Sommers Resume" />
      </div>
    </div>
  );
};

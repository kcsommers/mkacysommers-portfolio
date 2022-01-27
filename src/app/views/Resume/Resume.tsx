import resume from '../../../assets/images/resume/MKacySommers_resume.svg';
import { Button, Nav } from '../../components';
import styles from './Resume.module.scss';

export const Resume = () => {
  return (
    <div className={styles.resumeWrap}>
      <div className={styles.resumeWrapInner}>
        <div className={styles.resumeNavWrap}>
          <div className={styles.resumeNavWrapInner}>
            <h3>Resume</h3>
            <Nav />
            <div className={styles.downloadBtnWrap}>
              <Button text="Download" />
            </div>
          </div>
        </div>
        <div className={styles.resumeImgWrap}>
          <img src={resume} alt="M Kacy Sommers Resume" />
        </div>
      </div>
    </div>
  );
};

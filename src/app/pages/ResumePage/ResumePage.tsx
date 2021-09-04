import { PageWrap } from '@components';
import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import resume from '@assets/images/resume/MKacySommers_resume.svg';
import styles from './ResumePage.module.scss';

interface ResumePageProps extends RouteComponentProps {}

export const ResumePage = ({}: ResumePageProps) => {
  return (
    <PageWrap rgb={Colors.$color5.rgb}>
      <div className={styles.resumeWrap}>
        <img src={resume} alt="M Kacy Sommers Resume" />
      </div>
    </PageWrap>
  );
};

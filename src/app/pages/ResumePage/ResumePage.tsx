import { PageBg } from '@components';
import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './ResumePage.module.scss';

interface ResumePageProps extends RouteComponentProps {}

export const ResumePage = ({}: ResumePageProps) => {
  return (
    <div className={styles.pageWrap}>
      <PageBg backgroundColor={Colors.$color5} />
    </div>
  );
};

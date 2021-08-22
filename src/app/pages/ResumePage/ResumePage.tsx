import { PageWrap } from '@components';
import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './ResumePage.module.scss';

interface ResumePageProps extends RouteComponentProps {}

export const ResumePage = ({}: ResumePageProps) => {
  return <PageWrap rgb={Colors.$color5.rgb} />;
};

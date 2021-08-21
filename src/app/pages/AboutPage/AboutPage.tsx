import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import { PageBg } from '@components';
import styles from './AboutPage.module.scss';

interface AboutPageProps extends RouteComponentProps {}

export const AboutPage = ({}: AboutPageProps) => {
  return (
    <div className={styles.pageWrap}>
      <PageBg rgb={Colors.$color2.rgb} />
    </div>
  );
};

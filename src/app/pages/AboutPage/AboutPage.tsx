import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './AboutPage.module.scss';

interface AboutPageProps extends RouteComponentProps {}

export const AboutPage = ({}: AboutPageProps) => {
  return (
    <div className={styles.pageWrap}>
      <div
        className="page-bg"
        style={{ backgroundColor: Colors.$color2 }}
      ></div>
    </div>
  );
};

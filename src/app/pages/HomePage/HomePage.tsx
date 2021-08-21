import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './HomePage.module.scss';

interface HomePageProps extends RouteComponentProps {}

export const HomePage = ({}: HomePageProps) => {
  return (
    <div className={styles.pageWrap}>
      <div
        className="page-bg"
        style={{ backgroundColor: Colors.$color6 }}
      ></div>
    </div>
  );
};

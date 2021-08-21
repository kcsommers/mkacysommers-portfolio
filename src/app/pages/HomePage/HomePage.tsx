import { PageBg } from '@components';
import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './HomePage.module.scss';

interface HomePageProps extends RouteComponentProps {}

export const HomePage = ({}: HomePageProps) => {
  return (
    <div className={styles.pageWrap}>
      <PageBg backgroundColor={Colors.$color6} />
    </div>
  );
};

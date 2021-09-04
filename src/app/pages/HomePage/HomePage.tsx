import { PageWrap } from '@components';
import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './HomePage.module.scss';

interface HomePageProps extends RouteComponentProps {}

export const HomePage = ({}: HomePageProps) => {
  return <PageWrap rgb={Colors.$color1.rgb} />;
};

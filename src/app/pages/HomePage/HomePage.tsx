import { PageWrap } from '@components';
import { RouteComponentProps } from 'react-router';
import styles from './HomePage.module.scss';

interface HomePageProps extends RouteComponentProps {}

export const HomePage = ({}: HomePageProps) => {
  return <PageWrap page="home" />;
};

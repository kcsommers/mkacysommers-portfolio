import { Navigator } from '@components';
import { RouteComponentProps } from 'react-router';

interface HomePageProps extends RouteComponentProps {}

export const HomePage = ({}: HomePageProps) => {
  return <Navigator />;
};

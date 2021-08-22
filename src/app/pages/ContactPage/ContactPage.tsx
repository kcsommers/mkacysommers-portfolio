import { PageWrap } from '@components';
import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './ContactPage.module.scss';

interface ContactPageProps extends RouteComponentProps {}

export const ContactPage = ({}: ContactPageProps) => {
  return <PageWrap rgb={Colors.$color3.rgb} />;
};

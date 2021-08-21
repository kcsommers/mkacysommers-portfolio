import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './ContactPage.module.scss';

interface ContactPageProps extends RouteComponentProps {}

export const ContactPage = ({}: ContactPageProps) => {
  return (
    <div className={styles.pageWrap}>
      <div
        className="page-bg"
        style={{ backgroundColor: Colors.$color3 }}
      ></div>
    </div>
  );
};

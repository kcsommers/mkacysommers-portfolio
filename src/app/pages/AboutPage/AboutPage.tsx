import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import { PageBg } from '@components';
import styles from './AboutPage.module.scss';
import { AnimatePresence } from 'framer-motion';

interface AboutPageProps extends RouteComponentProps {}

export const AboutPage = ({}: AboutPageProps) => {
  return (
    <div className={styles.pageWrap}>
      <AnimatePresence>
        <PageBg backgroundColor={Colors.$color2} />
      </AnimatePresence>
    </div>
  );
};

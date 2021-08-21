import { PageBg } from '@components';
import { Colors } from '@core';
import { RouteComponentProps } from 'react-router';
import styles from './ProjectsPage.module.scss';

interface ProjectsPageProps extends RouteComponentProps {}

export const ProjectsPage = ({}: ProjectsPageProps) => {
  return (
    <div className={styles.pageWrap}>
      <PageBg backgroundColor={Colors.$color4} />
    </div>
  );
};

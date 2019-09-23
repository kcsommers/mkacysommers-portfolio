import LazyLoadedImage from 'app/lib/components/lazy-loaded-image/lazy-loaded-image.component';
import { ImageFolders } from 'app/lib/core/ImageFolders.enum';
import React from 'react';
import styles from './Resume.module.scss';

type ResumePageProps = {
}
type ResumePageState = {
}

export class ResumePage extends React.Component<ResumePageProps, ResumePageState> {
  render() {
    return (
      <div className={styles.resumePageContainer}>
        <aside className={styles.resumeOptionsContainer}></aside>
        <section className={styles.resumeSection}>
          <div className={styles.resumeContainer}>
            <LazyLoadedImage imageName={'Resume'} folder={ImageFolders.RESUME}></LazyLoadedImage>
          </div>
        </section>
      </div>
    );
  }
}
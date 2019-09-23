import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoadedImage from 'app/lib/components/lazy-loaded-image/lazy-loaded-image.component';
import { Colors } from 'app/lib/core/Colors.enum';
import { ImageFolders } from 'app/lib/core/ImageFolders.enum';
import React from 'react';
import styles from './Resume.module.scss';

type ResumePageProps = {
}
type ResumePageState = {
}

export class ResumePage extends React.Component<ResumePageProps, ResumePageState> {
  componentDidMount() {
    window.scrollTo({ top: 0 });
  }
  render() {
    return (
      <div className={styles.resumePageContainer}>
        <aside className={styles.resumeOptionsContainer}>
          <div className={styles.resumeOptionIconsContainer}>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faDownload} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
            </div>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faSearchPlus} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
            </div>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faSearchMinus} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
            </div>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faLinkedin} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
            </div>
          </div>
        </aside>
        <section className={styles.resumeSection}>
          <div className={styles.resumeContainer}>
            <LazyLoadedImage imageName={'Resume'} folder={ImageFolders.RESUME}></LazyLoadedImage>
          </div>
        </section>
      </div>
    );
  }
}
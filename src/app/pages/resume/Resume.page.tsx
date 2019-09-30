import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoadedImage from 'app/lib/components/lazy-loaded-image/lazy-loaded-image.component';
import { Colors } from 'app/lib/core/Colors.enum';
import { ImageFolders } from 'app/lib/core/ImageFolders.enum';
import React from 'react';
import styles from './Resume.module.scss';
import { Link } from 'react-router-dom';

type ResumePageProps = {
}
type ResumePageState = {
}

export class ResumePage extends React.Component<ResumePageProps, ResumePageState> {
  private resumeRef: React.RefObject<HTMLDivElement>;
  constructor(props) {
    super(props);
    this.resumeRef = React.createRef();
  }
  private zoomIn() {
    const width = this.resumeRef.current.style.width;
    const widthMatch = width.match(/([0-9]*)%$/);
    const newWidth = widthMatch ? parseInt(widthMatch[1]) + 15 : 115;
    this.resumeRef.current.style.width = `${newWidth}%`;
  }
  private zoomOut() {
    const width = this.resumeRef.current.style.width;
    const widthMatch = width.match(/([0-9]*)%$/);
    const newWidth = widthMatch ? parseInt(widthMatch[1]) - 15 : 85;
    this.resumeRef.current.style.width = `${newWidth}%`;
  }
  render() {
    return (
      <div className={styles.resumePageContainer}>
        <aside className={styles.resumeOptionsContainer}>
          <div className={styles.resumeOptionIconsContainer}>
            <div className={styles.iconWrap}>
              <Link to="MKacySommers_Resume.pdf" target="_blank" download>
                <FontAwesomeIcon icon={faDownload} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
              </Link>

            </div>
            <div className={styles.iconWrap} onClick={this.zoomIn.bind(this)}>
              <FontAwesomeIcon icon={faSearchPlus} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
            </div>
            <div className={styles.iconWrap} onClick={this.zoomOut.bind(this)}>
              <FontAwesomeIcon icon={faSearchMinus} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
            </div>
            <div className={styles.iconWrap}>
              <FontAwesomeIcon icon={faLinkedin} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
            </div>
          </div>
        </aside>
        <section className={styles.resumeSection}>
          <div ref={this.resumeRef} className={[styles.resumeContainer].join(' ')}>
            <LazyLoadedImage imageName={'MKacySommers_resume'} folder={ImageFolders.RESUME}></LazyLoadedImage>
          </div>
        </section>
      </div>
    );
  }
}
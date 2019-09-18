import React from 'react';
import styles from './slider.module.scss';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';
import LazyLoadedImage from '../lazy-loaded-image/lazy-loaded-image.component';
import { Project } from 'app/lib/core/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

type SlideState = {
  imgIndex: number;
}

type SlideProps = {
  project: Project;
}

export class SlideComponent extends React.Component<SlideProps, SlideState> {
  private timer: number;
  constructor(props: SlideProps) {
    super(props);
    this.state = {
      imgIndex: 0
    }
  }

  componentDidMount() {
    this.resetTimer();
  }

  componentDidUpdate(prevProps: SlideProps) {
    if (prevProps.project.title !== this.props.project.title) {
      this.setState({ imgIndex: 0 });
      this.resetTimer();
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private advanceImage() {
    const { project } = this.props;
    this.setState((prevState: SlideState) => ({
      imgIndex: prevState.imgIndex === project.images.length - 1 ?
        0 : prevState.imgIndex + 1
    }));
  }

  private resetTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = window.setInterval(this.advanceImage.bind(this), 5000)
  }

  private changeProjectImage(index: number) {
    this.resetTimer();
    this.setState({ imgIndex: index });
  }

  render() {
    const { project } = this.props;
    const { imgIndex } = this.state;
    const dots = project.images.map((img, i) => {
      return (
        <span className={[styles.dotContainer, i === imgIndex && styles.currentDot].join(' ')} onClick={this.changeProjectImage.bind(this, i)}>
          <FontAwesomeIcon icon={faDotCircle}></FontAwesomeIcon>
        </span>
      );
    });
    return (
      <div className={styles.slideContainer}>
        <div className={styles.sliderProjectInfo}>
          <TextComponent
            color={'$background'}
            size={'2rem'}
            content={project.title}>
          </TextComponent>
          <TextComponent
            color={'$background'}
            content={project.tools.join(', ')}>
          </TextComponent>
          <div className={styles.snippetContainer}>
            <TextComponent
              color={'$background'}
              content={project.snippet}>
            </TextComponent>
          </div>
          <div className={styles.linkContainer}>
            <ButtonComponent size={'medium'} type={'primary'} text={'Live Site'} link={project.links.site}></ButtonComponent>
          </div>
          <div className={styles.linkContainer}>
            <ButtonComponent size={'medium'} type={'primary'} text={'Github'} link={project.links.github}></ButtonComponent>
          </div>
        </div>
        <div className={styles.sliderProjectImages}>
          <LazyLoadedImage
            folder={'projects'}
            imageName={project.images[imgIndex]}
          ></LazyLoadedImage>
          <div className={styles.dotNavContainer}>
            {dots}
          </div>
        </div>
      </div>
    );
  }
}

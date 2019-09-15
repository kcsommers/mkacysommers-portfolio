import React from 'react';
import styles from './slider.module.scss';
import { Project } from 'app/core/projects';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';
import LazyLoadedImage from '../lazy-loaded-image/lazy-loaded-image.component';

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

  render() {
    const { project } = this.props;
    const { imgIndex } = this.state;
    return (
      <div className={styles.slideContainer}>
        <div className={styles.sliderProjectInfo}>
          <TextComponent
            color={'$background'}
            content={project.title}>
          </TextComponent>
          <TextComponent
            color={'$background'}
            content={project.tools.join(', ')}>
          </TextComponent>
          <TextComponent
            color={'$background'}
            content={project.snippet}>
          </TextComponent>
          <ButtonComponent type={'dark'} text={'Live Site'} link={project.links.site}></ButtonComponent>
          <ButtonComponent type={'dark'} text={'Github'} link={project.links.github}></ButtonComponent>
        </div>
        <div className={styles.sliderProjectImages}>
          <LazyLoadedImage
            folder={'projects'}
            imageName={project.images[imgIndex]}
          ></LazyLoadedImage>
        </div>
      </div>
    );
  }
}

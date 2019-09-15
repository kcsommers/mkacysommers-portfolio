import React from 'react';
import { Project, projects } from '../../../core/projects';
import styles from './slider.module.scss';
import LazyLoadedImage from '../lazy-loaded-image/lazy-loaded-image.component';
import { SlideComponent } from './slide.component';

type SliderState = {
  current: Project
}

export class SliderComponent extends React.Component<{}, SliderState> {
  constructor(props: {}) {
    super(props);
    this.state = { current: projects[0] }
  }
  render() {
    const thumbs = projects.map(p => (
      <div className={styles.thumbContainer}>
        <LazyLoadedImage
          key={Math.floor(Math.random() * 10000)}
          imageName={p.images[0]}
        ></LazyLoadedImage>
      </div>
    ));
    return (
      <div className={styles.sliderContainer}>
        <section className={styles.sliderThumbsContainer}>
          {thumbs}
        </section>
        <section className={styles.slider}>
          <SlideComponent project={this.state.current}></SlideComponent>
        </section>
      </div>
    );
  }
}

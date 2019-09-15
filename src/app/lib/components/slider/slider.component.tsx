import React from 'react';
import { Project, projects } from '../../../core/projects';
import styles from './slider.module.scss';
import LazyLoadedImage from '../lazy-loaded-image/lazy-loaded-image.component';
import { SlideComponent } from './slide.component';

type SliderState = {
  currentIndex: number
}

export class SliderComponent extends React.Component<{}, SliderState> {
  constructor(props: {}) {
    super(props);
    this.state = { currentIndex: 0 }
  }
  private next() {
    this.setState((prevState: SliderState) => ({
      currentIndex: prevState.currentIndex === projects.length - 1 ? 0 : prevState.currentIndex + 1
    }))
  }
  private prev() {
    this.setState((prevState: SliderState) => ({
      currentIndex: prevState.currentIndex === 0 ? projects.length - 1 : prevState.currentIndex - 1
    }))
  }
  render() {
    const { currentIndex } = this.state;
    const thumbs = projects.map(p => (
      <div key={Math.floor(Math.random() * 10000)} className={styles.thumbContainer}>
        <LazyLoadedImage
          folder={'projects'}
          imageName={p.images[0]}
        ></LazyLoadedImage>
      </div>
    ));
    return (
      <div className={styles.sliderContainer}>
        <section className={styles.sliderThumbsContainer}>
          {thumbs}
        </section>
        <div className={styles.sliderNav}>
          <div className={styles.sliderNavArrowsContainer}>
            <span
              className={styles.sliderNavArrow}
              onClick={this.next.bind(this)}
            >
              Prev Project
            </span>
            <span
              className={styles.sliderNavArrow}
              onClick={this.prev.bind(this)}
            >
              Next Project
            </span>
          </div>
        </div>
        <section className={styles.slider}>
          <SlideComponent project={projects[currentIndex]}></SlideComponent>
        </section>
      </div>
    );
  }
}

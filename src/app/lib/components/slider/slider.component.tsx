import { projects } from 'app/lib/core/projects';
import React from 'react';
import LazyLoadedImage from '../lazy-loaded-image/lazy-loaded-image.component';
import { SlideComponent } from './slide.component';
import styles from './slider.module.scss';

enum SlideClasses {
  SLIDE_IN_LEFT = 'slideInLeft',
  SLIDE_IN_RIGHT = 'slideInRight',
  SLIDE_OUT_LEFT = 'slideOutLeft',
  SLIDE_OUT_RIGHT = 'slideOutRight',
  INITIAL = 'slideInitial'
}

type SliderState = {
  currentIndex: number;
  previousIndex: number;
  slide1Index: number;
  slide2Index: number;
  slide1Class: SlideClasses;
  slide2Class: SlideClasses;
  currentSlide: number;
}

export class SliderComponent extends React.Component<{}, SliderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentIndex: 0,
      previousIndex: -1,
      slide1Index: 0,
      slide2Index: 0,
      slide1Class: SlideClasses.SLIDE_IN_RIGHT,
      slide2Class: SlideClasses.INITIAL,
      currentSlide: 1
    }
  }
  private next() {
    this.setState((prevState: SliderState) => {
      const nextIndex = prevState.currentIndex === projects.length - 1 ? 0 : prevState.currentIndex + 1;
      const currentSlide = prevState.currentSlide === 1 ? 2 : 1;
      return {
        currentIndex: nextIndex,
        previousIndex: prevState.currentIndex,
        slide1Index: currentSlide === 2 ? prevState.slide1Index : nextIndex,
        slide2Index: currentSlide === 1 ? prevState.slide2Index : nextIndex,
        slide1Class: currentSlide === 2 ? SlideClasses.SLIDE_OUT_RIGHT : SlideClasses.SLIDE_IN_RIGHT,
        slide2Class: currentSlide === 1 ? SlideClasses.SLIDE_OUT_RIGHT : SlideClasses.SLIDE_IN_RIGHT,
        currentSlide
      }
    })
  }
  private prev() {
    this.setState((prevState: SliderState) => {
      const prevIndex = prevState.currentIndex === 0 ? projects.length - 1 : prevState.currentIndex - 1;
      const currentSlide = prevState.currentSlide === 1 ? 2 : 1;
      return {
        currentIndex: prevIndex,
        previousIndex: prevState.currentIndex,
        slide1Index: currentSlide === 1 ? prevState.slide1Index : prevIndex,
        slide2Index: currentSlide === 2 ? prevState.slide2Index : prevIndex,
        slide1Class: currentSlide === 1 ? SlideClasses.SLIDE_OUT_LEFT : SlideClasses.SLIDE_IN_LEFT,
        slide2Class: currentSlide === 2 ? SlideClasses.SLIDE_OUT_LEFT : SlideClasses.SLIDE_IN_LEFT,
        currentSlide
      }
    })
  }
  private changeProject(index: number) {
    if (index !== this.state.currentIndex) {
      this.setState((prevState: SliderState) => {
        const currentSlide = prevState.currentSlide === 1 ? 2 : 1;
        return {
          currentIndex: index,
          previousIndex: prevState.currentIndex,
          slide1Index: currentSlide === 1 ? prevState.slide1Index : index,
          slide2Index: currentSlide === 2 ? prevState.slide2Index : index,
          slide1Class: currentSlide === 1 ? SlideClasses.SLIDE_OUT_LEFT : SlideClasses.SLIDE_IN_LEFT,
          slide2Class: currentSlide === 2 ? SlideClasses.SLIDE_OUT_LEFT : SlideClasses.SLIDE_IN_LEFT,
          currentSlide
        }
      });
    }
  }
  render() {
    const { currentIndex, previousIndex, slide1Index, slide2Index, currentSlide, slide1Class, slide2Class } = this.state;
    const thumbs = projects.map((p, i) => (
      <div
        key={Math.floor(Math.random() * 10000)}
        className={[styles.thumbContainer, currentIndex === i && styles.thumbGrow, previousIndex === i && styles.thumbShrink].join(' ')}
        onClick={this.changeProject.bind(this, i)}
      >
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
        <section className={styles.slider}>
          <div className={[styles.slide1Container, styles[slide1Class], currentSlide === 1 && 'current'].join(' ')}>
            <SlideComponent project={projects[slide1Index]}></SlideComponent>
          </div>
          <div className={[styles.slide2Container, styles[slide2Class], currentSlide === 2 && 'current'].join(' ')}>
            <SlideComponent project={projects[slide2Index]}></SlideComponent>
          </div>
        </section>
      </div>
    );
  }
}

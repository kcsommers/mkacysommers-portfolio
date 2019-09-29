import { projects } from 'app/lib/core/projects';
import React from 'react';
import { SlideComponent } from './slide.component';
import { SliderThumbsComponent } from './slider-thumbs.component';
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
  slide1Index: number;
  slide2Index: number;
  slide1Class: SlideClasses;
  slide2Class: SlideClasses;
  visibleSlide: number;
}

export class SliderComponent extends React.Component<{}, SliderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentIndex: 0,
      slide1Index: 0,
      slide2Index: 0,
      slide1Class: SlideClasses.SLIDE_IN_RIGHT,
      slide2Class: SlideClasses.INITIAL,
      visibleSlide: 1
    }
  }
  private changeProject(index: number) {
    this.setState((prevState: SliderState) => {
      const visibleSlide = prevState.visibleSlide === 1 ? 2 : 1;
      return {
        currentIndex: index,
        slide1Index: visibleSlide === 1 ? prevState.slide1Index : index,
        slide2Index: visibleSlide === 2 ? prevState.slide2Index : index,
        slide1Class: visibleSlide === 1 ? SlideClasses.SLIDE_OUT_LEFT : SlideClasses.SLIDE_IN_LEFT,
        slide2Class: visibleSlide === 2 ? SlideClasses.SLIDE_OUT_LEFT : SlideClasses.SLIDE_IN_LEFT,
        visibleSlide
      }
    });
  }
  render() {
    const {
      slide1Index,
      slide2Index,
      visibleSlide,
      slide1Class,
      slide2Class
    } = this.state;
    return (
      <div className={styles.sliderContainer}>

        <section className={styles.sliderThumbsContainer}>
          <SliderThumbsComponent
            thumbSelected={this.changeProject.bind(this)}
          ></SliderThumbsComponent>
        </section>

        <section className={styles.slider}>
          <div className={
            [styles.slide1Container, styles[slide1Class],
            visibleSlide === 1 && 'current'].join(' ')
          }>
            <SlideComponent project={projects[slide1Index]}></SlideComponent>
          </div>
          <div className={
            [styles.slide2Container, styles[slide2Class],
            visibleSlide === 2 && 'current'].join(' ')
          }>
            <SlideComponent project={projects[slide2Index]}></SlideComponent>
          </div>
        </section>

      </div>
    );
  }
}

import React from 'react';
import styles from './slider.module.scss';
import { Project } from 'app/core/projects';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';

type SlideState = {
  imgIndex: number;
}

type SlideProps = {
  project: Project;
}

export class SlideComponent extends React.Component<SlideProps, SlideState> {
  constructor(props: SlideProps) {
    super(props);
    this.state = {
      imgIndex: 0
    }
  }
  render() {
    const { project } = this.props;
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
        <div className={styles.sliderProjectImages}></div>
      </div>
    );
  }
}

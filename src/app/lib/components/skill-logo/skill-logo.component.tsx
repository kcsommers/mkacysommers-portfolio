import React from 'react';
import { LoadingIconComponent } from '../loading-icon/loading-icon.component';
import styles from './skill-logo.module.scss';

type SkillLogoProps = {
  imageName: string;
}

type SkillLogoState = {
  image: string;
}

export class SkillLogoComponent extends React.Component<SkillLogoProps, SkillLogoState> {
  constructor(props: SkillLogoProps) {
    super(props);
    this.state = {
      image: ''
    }
  }

  componentDidMount() {
    this.loadImage();
  }

  private loadImage() {
    const { imageName } = this.props;
    import(`app/assets/images/logos/${imageName}`).then(image => {
      this.setState({ image: image.default });
    });
  }

  render() {
    const { image } = this.state;
    return image ? (
      <div
        className={styles.skillIconContainer}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    ) : <LoadingIconComponent size={'sm'} />;
  }

}
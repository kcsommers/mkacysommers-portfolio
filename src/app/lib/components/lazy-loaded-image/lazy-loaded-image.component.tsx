import React from 'react';
import styles from './lazy-loaded-image.module.scss';
import { LoadingIconComponent } from '../loading-icon/loading-icon.component';
import { ErrorViewComponent } from '../error-view.component/error-view.component';
import { ImageFolders } from '../../core/ImageFolders.enum';

type LazyLoadedImageProps = {
  imageName: string;
  folder: ImageFolders;
}

type LazyLoadedImageState = {
  render: boolean;
  image: any;
  error: boolean
}


export default class LazyLoadedImage extends React.Component<LazyLoadedImageProps, LazyLoadedImageState> {
  constructor(props: LazyLoadedImageProps) {
    super(props);
    this.state = {
      render: false,
      image: null,
      error: false
    }
  }

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(prevProps: LazyLoadedImageProps) {
    if (prevProps.imageName !== this.props.imageName) {
      this.loadImage();
    }
  }

  private loadImage() {
    switch (this.props.folder) {
      case ImageFolders.PROJECTS_SMALL: {
        this.loadProjectImageSmall();
        break;
      }
      case ImageFolders.PROJECTS_LARGE: {
        this.loadProjectImageLarge();
        break;
      }
      case ImageFolders.RESUME: {
        this.loadResume();
        break;
      }
      case ImageFolders.LOGOS: {
        this.loadLogo();
        break;
      }
    }
  }

  private setImage(imgMod: any) {
    this.setState({
      render: true,
      image: imgMod.default
    })
  }

  private setError(err: Error) {
    this.setState({ error: true, render: true });
  }

  private loadResume() {
    import(
      /* webpackMode: "lazy" */
      `../../../assets/images/resume/MKacySommers_resume.svg`
    ).then(this.setImage.bind(this)).catch(this.setError.bind(this))
  }

  private loadLogo() {
    const { imageName } = this.props;
    import(
      /* webpackMode: "lazy-once" */
      `../../../assets/images/logos/${imageName}`
    ).then(this.setImage.bind(this)).catch(this.setError.bind(this))
  }

  private loadProjectImageSmall() {
    const { imageName } = this.props;
    import(
      /* webpackMode: "lazy-once" */
      `../../../assets/images/projects/small/${imageName}`
    ).then(this.setImage.bind(this)).catch(this.setError.bind(this))
  }

  private loadProjectImageLarge() {
    const { imageName } = this.props;
    import(
      /* webpackMode: "lazy-once" */
      `../../../assets/images/projects/large/${imageName}`
    ).then(this.setImage.bind(this)).catch(this.setError.bind(this))
  }

  render() {
    const view = !this.state.error ?
      <img
        className={styles.img}
        src={this.state.image}
        alt={this.props.imageName}>
      </img> : (
        <div className={styles.errorContainer}>
          <ErrorViewComponent message={`${this.props.imageName} not available`}></ErrorViewComponent>
        </div>
      );
    return this.state.render ? view : (
      <div className={styles.loadingIconContainer}>
        <LoadingIconComponent size={'3x'}></LoadingIconComponent>
      </div>
    )
  }
}
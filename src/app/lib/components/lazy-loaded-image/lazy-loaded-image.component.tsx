import React from 'react';
import styles from './lazy-loaded-image.module.scss';
import { LoadingIconComponent } from '../loading-icon/loading-icon.component';
import { ErrorViewComponent } from '../error-view.component/error-view.component';

type LazyLoadedImageProps = {
  imageName: string;
  folder: string;
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
      case 'projects': {
        this.loadProjectImage();
      }
      case 'tools': {
        this.loadToolImage();
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

  private loadToolImage() {
    const { imageName } = this.props;
    import(
      /* webpackMode: "lazy-once" */
      `../../../assets/images/tools/${imageName}`
    ).then(this.setImage.bind(this)).catch(this.setError.bind(this));
  }

  private loadProjectImage() {
    const { imageName } = this.props;
    import(
      /* webpackMode: "lazy-once" */
      `../../../assets/images/projects/${imageName}`
    ).then(this.setImage.bind(this)).catch(this.setError.bind(this))
  }

  render() {
    const view = !this.state.error ?
      <img
        className={styles.img}
        src={this.state.image}
        alt={this.props.imageName}>
      </img> :
      <ErrorViewComponent message={`Error loading ${this.props.imageName}`}></ErrorViewComponent>;
    return this.state.render ? view : <LoadingIconComponent></LoadingIconComponent>
  }
}
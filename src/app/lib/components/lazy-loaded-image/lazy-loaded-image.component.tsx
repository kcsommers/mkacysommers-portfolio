import React from 'react';
import styles from './lazy-loaded-image.module.scss';
import { LoadingIconComponent } from '../loading-icon/loading-icon.component';
import { ErrorViewComponent } from '../error-view.component/error-view.component';

type LazyLoadedImageProps = {
  imageName: string;
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

  private loadImage() {
    const { imageName } = this.props;
    import(
      /* webpackMode: "lazy-once" */
      `../../../assets/images/projects/${imageName}`
    ).then(imgMod => {
      this.setState({
        render: true,
        image: imgMod.default
      })
    }).catch(err => {
      this.setState({ error: true, render: true });
      console.error(err);
    });
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
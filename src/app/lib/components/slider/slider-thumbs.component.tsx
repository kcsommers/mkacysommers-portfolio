import React from 'react';
import styles from './slider-thumbs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Colors } from 'app/lib/core/Colors.enum';
import LazyLoadedImage from '../lazy-loaded-image/lazy-loaded-image.component';
import { projects } from 'app/lib/core/projects';
import { ImageFolders } from 'app/lib/core/ImageFolders.enum';

type SliderThumbsProps = {
  thumbSelected: (index: number) => void;
}

type SliderThumbsState = {
  startIndex: number;
  selectedIndex: number;
  deselectedIndex: number;
  currentTotal: number;
  animating: boolean;
  slidingForward: boolean;
  slidingBackward: boolean;
  hideRightArrow: boolean;
  hideLeftArrow: boolean;
  adding: number;
}

export class SliderThumbsComponent extends React.Component<SliderThumbsProps, SliderThumbsState> {
  private thumbsWrap: React.RefObject<HTMLDivElement>

  constructor(props: SliderThumbsProps) {
    super(props);
    this.state = {
      selectedIndex: 0,
      startIndex: 0,
      adding: 0,
      deselectedIndex: -1,
      currentTotal: 4,
      animating: false,
      slidingForward: false,
      slidingBackward: false,
      hideRightArrow: false,
      hideLeftArrow: true,
    }
    this.thumbsWrap = React.createRef();
    this.appendThumbs = this.appendThumbs.bind(this);
  }

  private thumbSelected(index: number) {
    const { selectedIndex } = this.state;
    if (index !== selectedIndex) {
      this.setState({ deselectedIndex: selectedIndex, selectedIndex: index });
      this.props.thumbSelected(index);
    }
  }

  private next() {
    const { startIndex, currentTotal, selectedIndex } = this.state;
    let newTotal = 0;
    for (let i = startIndex; i < projects.length; i++) {
      if (projects[i] && i < startIndex + 8) {
        newTotal++;
      } else {
        break;
      }
    }
    const adding = newTotal - currentTotal;
    const newStartIndex = startIndex + adding;
    const hideRightArrow = startIndex + adding === projects.length - 4;
    const hideLeftArrow = false;
    this.setState({
      currentTotal: newTotal,
      animating: true,
      slidingForward: true,
      hideRightArrow,
      hideLeftArrow,
      adding,
      selectedIndex: -1
    });
    this.thumbsWrap.current.style.transform = `translateX(-${adding * 25}%)`;
    setTimeout(() => {
      this.setState({
        startIndex: newStartIndex,
        slidingForward: false,
        currentTotal: 4,
        adding: 0,
        animating: false,
        selectedIndex
      });
      this.thumbsWrap.current.style.transform = `translateX(0%)`;
    }, 1000);
  }

  private previous() {
    const { startIndex, selectedIndex } = this.state;
    let newThumbTotal = 0;
    for (let i = startIndex - 1; i < projects.length; i--) {
      if (projects[i] && i >= startIndex - 4) {
        newThumbTotal++;
      } else {
        break;
      }
    }
    const adding = newThumbTotal;
    const newStartIndex = startIndex - adding;
    const hideLeftArrow = startIndex - adding === 0;
    const hideRightArrow = false;

    this.setState({
      startIndex: newStartIndex,
      currentTotal: adding + 4,
      animating: true,
      slidingBackward: true,
      hideLeftArrow,
      hideRightArrow,
      adding,
      selectedIndex: -1
    });
    this.thumbsWrap.current.style.marginLeft = `-${adding * 25}%`;
    this.thumbsWrap.current.style.transform = `translateX(${adding * 25}%)`;
    setTimeout(() => {
      this.thumbsWrap.current.style.marginLeft = '0%';
      this.thumbsWrap.current.style.transform = `translateX(0%)`;
      this.setState({
        currentTotal: 4,
        animating: false,
        slidingBackward: false,
        adding: 0,
        selectedIndex
      });
    }, 1000);
  }

  private thumb(index: number, fadeOut: boolean) {
    const { selectedIndex, deselectedIndex, animating } = this.state;
    return (
      <div
        className={[
          styles.thumbContainer,
          (selectedIndex === index) ? styles.selected : '',
          // (deselectedIndex === index) && styles.deselected,
          fadeOut && styles.fadeOut
        ].join(' ')}
        key={Math.floor(Math.random() * 100000)}
        onClick={!animating ? () => { this.thumbSelected(index); } : undefined}
      >
        <LazyLoadedImage imageName={projects[index].images[0]} folder={ImageFolders.PROJECTS_SMALL}></LazyLoadedImage>
      </div>
    );
  }

  private appendThumbs() {
    const { startIndex, currentTotal, animating, slidingForward, adding } = this.state;
    const thumbs = [];
    for (let i = startIndex; i < startIndex + currentTotal; i++) {
      const fadeOut = animating && (
        slidingForward ? i < startIndex + adding : i >= startIndex + 4
      );
      thumbs.push(this.thumb(i, fadeOut));
    }
    return thumbs;
  }

  render() {
    const { animating, hideLeftArrow, hideRightArrow } = this.state;
    return (
      <div className={styles.thumbsContainer}>
        <div ref={this.thumbsWrap} className={[styles.thumbsWrap, animating && styles.animating].join(' ')}>{this.appendThumbs()}</div>
        <span
          className={[styles.thumbArrow, styles.thumbArrowRight, (hideRightArrow) ? styles.fadeOut : styles.fadeIn].join(' ')}
          onClick={!animating ? this.next.bind(this) : undefined}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            size={'lg'}
            color={Colors.$background}
          ></FontAwesomeIcon>
        </span>
        <span
          className={[styles.thumbArrow, styles.thumbArrowLeft, (hideLeftArrow) ? styles.fadeOut : styles.fadeIn].join(' ')} onClick={!animating ? this.previous.bind(this) : undefined}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            size={'lg'}
            color={Colors.$background}
          ></FontAwesomeIcon>
        </span>
      </div>
    );
  }
}
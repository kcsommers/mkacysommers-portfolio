import React from 'react';
import styles from './loading-icon.module.scss';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/lib/core/Colors.enum';

type LoadingIconProps = {
  size: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
}

export const LoadingIconComponent: React.FC<LoadingIconProps> = ({ size }) => {
  return (
    <span className={styles.loadingContainer}>
      <FontAwesomeIcon size={size} color={Colors.$gray} icon={faSpinner}></FontAwesomeIcon>
    </span>
  )
}
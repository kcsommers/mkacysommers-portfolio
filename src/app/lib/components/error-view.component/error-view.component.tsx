import React from 'react';
import styles from './error-view.module.scss';
import { TextComponent } from '../text/text.component';

type ErrorViewProps = {
  message: string;
}

export const ErrorViewComponent: React.FC<ErrorViewProps> = ({ message }) => {
  return (
    <div className={styles.contentContainer}>
      <TextComponent color={'$error'} content={message}></TextComponent>
    </div>
  )
}
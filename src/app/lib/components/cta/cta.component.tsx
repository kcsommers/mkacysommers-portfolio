import React from 'react';
import styles from './cta.module.scss';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';
import { Colors } from 'app/lib/core/Colors.enum';

type CtaProps = {
  title: string;
  body: string;
  buttonText: string;
  size: 'large' | 'medium' | 'small';
  color: Colors | string;
  action?: (event: React.MouseEvent) => void;
}

const fontSizes = {
  large: {
    title: '4rem',
    body: '2rem'
  },
  medium: {
    title: '2rem',
    body: '1.2rem'
  }
};

export const CtaComponent: React.FC<CtaProps> = ({ title, body, buttonText, size, action, color }) => {
  return (
    <div className={styles.ctaContainer}>
      <TextComponent color={color} content={title} size={fontSizes[size].title}></TextComponent>
      <div className={styles.bodyContainer}>
        <TextComponent color={color} content={body} size={fontSizes[size].body}></TextComponent>
      </div>
      <div className={styles.buttonContainer}>
        <ButtonComponent type={'accent'} size={'medium'} text={buttonText} clickEvent={action}></ButtonComponent>
      </div>
    </div>
  );
}
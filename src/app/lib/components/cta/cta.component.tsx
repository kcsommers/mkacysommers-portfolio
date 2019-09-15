import React from 'react';
import styles from './cta.module.scss';
import { TextComponent } from '../text/text.component';
import { ButtonComponent } from '../button/button.component';

type CtaProps = {
  title: string;
  body: string;
  buttonText: string;
  action?: (event: React.MouseEvent) => void;
}

export const CtaComponent: React.FC<CtaProps> = ({ title, body, buttonText, action }) => {
  return (
    <div className={styles.ctaContainer}>
      <TextComponent content={title} size={'5rem'}></TextComponent>
      <TextComponent content={body} size={'3rem'}></TextComponent>
      <div className={styles.buttonContainer}>
        <ButtonComponent text={buttonText} clickEvent={action}></ButtonComponent>
      </div>
    </div>
  );
}
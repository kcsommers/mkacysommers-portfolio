import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  text: string;
  type?: 'primary';
  clickEvent?: (event: React.MouseEvent) => void;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ text, clickEvent, type = 'primary' }) => {
  return (
    <span onClick={clickEvent} className={styles[`button-${type}`]}>
      <span className={styles[`buttonText-${type}`]}>{text}</span>
    </span>
  );
}
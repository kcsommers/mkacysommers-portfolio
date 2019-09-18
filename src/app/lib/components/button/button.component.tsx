import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  text: string;
  link?: string;
  type?: 'primary' | 'accent';
  size: 'large' | 'medium' | 'small';
  clickEvent?: (event: React.MouseEvent) => void;
}

const navigate = (location: string) => {
  window.location.href = location;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ text, size, link, clickEvent, type = 'primary' }) => {
  return (
    <span
      onClick={link ? () => { navigate(link); } : clickEvent}
      className={[styles.button, styles[`button-${type}`], styles[`button-${size}`]].join(' ')}
    >
      <span className={styles[`buttonText-${type}`]}>{text}</span>
    </span>
  );
}
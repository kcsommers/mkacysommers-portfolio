import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  text: string;
  link?: string;
  type?: 'primary' | 'dark';
  clickEvent?: (event: React.MouseEvent) => void;
}

const navigate = (location: string) => {
  window.location.href = location;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ text, link, clickEvent, type = 'primary' }) => {
  return (
    <span
      onClick={link ? () => { navigate(link); } : clickEvent}
      className={styles[`button-${type}`]}
    >
      <span className={styles[`buttonText-${type}`]}>{text}</span>
    </span>
  );
}
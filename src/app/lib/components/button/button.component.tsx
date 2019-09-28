import React from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  text: string;
  link?: string;
  type?: 'primary' | 'accent';
  size: 'large' | 'medium' | 'small';
  clickEvent?: (event: React.MouseEvent) => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

const navigate = (location: string) => {
  window.location.href = location;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ text, size, link, clickEvent, fullWidth = false, disabled = false, type = 'primary' }) => {
  return (
    <span
      onClick={!disabled ? (link ? () => { navigate(link); } : clickEvent) : undefined}
      className={[styles.button, styles[`button-${type}`], styles[`button-${size}`], disabled && styles.disabled, fullWidth && styles.fullWidth].join(' ')}
    >
      <span className={styles[`buttonText-${type}`]}>{text}</span>
    </span>
  );
}
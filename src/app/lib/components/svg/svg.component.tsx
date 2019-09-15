import React from 'react';
import styles from './text.module.scss';

type TextProps = {
  content: string;
  color?: string;
  size?: string;
}

export const TextComponent: React.FC<TextProps> = ({ content, color, size = '1rem' }) => {
  return (
    <p
      className={styles.textContent}
      style={{ color: color ? color : '', fontSize: size }}>
      {content}
    </p>
  );
}
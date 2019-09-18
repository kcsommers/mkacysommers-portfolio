import React from 'react';
import styles from './text.module.scss';
import { Colors } from 'app/lib/core/Colors.enum';

type TextProps = {
  content: string;
  color?: string;
  size?: string;
}

const getColor = (colorProp: string): Colors | string => {
  if (colorProp) {
    return Colors[colorProp] ? Colors[colorProp] : colorProp;
  }
  return Colors.$white;
};

export const TextComponent: React.FC<TextProps> = ({ content, color = '$white', size = '1rem' }) => {
  return (
    <p
      className={styles.textContent}
      style={{ color: getColor(color), fontSize: size }}>
      {content}
    </p>
  );
}
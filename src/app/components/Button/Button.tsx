import { useEffect, useRef } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;

  size?: 'lg' | 'md' | 'sm';

  isFullWidth?: boolean;

  showSpinner?: boolean;

  isDisabled?: boolean;

  onClick?: () => void;
};

export const Button = ({
  text,
  isFullWidth = true,
  size = 'md',
  showSpinner = false,
  onClick,
  isDisabled = false,
}: ButtonProps) => {
  const buttonEl = useRef<HTMLButtonElement>();

  const clicked = (event: React.MouseEvent) => {
    if (!onClick || !buttonEl.current || showSpinner) {
      return;
    }

    buttonEl.current.blur();
    onClick();
  };

  useEffect(() => {
    if (!buttonEl.current || isFullWidth) {
      return;
    }

    const _btnWidth = buttonEl.current.getBoundingClientRect().width;
    buttonEl.current.style.minWidth = `${_btnWidth}px`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonEl]);

  return (
    <button
      className={`app-btn ${styles.btn} ${styles[`btn-${size}`]} ${
        isFullWidth ? styles.btnFullWidth : ''
      }${isDisabled ? ` ${styles.btnDisabled}` : ''}`}
      onClick={clicked}
      ref={(el: HTMLButtonElement) => (buttonEl.current = el)}
    >
      {showSpinner ? <LoadingSpinner size="xs" /> : text}
    </button>
  );
};
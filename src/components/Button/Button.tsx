import { ReactElement, useEffect, useRef } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = {
  text: string;
  size?: 'lg' | 'md' | 'sm';
  isFullWidth?: boolean;
  showSpinner?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  icon?: ReactElement;
};

export const Button = ({
  text,
  isFullWidth = true,
  size = 'md',
  showSpinner = false,
  onClick,
  isDisabled = false,
  icon,
}: ButtonProps) => {
  const buttonEl = useRef<HTMLButtonElement>();

  const clicked = (event: React.MouseEvent) => {
    if (!onClick || showSpinner) {
      return;
    }

    onClick();
  };

  useEffect(() => {
    if (!buttonEl.current || isFullWidth) {
      return;
    }

    const btnWidth = buttonEl.current.getBoundingClientRect().width;
    buttonEl.current.style.minWidth = `${btnWidth}px`;
  }, [buttonEl]);

  return (
    <button
      className={classNames(
        styles.btn,
        styles[`btn_${size}`],
        'text-center inline-flex items-center',
        {
          'w-full': isFullWidth,
          'pointer-events-none opacity-75': isDisabled,
        }
      )}
      onClick={clicked}
      ref={(el: HTMLButtonElement) => (buttonEl.current = el)}
    >
      {showSpinner ? (
        <LoadingSpinner size="xs" />
      ) : (
        <>
          {!!icon && <span className="mr-2">{icon}</span>}
          {text}
        </>
      )}
    </button>
  );
};

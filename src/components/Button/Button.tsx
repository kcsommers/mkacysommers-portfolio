import { ReactElement, useEffect, useRef } from 'react';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import classNames from 'classnames';

type ButtonProps = {
  text?: string;
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
        'text-foreground transition-colors border-foreground border-2 rounded-sm outline-none',
        'text-center inline-flex items-center justify-center fill-foreground bg-background',
        'hover:border-secondary',
        {
          'w-full': isFullWidth,
          'pointer-events-none opacity-75': isDisabled,
        },
        {
          'px-4 py-2': size === 'md',
          'px-2 py-1': size === 'sm',
        }
      )}
      onClick={clicked}
      ref={(el: HTMLButtonElement) => (buttonEl.current = el)}
    >
      {showSpinner ? (
        <LoadingSpinner size="xs" />
      ) : (
        <>
          {!!icon && (
            <span className={classNames({ 'mr-2': !!text })}>{icon}</span>
          )}
          {text}
        </>
      )}
    </button>
  );
};

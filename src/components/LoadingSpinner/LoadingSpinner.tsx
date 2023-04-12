import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'lg';
}

export const LoadingSpinner = ({ size = 'lg' }: LoadingSpinnerProps) => {
  return (
    <div
      className={`${styles.loadingSpinner}${
        size === 'xs'
          ? ` ${styles.loadingSpinnerXSmall}`
          : size === 'sm'
          ? ` ${styles.loadingSpinnerSmall}`
          : ''
      }`}
      style={{
        borderLeftColor: `rgba(0, 0, 0, 0.3)`,
        borderRightColor: `rgba(0, 0, 0, 0.3)`,
        borderBottomColor: `rgba(0, 0, 0, 0.3)`,
        borderTopColor: `rgb(255, 255, 255)`,
      }}
    ></div>
  );
};

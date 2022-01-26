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
      // style={{
      //   borderLeftColor: `rgba(${rgbRef}, 0.3)`,
      //   borderRightColor: `rgba(${rgbRef}, 0.3)`,
      //   borderBottomColor: `rgba(${rgbRef}, 0.3)`,
      //   borderTopColor: `rgb(${rgbRef})`,
      // }}
    ></div>
  );
};

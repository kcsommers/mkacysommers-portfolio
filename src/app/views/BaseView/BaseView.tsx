import { FC, ReactNode } from 'react';
import styles from './BaseView.module.scss';

interface IBaseViewProps {
  left: ReactNode;
  right: ReactNode;
}

export const BaseView: FC<IBaseViewProps> = ({ left, right }) => {
  return (
    <div className={styles.baseViewWrap}>
      <div className={styles.baseViewLeft}>{left}</div>
      <div className={styles.baseViewRight}>{right}</div>
    </div>
  );
};

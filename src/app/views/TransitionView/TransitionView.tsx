import { FC, PropsWithChildren } from 'react';
import styles from './TransitionView.module.scss';

export const TransitionView: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.transitionViewWrap}>
      {children}
      <div className={styles.logoWrap}>
        <img
          src="https://res.cloudinary.com/kcsommers/image/upload/v1643094250/mksommerslogo.png"
          alt="M Kacy Sommers logo"
        />
      </div>
    </div>
  );
};

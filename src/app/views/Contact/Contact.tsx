import { FC } from 'react';
import { ContactForm, Nav } from '../../components';
import styles from './Contact.module.scss';

export const Contact: FC = () => {
  const onFormSubmit = (success: boolean) => {
    console.log('form submitted:::: ', success);
  };

  return (
    <div className={styles.contactWrap}>
      <div className={styles.contactWrapInner}>
        <div className={styles.contactNavWrap}>
          <div className={styles.contactNavWrapInner}>
            <h3>Contact</h3>
            <Nav />
          </div>
          <div className={styles.contactBlurbWrap}>
            <p>
              Get in touch! I am always on the lookout for new projects, fresh
              challenges and kind folks to collaborate with. If you have an
              idea, an open position or just want to talk code, please get in
              touch.
            </p>
          </div>
        </div>
        <div className={styles.contactFormWrap}>
          <ContactForm onSubmit={onFormSubmit} />
        </div>
      </div>
    </div>
  );
};

import { FC } from 'react';
import { ContactForm, Nav } from '../../components';
import styles from './Contact.module.scss';

export const Contact: FC = () => {
  const onFormSubmit = (success: boolean) => {
    console.log('form submitted:::: ', success);
  };

  return (
    <div className={styles.aboutIntroWrap}>
      <h3>Contact</h3>
      <Nav />
      <p className={styles.blurb}>
        Get in touch! I am always on the lookout for new projects, fresh
        challenges and kind folks to collaborate with. If you have an idea, an
        open position or just want to talk code, please get in touch.
      </p>
      <ContactForm onSubmit={onFormSubmit} />
    </div>
  );
};

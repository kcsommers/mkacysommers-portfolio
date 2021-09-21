import { PageWrap, ContactForm } from '@components';
import { RouteComponentProps } from 'react-router';
import styles from './ContactPage.module.scss';

interface ContactPageProps extends RouteComponentProps {}

export const ContactPage = ({}: ContactPageProps) => {
  const onFormSubmit = (success: boolean) => {
    console.log('form submitted:::: ', success);
  };

  return (
    <PageWrap page="contact">
      <p className={styles.blurb}>
        Get in touch! I am always on the lookout for new projects, fresh
        challenges and kind folks to collaborate with. If you have an idea, an
        open position or just want to talk code, please get in touch.
      </p>
      <ContactForm onSubmit={onFormSubmit} />
    </PageWrap>
  );
};

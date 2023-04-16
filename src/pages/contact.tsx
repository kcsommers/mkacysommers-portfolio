import { EmailJSResponseStatus, send } from 'emailjs-com';
import { ReactElement } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { TransitionView } from '../components/TransitionView/TransitionView';

type ContactParams = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
};

const ContactPage = () => {
  const onFormSubmit = (
    params: ContactParams
  ): Promise<EmailJSResponseStatus> => {
    return send('service_s2set2t', 'template_007413u', params as any);
  };

  return (
    <MainLayout
      pageTitle="Contact"
      leftContent={
        <p className="tablet-landscape-up:pr-16 mt-8">
          I am always on the lookout for new projects, fresh challenges and kind
          folks to collaborate with. If you have an idea, an open position or
          just want to talk code, please get in touch.
        </p>
      }
      rightContent={
        <div className="mt-8 tablet-landscape-up:mt-[20vh]">
          <h3 className="font-marcellus text-3xl mt-8 mb-4">Get in touch!</h3>
          <ContactForm onSubmit={onFormSubmit} />
        </div>
      }
    />
  );
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <TransitionView>{page}</TransitionView>;
};

export default ContactPage;

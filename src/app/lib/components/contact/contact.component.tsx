import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faSmileBeam, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from 'app/lib/core/Colors.enum';
import React from 'react';
import { TextComponent } from '../text/text.component';
import styles from './contact.module.scss';
import { ButtonComponent } from '../button/button.component';
import * as emailjs from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com/source/models/EmailJSResponseStatus';
import { LoadingIconComponent } from '../loading-icon/loading-icon.component';

type ContactState = {
  name: string;
  email: string;
  company: string;
  message: string;
  initial: boolean;
  formValid: boolean;
  formSubmitted: boolean;
  formSent: boolean;
  animating: boolean;
  sendResult: {
    error: boolean;
    message: string;
  }
}

type ContactProps = {
  visible: boolean;
}

interface EmailTemplateParams {
  from_name: string;
  reply_to: string;
  message_html: string;
  company: string;
}

export class ContactComponent extends React.Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      message: '',
      initial: true,
      formValid: false,
      formSubmitted: false,
      formSent: false,
      animating: false,
      sendResult: {
        error: false,
        message: ''
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ initial: false });
    }, 1000)
  }

  componentDidUpdate(prevProps: ContactProps, prevState: ContactState) {
    const { name, email, message, formValid } = this.state;
    if (!!(name && email && message)) {
      if (!formValid) {
        this.setState({ formValid: true });
      }
    } else {
      if (formValid) {
        this.setState({ formValid: false });
      }
    }
  }

  private nameChange(event) {
    this.setState({ name: event.target.value });
  }
  private emailChange(event) {
    this.setState({ email: event.target.value });
  }
  private companyChange(event) {
    this.setState({ company: event.target.value });
  }
  private messageChange(event) {
    this.setState({ message: event.target.value });
  }
  public submitForm() {
    const { formValid, name, email, message, company } = this.state;
    if (formValid) {
      this.setState({ formSubmitted: true, animating: true });
      setTimeout(() => {
        this.setState({ animating: false });
      }, 1500)
      const params: EmailTemplateParams = {
        from_name: name,
        company,
        reply_to: email,
        message_html: message
      }
      emailjs.send(
        'gmail',
        'template_uNdWoonp',
        params,
        'user_9qSrgVL4CK4c6HPogPlgu'
      ).then((result: EmailJSResponseStatus) => {
        const sendResult = {
          error: false,
          message: 'Thanks for reaching out! Your message has been sent.'
        }
        this.setState({ formSent: true, sendResult });
      }).catch((err) => {
        const sendResult = {
          error: true,
          message: 'Something went wrong! There was an unexpected error sending your message. Please try again.'
        }
        this.setState({ formSent: true, sendResult });
        console.error(err);
      });
    }
  }
  private getMessage(sendResult: { error: boolean, message: string }, formSubmitted: boolean, animating: boolean, formSent: boolean) {
    const sendAgainBtn = sendResult.error ? (
      <div className={styles.sendAgainBtnContainer}>
        <ButtonComponent fullWidth={true} text={'Send Again'} size={'medium'} clickEvent={this.submitForm.bind(this)}></ButtonComponent>
      </div>
    ) : <div className={styles.successIconContainer}>
        <FontAwesomeIcon icon={faCheck} size={'2x'} color={Colors.$offwhite}></FontAwesomeIcon>
      </div>;
    console.log(formSubmitted, !animating, formSent)
    return (
      <div className={[styles.messageContainer, (formSubmitted && !animating && formSent) && styles.showMessage].join(' ')}>
        <TextComponent size={'1.2rem'} color={!sendResult.error ? '$offwhite' : '$error'} content={sendResult.message}></TextComponent>
        {sendAgainBtn}
      </div>
    );
  }
  render() {
    const { visible } = this.props;
    const { formValid, formSubmitted, formSent, sendResult, animating } = this.state;
    const message = formSent ? this.getMessage(sendResult, formSubmitted, animating, formSent) : null;
    return (
      <div className={[styles.hiddenContactContainer, visible ? styles.slideIn : styles.slideOut, this.state.initial && styles.initial].join(' ')} id="hidden-container">
        <div className={styles.contactIconsContainer}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon size={'2x'} icon={faSmileBeam} color={Colors.$offwhite}></FontAwesomeIcon>
            <TextComponent italic={true} size={'1.3rem'} content={'Mark Kacy Sommers'} color={Colors.$offwhite}></TextComponent>
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon size={'2x'} icon={faEnvelope} color={Colors.$offwhite}></FontAwesomeIcon>
            <TextComponent italic={true} size={'1.3rem'} content={'kacysommers@gmail.com'} color={Colors.$offwhite}></TextComponent>
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon size={'2x'} icon={faPhone} color={Colors.$offwhite}></FontAwesomeIcon>
            <TextComponent italic={true} size={'1.3rem'} content={'(330)819-2592'} color={Colors.$offwhite}></TextComponent>
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon size={'2x'} icon={faGithub} color={Colors.$offwhite}></FontAwesomeIcon>
            <TextComponent italic={true} size={'1.3rem'} content={'kcsommers'} color={Colors.$offwhite}></TextComponent>
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon size={'2x'} icon={faLinkedin} color={Colors.$offwhite}></FontAwesomeIcon>
            <TextComponent italic={true} size={'1.3rem'} content={'kcsommers'} color={Colors.$offwhite}></TextComponent>
          </div>
        </div>

        <div className={styles.contactFormContainer}>
          <div className={[styles.contactFormInputsWrap, formSubmitted && styles.formSubmitted].join(' ')}>
            <div className={styles.inputContainer}>
              <input placeholder="Name" type="text" onChange={this.nameChange.bind(this)} />
            </div>
            <div className={styles.inputContainer}>
              <input placeholder="Email" type="email" onChange={this.emailChange.bind(this)} />
            </div>
            <div className={styles.inputContainer}>
              <input placeholder="Company" type="text" onChange={this.companyChange.bind(this)} />
            </div>
            <div className={styles.inputContainer}>
              <textarea placeholder="Message" onChange={this.messageChange.bind(this)} />
            </div>
            <div className={[styles.inputContainer, styles.submitBtnContainer].join(' ')}>
              <ButtonComponent clickEvent={this.submitForm.bind(this)} disabled={!formValid} text={'Submit'} size={'medium'} fullWidth={true}></ButtonComponent>
            </div>
          </div>

          <div className={[styles.contactFormSendingIconContainer, (formSubmitted && !animating && !formSent) && styles.formSending].join(' ')}>
            <LoadingIconComponent size={'2x'}></LoadingIconComponent>
          </div>

          {message}

        </div>
      </div>
    );
  }
}
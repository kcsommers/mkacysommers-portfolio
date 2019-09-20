import React from 'react';
import styles from './contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileWink, faSmileBeam, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TextComponent } from '../text/text.component';
import { Colors } from 'app/lib/core/Colors.enum';

type ContactState = {
  name: string;
  email: string;
  company: string;
  message: string;
  initial: boolean;
}

type ContactProps = {
  visible: boolean;
}

export class ContactComponent extends React.Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      message: '',
      initial: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ initial: false });
    }, 1000)
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
  render() {
    const { visible } = this.props;
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
        </div>
      </div>
    );
  }
}
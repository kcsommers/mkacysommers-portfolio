import React from 'react';
import styles from './contact.module.scss';

type ContactState = {
  name: string;
  email: string;
  company: string;
  message: string;
}

type ContactProps = {
  visible: boolean;
  hide: () => void;
}

export class ContactComponent extends React.Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);
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
  private hide(event: React.MouseEvent) {
    if (!event.target['id'] || event.target['id'] !== 'hidden-container') {
      this.props.hide();
    }
  }
  render() {
    const { visible } = this.props;
    return (
      <div onClick={this.hide.bind(this)} className={[styles.contactContainer, this.props.visible && styles.visible].join(' ')}>
        <div className={[styles.hiddenContactContainer, visible ? styles.slideIn : styles.slideOut].join(' ')} id="hidden-container">
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
      </div>
    );
  }
}
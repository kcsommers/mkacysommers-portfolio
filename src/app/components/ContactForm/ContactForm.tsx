import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './ContactForm.module.scss';

interface ContactFormProps {
  onSubmit: (success: boolean) => void;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [name, setName] = useState('');

  const [nameError, setNameError] = useState('');

  const [emailAddress, setEmailAddress] = useState('');

  const [emailAddressError, setEmailAddressError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [message, setMessage] = useState('');

  const [submittingForm, setSubmittingForm] = useState(false);

  const validateForm = (): boolean => {
    let isValid = true;

    if (!name) {
      setNameError('Please enter a name');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!emailAddress) {
      setEmailAddressError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailAddressError('');
    }

    if (!phoneNumber) {
      setPhoneNumberError('Please enter a valid phone number');
      isValid = false;
    } else {
      setPhoneNumberError('');
    }

    return isValid;
  };

  const submit = async () => {
    if (!validateForm()) {
      return;
    }

    setSubmittingForm(true);
    window.setTimeout(() => {
      setSubmittingForm(false);
      onSubmit(true);
    }, 2000);
  };

  return (
    <div className={styles.checkoutFormWrap}>
      <div className={styles.inputWrap}>
        <input
          type="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && (
          <p className={`${styles.inputErrorText} error-color`}>
            <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            {nameError}
          </p>
        )}
      </div>
      <div className={styles.inputWrap}>
        <input
          type="email"
          placeholder="Email Address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        {emailAddressError && (
          <p className={`${styles.inputErrorText} error-color`}>
            <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            {emailAddressError}
          </p>
        )}
      </div>
      <div className={styles.inputWrap}>
        <input
          type="phone"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {phoneNumberError && (
          <p className={`${styles.inputErrorText} error-color`}>
            <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
            {phoneNumberError}
          </p>
        )}
      </div>

      <div className={styles.inputWrap}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className={styles.inputWrap}>
        <Button
          isDisabled={!name || !emailAddress || !phoneNumber || !message}
          text="Submit"
          onClick={submit}
          showSpinner={submittingForm}
        />
      </div>
    </div>
  );
};

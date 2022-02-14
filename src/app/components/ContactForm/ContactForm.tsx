import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { IContactParams } from './contact-params.interface';
import styles from './ContactForm.module.scss';

interface IContactFormProps {
  onSubmit: (_params: IContactParams) => Promise<any>;
}

export const ContactForm = ({ onSubmit }: IContactFormProps) => {
  const [name, setName] = useState('');

  const [nameError, setNameError] = useState('');

  const [emailAddress, setEmailAddress] = useState('');

  const [emailAddressError, setEmailAddressError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');

  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [message, setMessage] = useState('');

  const [submittingForm, setSubmittingForm] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const [successMsg, setSuccessMsg] = useState('');

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

  const clearForm = () => {
    setName('');
    setPhoneNumber('');
    setErrorMsg('');
    setMessage('');
  };

  const submit = async () => {
    if (!validateForm()) {
      return;
    }

    setSubmittingForm(true);
    onSubmit({ name, emailAddress, phoneNumber, message })
      .then(() => {
        setSubmittingForm(false);
        setSuccessMsg('Thank You! Your message has been sent');
        setErrorMsg('');
        clearForm();
      })
      .catch((_error: any) => {
        setSubmittingForm(false);
        setSuccessMsg('');
        setErrorMsg('Whoops! Something went wrong. Please try again');
        console.error(_error);
      });
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
            <FontAwesomeIcon
              icon={faExclamationCircle as IconProp}
            ></FontAwesomeIcon>
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
            <FontAwesomeIcon
              icon={faExclamationCircle as IconProp}
            ></FontAwesomeIcon>
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
            <FontAwesomeIcon
              icon={faExclamationCircle as IconProp}
            ></FontAwesomeIcon>
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
      {errorMsg && (
        <div className={`${styles.messageWrap} ${styles.errorMsg}`}>
          {errorMsg}
        </div>
      )}
      {successMsg && <div className={styles.messageWrap}>{successMsg}</div>}
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

import { useState } from 'react';
import { Button } from '../Button/Button';
import ExclamationIcon from '../svg/circle-exclamation-solid.svg';
import styles from './ContactForm.module.scss';
import { IContactParams } from './contact-params.interface';

type ContactFormProps = {
  onSubmit: (_params: IContactParams) => Promise<any>;
};

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [emailAddress, setEmailAddress] = useState('');
  const [emailAddressError, setEmailAddressError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [message, setMessage] = useState('');
  const [submittingForm, setSubmittingForm] = useState(false);

  const [error_msg, seterror_msg] = useState('');
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
    seterror_msg('');
    setMessage('');
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmittingForm(true);
    onSubmit({ name, emailAddress, phoneNumber, message })
      .then(() => {
        setSubmittingForm(false);
        setSuccessMsg('Thank You! Your message has been sent');
        seterror_msg('');
        clearForm();
      })
      .catch((_error: any) => {
        setSubmittingForm(false);
        setSuccessMsg('');
        seterror_msg('Whoops! Something went wrong. Please try again');
        console.error(_error);
      });
  };

  return (
    <form onSubmit={submit}>
      <div className={styles.input_wrap}>
        {nameError && (
          <p
            className={`${styles.inputErrorText} text-danger text-sm flex items-center mb-2`}
          >
            <ExclamationIcon className="fill-danger mr-2" width={18} />
            {nameError}
          </p>
        )}
        <input
          type="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.input_wrap}>
        {emailAddressError && (
          <p
            className={`${styles.inputErrorText} text-danger text-sm flex items-center mb-2`}
          >
            <ExclamationIcon className="fill-danger mr-2" width={18} />
            {emailAddressError}
          </p>
        )}
        <input
          type="email"
          placeholder="Email Address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <div className={styles.input_wrap}>
        {phoneNumberError && (
          <p
            className={`${styles.inputErrorText} text-danger text-sm flex items-center mb-2`}
          >
            {/* @ts-ignore */}
            <ExclamationIcon className="fill-danger mr-2" width={18} />
            {phoneNumberError}
          </p>
        )}
        <input
          type="phone"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className={styles.input_wrap}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      {error_msg && (
        <div className={`${styles.message_wrap} ${styles.error_msg}`}>
          {error_msg}
        </div>
      )}
      {successMsg && <div className={styles.message_wrap}>{successMsg}</div>}
      <div className={styles.input_wrap}>
        <Button
          isDisabled={!name || !emailAddress || !phoneNumber || !message}
          text="Submit"
          showSpinner={submittingForm}
        />
      </div>
    </form>
  );
};

import React from "react";
import styles from './signup.module.sass'

interface Props {
  message: string;
}

const EmailSent = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1>{props.message}</h1>
      <p>Please check your email for the verification link. Once verified, click the button below to login to your account</p>
      <button>
        Verified
    </button>
    </div>
    
  );
};

export default EmailSent;

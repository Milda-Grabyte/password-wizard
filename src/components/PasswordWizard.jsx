import React, { useState } from 'react';
import '../styles/passwordWizard.scss';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function PasswordWizard() {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true)
  const [userData, setUserData] = useState({ password: '', clue: '' })
  const [result, setResult] = useState({ success: false});

  return (
    <div className={`wizard ${step === 3 && 'small'}`}>
      <Header step={step} />
      <Content
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        step={step}
        setUserData={setUserData}
        userData={userData}
        setResult={setResult}
      />
      <Footer
        userData={userData}
        setIsDisabled={setIsDisabled}
        isDisabled={isDisabled}
        step={step}
        setStep={setStep}
        result={result}
      />
    </div>
  );
}

export default PasswordWizard;

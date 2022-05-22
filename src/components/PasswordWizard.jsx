import React, { useState, useEffect } from 'react';
import '../styles/passwordWizard.scss';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function PasswordWizard() {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true)

  return (
    <div className='wizard'>
      <Header step={step} />
      <Content isDisabled={isDisabled} setIsDisabled={setIsDisabled} step={step} setStep={setStep} />
      <Footer isDisabled={isDisabled} step={step} setStep={setStep} />
    </div>
  );
}

export default PasswordWizard;

import React, { useState } from 'react';
import '../styles/passwordWizard.scss';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function PasswordWizard() {
  const [step, setStep] = useState(2);
  return (
    <div className='wizard'>
      <Header step={step} />
      <Content step={step} setStep={setStep} />
      <Footer step={step} />
    </div>
  );
}

export default PasswordWizard;

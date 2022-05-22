import React from 'react';
import Button from './Button';
import '../styles/footer.scss';
import { submitForm } from '../services/api';

function Footer({ step, setStep, success = false, isDisabled, setIsDisabled, userData }) {
  const onForward = () => {
    setStep(++step);
    setIsDisabled(true);
    step === 2 && submitForm(userData);
  };
  const onBack = () => setStep(step !== 1 ? --step : window.location.reload());
  const onReload = () => window.location.reload();
  const buttons =
    step !== 3 ? (
      <>
        <Button type='cancel' onClick={onReload} />
        <Button type='next' isDisabled={isDisabled} onClick={onForward} />
      </>
    ) : (
      <Button type={success === true ? 'ok' : 'ko'} onClick={success ? onReload : onBack} />
    );
  return (
    <footer className={step === 3 ? 'final' : ''}>
      {buttons}
    </footer>
  );
}

export default Footer;
import React from 'react';
import Button from './Button';
import '../styles/footer.scss';

function Footer({ step, setStep, isDisabled, setIsDisabled, result }) {

  const onForward = () => {
    setStep(++step);
    setIsDisabled(true);
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
        <Button
          type={result.success === true ? 'ok' : 'ko'}
          onClick={result.success ? onReload : onBack}
        />
    );
  
  return (
    <footer className={step === 3 ? 'final' : ''}>
      {buttons}
    </footer>
  );
}

export default Footer;
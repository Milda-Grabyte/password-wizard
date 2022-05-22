import React, { useState, useEffect } from 'react';
import '../styles/content.scss';
import ProductInformation from '../views/ProductInformation';
import FormView from '../views/FormView';
import FeedbackView from '../views/FeedbackView';

function Content({ step, setStep, setIsDisabled, setUserData, userData }) {
  const [view, setView] = useState(<ProductInformation />);

  useEffect(() => {
    setStep(step);
  }, [step]);

  function setStep(step) {
    step === 1
      ? setView(<ProductInformation setIsDisabled={setIsDisabled} />)
      : step === 2
        ? setView(<FormView setIsDisabled={setIsDisabled} setUserData={setUserData} userData={userData} />)
        : setView(<FeedbackView />);
  }

  return (
    <main className={`step-${step}`}>
      {view}
    </main>
  );
}

export default Content;

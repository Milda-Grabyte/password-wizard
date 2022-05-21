import React, { useState, useEffect } from 'react';
import '../styles/passwordWizard.scss';
import '../styles/content.scss';
import { useIntl } from 'react-intl';
import ProductInformation from '../views/ProductInformation';
import FormView from '../views/FormView';
import FeedbackView from '../views/FeedbackView';

function Content({ step, setStep }) {
  const [view, setView] = useState(<ProductInformation />);
  const intl = useIntl();

  useEffect(() => {
    setStep(step);
  }, [step]);

  function setStep(step) {
    step === 1 ? setView(<ProductInformation />) : step === 2 ? setView(<FormView />) : setView(<FeedbackView />)
  }

  return (
    <main className={`step-${step}`}>
      <h1>
        {`${intl.formatMessage({ id: 'content.heading' })}`} 
      </h1>
      {view}
    </main>
  );
}

export default Content;

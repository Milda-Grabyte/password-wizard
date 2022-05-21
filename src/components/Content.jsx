import React from 'react';
import '../styles/passwordWizard.scss';
import '../styles/content.scss';
import { useIntl } from 'react-intl';

function Content({ step, setStep }) {
  const intl = useIntl();
  return (
    <main className={`step-${step}`}>
      <h1>
        {`${intl.formatMessage({ id: 'content.heading' })}`} 
      </h1>
    </main>
  );
}

export default Content;

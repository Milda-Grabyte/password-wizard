import React from 'react';
import '../styles/passwordWizard.scss';
import '../styles/content.scss';

function Content({ step, setStep }) {
  return <main className={`step-${step}`}>CONTENT</main>;
}

export default Content;

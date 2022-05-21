import React from 'react';
import '../styles/progressBar.scss';

function ProgressBar({ selectedStep }) {
  const completionStatus = (step, selectedStep) => {
    return step < selectedStep
      ? 'completed'
      : step === selectedStep
        ? 'active'
        : '';
  }

  const listItems = [...Array(3)].map((_,i) =>
    <li key={i} className={completionStatus(i + 1, selectedStep)} />
  );
    
  return (
    <ol className="progress-bar">
      {listItems}
    </ol>
  );
;
}

export default ProgressBar;

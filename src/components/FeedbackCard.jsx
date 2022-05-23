import React from 'react';
import { useIntl } from 'react-intl';
import checkImg from '../assets/img/check.png';
import errorImg from '../assets/img/warning.png';
import '../styles/feedbackCard.scss';

function FeedbackCard({ feedbackType }) {
  const intl = useIntl();
  const isOK = feedbackType === 'ok';
  return (
    <div className='feedback-card'>
      <img src={isOK ? checkImg : errorImg} alt={isOK ? 'Success' : 'Error'} />
      <div className='feedback-card__info'>
        <h2>{isOK ? `${intl.formatMessage({ id: 'step-3.ok.heading' })}` : `${intl.formatMessage({ id: 'step-3.ko.heading' })}`}</h2>
        <p>{isOK ? `${intl.formatMessage({ id: 'step-3.ok.text' })}` : `${intl.formatMessage({ id: 'step-3.ko.text' })}`}</p>
      </div>
    </div>
  );
}

export default FeedbackCard;

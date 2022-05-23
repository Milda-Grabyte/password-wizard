import React, { useState, useEffect } from 'react';
import FeedbackCard from '../components/FeedbackCard';
import Loader from '../components/Loader';
import { submitForm } from '../services/api';
import '../styles/feedbackView.scss';

function FeedbackView({userData, setResult}) {
    const [loading, setLoading] = useState(true)
    const [feedbackType, setFeedbackType] = useState('ko');

    useEffect(() => {
      function callApi() {
        submitForm(userData)
          .then((result) => {
            if (result.status === 200) {
              setResult({ success: true });
              setLoading(false);
              setFeedbackType('ok');
            }
          })
          .catch((err) => {
            if (err.status === 401) {
              setLoading(false);
            }
          });
      }

      callApi();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const content =
        loading === true
        ? <Loader />
        : <FeedbackCard feedbackType={feedbackType} />;
    
    return <div className='content__feedback'>{content}</div>;
}

export default FeedbackView;
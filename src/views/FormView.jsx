import React from 'react';
import { useIntl } from 'react-intl';
import '../styles/content.scss';

function FormView() {
    const intl = useIntl();
    return (
      <div className='content__form'>
        <h1>{`${intl.formatMessage({ id: 'step-2.heading' })}`}</h1>
      </div>
    );
}

export default FormView;
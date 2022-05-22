import React from 'react';
import { useIntl } from 'react-intl';
import '../styles/content.scss';
import '../styles/productInformation.scss';
import paymentImg from '../assets/img/payment-method.png';
import securityImg from '../assets/img/web-security.png';

function ProductInformation({setIsDisabled, isDisabled}) {
    const intl = useIntl();

    function handleCheck(isChecked) {
        setIsDisabled(!isChecked);
    }

    return (
      <div className='content__product-info'>
        <h1>{`${intl.formatMessage({ id: 'step-1.heading' })}`}</h1>
        <div className='visual-info'>
          <div>
            <img src={paymentImg} alt='Payment' />
            <p>{`${intl.formatMessage({ id: 'step-1.product' })}`}</p>
          </div>
          <div>
            <img src={securityImg} alt='Security' />
            <p>{`${intl.formatMessage({ id: 'step-1.password' })}`}</p>
          </div>
        </div>
        <h2>{`${intl.formatMessage({ id: 'step-1.functioning' })}`}</h2>
        <p>{`${intl.formatMessage({ id: 'step-1.functioning.text' })}`}</p>
        <h2>{`${intl.formatMessage({ id: 'step-1.data' })}`}</h2>
        <p>{`${intl.formatMessage({ id: 'step-1.data.text' })}`}</p>
        <label>
          <input type='checkbox' onChange={(event) => handleCheck(event.currentTarget.checked)} id='data-consent--checkbox' />{' '}
          {`${intl.formatMessage({ id: 'step-1.checkbox' })}`}
        </label>
      </div>
    );
}

export default ProductInformation;
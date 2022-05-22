import React, { useState} from 'react';
import { useIntl } from 'react-intl';
import '../styles/content.scss';
import '../styles/formView.scss';

function FormView() {
  const intl = useIntl();
  const [message, setMessage] = useState('');
  
  function validatePassword(password) {
    const digitCheck = /\d/;
    const capitalLetterCheck = /[A-Z]/;
    if (password.length < 8 || password.length > 24) {
      setMessage('La longitud tiene que ser de 8-24 caracteres');
    } else if (!digitCheck.test(password) || !capitalLetterCheck.test(password)) {
      setMessage('Tiene que haber al menos 1 dígito y 1 mayúscula');
    } else {
      setMessage('');
    }
  }
    return (
      <div className='content__form'>
        <h1>{`${intl.formatMessage({ id: 'step-2.heading' })}`}</h1>
        <p className='content__form-description'>{`${intl.formatMessage({ id: 'step-2.functioning.text' })}`}</p>
        <div className='content__form-requirements'>
          <span>!</span>
          <p>{`${intl.formatMessage({ id: 'step-2.passwordRequirements' })}`}</p>
        </div>
        <div className='content__form-password'>
          <label>
            {`${intl.formatMessage({ id: 'step-2.createPassword' })}`}
            <input
              type='password'
              id='password--input'
              placeholder={`${intl.formatMessage({ id: 'step-2.createPassword.placeholder' })}`}
              onChange={(e) => validatePassword(e.target.value)}
              required
            />
          </label>
          <label>
            {`${intl.formatMessage({ id: 'step-2.repeatPassword' })}`}
            <input
              type='password'
              id='password-repeat--input'
              placeholder={`${intl.formatMessage({ id: 'step-2.repeatPassword.placeholder' })}`}
              required
            />
          </label>
          <div className='content__form-password--warning-container'>
            <p className='content__form-password--warning'>{message}</p>
          </div>
        </div>
        <p>{`${intl.formatMessage({ id: 'step-2.clue.text' })}`}</p>
        <p className='content__form-clue'>{`${intl.formatMessage({ id: 'step-2.clue' })}`}</p>
        <input type='text' id='clue--input' placeholder={`${intl.formatMessage({ id: 'step-2.clue.placeholder' })}`} maxlength='60'></input>
        <p className='content__form-clue--count'>0/255</p>
      </div>
    );
}

export default FormView;
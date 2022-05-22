import React, { useState, useEffect} from 'react';
import { useIntl } from 'react-intl';
import '../styles/content.scss';
import '../styles/formView.scss';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

function FormView({setIsDisabled, setUserData}) {
  const intl = useIntl();
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [clue, setClue] = useState('');
  const [visibility, setVisibility] = useState({
    password: { type: 'password', icon: <BsFillEyeFill /> },
    repeatedPassword: { type: 'password', icon: <BsFillEyeFill /> }
  });

  useEffect(() => {
    setUserData({password: password, clue: clue });
  }, [password, clue]);
  
  function validatePassword(password) {
    const digitCheck = /\d/;
    const capitalLetterCheck = /[A-Z]/;
    if (password.length < 8 || password.length > 24) {
      setMessage(`${intl.formatMessage({ id: 'step-2.warning.length' })}`);
    } else if (!digitCheck.test(password) || !capitalLetterCheck.test(password)) {
      setMessage(`${intl.formatMessage({ id: 'step-2.warning.characters' })}`);
    } else {
      setMessage('');
      setPassword(password);
    }
  }

  function matchPasswords(password, repeatedPassword) {
    if (password === repeatedPassword) {
      setIsDisabled(false);
      setMessage('');
    } else {
      setIsDisabled(true);
      setMessage(`${intl.formatMessage({ id: 'step-2.warning.non-matching' })}`);
    }
  }

  function toggleVisibility(input) {
    const type = visibility[input].type === 'password' ? 'text' : 'password';
    const icon = visibility[input].type === 'text' ? <BsFillEyeFill /> : <BsFillEyeSlashFill />;
    setVisibility({ ...visibility, [input]: { type: type, icon: icon } });
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
              type={visibility.password.type}
              id='password--input'
              placeholder={`${intl.formatMessage({ id: 'step-2.createPassword.placeholder' })}`}
              onChange={(e) => {
                validatePassword(e.target.value)
                repeatedPassword.length > 0 && matchPasswords(e.target.value, repeatedPassword)
              }}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              required
            />
            <i onClick={() => toggleVisibility('password')}>{visibility.password.icon}</i>
          </label>
          <label>
            {`${intl.formatMessage({ id: 'step-2.repeatPassword' })}`}
            <input
              type={visibility.repeatedPassword.type}
              id='password-repeat--input'
              placeholder={`${intl.formatMessage({ id: 'step-2.repeatPassword.placeholder' })}`}
              onChange={(e) => {
                setRepeatedPassword(e.target.value);
                matchPasswords(password, e.target.value);
              }}
              required
            />
            <i onClick={() => toggleVisibility('repeatedPassword')}>{visibility.repeatedPassword.icon}</i>
          </label>
          <div className='content__form-password--warning-container'>
            <p className='content__form-password--warning'>{message}</p>
          </div>
        </div>
        <p>{`${intl.formatMessage({ id: 'step-2.clue.text' })}`}</p>
        <p className='content__form-clue'>{`${intl.formatMessage({ id: 'step-2.clue' })}`}</p>
        <input
          type='text'
          id='clue--input'
          placeholder={`${intl.formatMessage({ id: 'step-2.clue.placeholder' })}`}
          onChange={(e) => setClue(e.target.value)}
          onPaste={(e) => {
            e.preventDefault();
            return false;
          }}
          maxLength='255'
        ></input>
        <p className={`content__form-clue--count ${clue.length === 255 ? 'alert' : ''}`}>{`${clue.length}/255`}</p>
      </div>
    );
}

export default FormView;
import React from 'react';
import { useIntl } from 'react-intl';
import '../styles/button.scss';

function Button({ type, onClick, isDisabled }) {
  const intl = useIntl();

  const disabledClass = isDisabled ? 'disabled' : '';

  return <input type='button' disabled={isDisabled} onClick={onClick} className={`button ${type} ${disabledClass}`} value=
  {`${intl.formatMessage({ id: `footer.button.${type}` })}`} />
}

export default Button;

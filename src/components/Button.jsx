import React from 'react';
import { useIntl } from 'react-intl';
import '../styles/button.scss';

function Button({ type, onClick }) {
  const intl = useIntl();
  return <input type='button' onClick={onClick} className={`button ${type}`} value=
  {`${intl.formatMessage({ id: `footer.button.${type}` })}`} />
}

export default Button;

import React from 'react';
import { useIntl } from 'react-intl';

function Button({ type }) {
  const intl = useIntl();
  return <input type='button' className={`button ${type}`} value=
  {`${intl.formatMessage({ id: `footer.button.${type}` })}`} />
}

export default Button;

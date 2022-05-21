import React from 'react';
import Button from './Button';
import '../styles/footer.scss';

function Footer({ step, success = true }) {
  const buttons =
    step !== 3 ? (
      <>
        <Button type='cancel' />
        <Button type='next' />
      </>
    ) : (
      <Button type={success === true ? 'ok' : 'ko'} />
    );
  return (
    <footer>
      {buttons}
    </footer>
  );
}

export default Footer;
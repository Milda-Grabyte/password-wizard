import React from 'react';
import ProgressBar from './ProgressBar';
import '../styles/header.scss';

function Header({ step }) {
  
  return (
    <header>
      <ProgressBar selectedStep={step}/>
    </header>
  );
}

export default Header;

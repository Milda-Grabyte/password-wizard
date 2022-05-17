import React from 'react';
import OpenbankLogo from './assets/img/key_openbank.png';
import CustomRouter from './router/CustomRouter';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <img className='App__bkg-img' src={OpenbankLogo} alt='Openbank logo'></img>
      <CustomRouter />
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import OpenbankLogo from './assets/img/key_openbank.png';
import './App.scss';
import PasswordWizard from './components/PasswordWizard';

function App() {
  const [delayedComponent, setDelayedComponent] = useState(<></>);

  useEffect(() => {
    setTimeout(() => setDelayedComponent(<PasswordWizard />), 3000);
  }, []);

  return (
    <div className='App'>
      <img className='App__bkg-img' src={OpenbankLogo} alt='Openbank logo'></img>
      <div className='App__content--wrapper'>{delayedComponent}</div>
    </div>
  );
}

export default App;

import React from 'react';
import Main from './Main';
import Alert from './Alert/Alert';
import { AlertProvider } from './Alert/AlertContext';

function App() {
  return (
    <AlertProvider>
      <div className="container pt-4">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  )
}

export default App;
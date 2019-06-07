import React from 'react';
import './styles/styles.sass';
import Login from './components/Login/Login';

function LoginContainer() {
  return (
    <div className="general-login-back">
      <Login />
    </div>
  );
}

function App() {
  return (
    <LoginContainer />
  );
}

export default App;

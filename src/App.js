import React, { useState } from 'react';
import './App.css'
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';

const App = () => {
  const [activeForm, setActiveForm] = useState('home');

  const switchToRegister = () => {
    setActiveForm('register');
  };

  const switchToLogin = () => {
    setActiveForm('login');
  };

  const handleRegistrationSuccess = () => {
    setActiveForm('login');
  };

  const handleLoginSuccess = () => {
    setActiveForm('home');
  };

  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      {activeForm === 'home' && (
        <Home switchToLogin={switchToLogin} />
      )}
      {activeForm === 'login' && (
        <Login
          switchToRegister={switchToRegister}
          onLoginSuccess={handleLoginSuccess}
          />
      )}
      {activeForm === 'register' && (
        <Registration
          switchToLogin={switchToLogin}
          onRegistrationSuccess={handleRegistrationSuccess}
        />
      )}
    </div>
  );
};

export default App;
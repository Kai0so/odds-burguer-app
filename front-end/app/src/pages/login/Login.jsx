import React from 'react';
import {
  RegisterButton, Subtitle, LoginForm, LoginTemplate, ForgotPasswordButton,
} from '../../components';

function Login() {
  return (
    <div>
      <LoginTemplate />
      <div className="login-container">
        <Subtitle />
        <LoginForm />
        <div className="button-container">
          <ForgotPasswordButton />
          <RegisterButton />
        </div>
      </div>
    </div>
  );
}

export default Login;

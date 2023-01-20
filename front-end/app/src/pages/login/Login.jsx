import React from 'react';
import {
  RegisterButton, Subtitle, LoginForm, LoginTemplate,
} from '../../Components';

function Login() {
  return (
    <div>
      <LoginTemplate />
      <Subtitle />
      <LoginForm />
      <RegisterButton />
    </div>
  );
}

export default Login;

import React from 'react';
import {
  RegisterButton, Subtitle, Form, LoginTemplate,
} from '../../Components';

function Login() {
  return (
    <div>
      <LoginTemplate />
      <Subtitle />
      <Form />
      <RegisterButton />
    </div>
  );
}

export default Login;
